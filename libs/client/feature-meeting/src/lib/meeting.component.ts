import {
  Input,
  OnInit,
  Component,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core'
import {
  createPeerId,
  WebRTCPeerConnection,
  getRTCConfiguration,
} from '@mymessage/client/util-peer'
import { WebSocketFacade } from '@mymessage/client/util-message'

const stringify = (obj: object) => JSON.stringify(obj)
const toJSON = (str: string) => JSON.parse(str)
const notNull = (val: any) => val !== null
const isDefined = (val: any) => val !== undefined

@Component({
  selector: 'client-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss'],
})
export class MeetingComponent implements OnInit, OnDestroy {
  callActive = false

  peer: WebRTCPeerConnection

  localStream: MediaStream

  senderId: string

  @Input() autoplay = false

  @ViewChild('me') me!: ElementRef<HTMLVideoElement>
  @ViewChild('remote') remote!: ElementRef<HTMLVideoElement>

  constructor(private socket: WebSocketFacade) {}

  ngOnInit(): void {
    this.setUpMeet()
  }

  setUpMeet() {
    this.senderId = createPeerId()

    this.socket.on('offer', this.read.bind(this))

    try {
      this.peer = this.createConnection(getRTCConfiguration())
    } catch (error) {
      this.peer = this.createConnection(getRTCConfiguration())
    }

    this.peer.addEventListener('icecandidate', ({ candidate }) =>
      candidate
        ? this.send(this.senderId, stringify({ ice: candidate }))
        : console.log('Sent All Ice')
    )

    this.peer.addEventListener('track', ({ streams }) => {
      this.remote.nativeElement.srcObject = streams[0]
    })

    this.showMe()
  }

  createConnection(configuration: RTCConfiguration) {
    return new RTCPeerConnection(configuration) as WebRTCPeerConnection
  }

  send(sender: string, message: any) {
    this.socket.emit('offer', { sender, message })
  }

  read({ message, sender }: any) {
    try {
      const { ice, sdp } = toJSON(message)

      if (sender !== this.senderId) {
        if (isDefined(ice) && notNull(this.peer)) {
          this.peer.addIceCandidate(new RTCIceCandidate(ice))
        } else if (sdp.type === 'offer') {
          this.callActive = true

          this.peer
            .setRemoteDescription(new RTCSessionDescription(sdp))
            .then(() => this.peer.createAnswer())
            .then((answer) => this.peer.setLocalDescription(answer))
            .then(() => {
              const description = { sdp: this.peer.localDescription }
              this.send(this.senderId, stringify(description))
            })
        } else if (sdp.type === 'answer') {
          this.callActive = true

          this.peer.setRemoteDescription(new RTCSessionDescription(sdp))
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  showMe() {
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: true })
      .then((stream) => (this.me.nativeElement.srcObject = stream))
      .then((stream) => {
        this.peer.addStream(stream)
        this.localStream = stream
        this.me.nativeElement.muted = true
        this.showRemote()
      })
  }

  showRemote() {
    try {
      this.peer
        .createOffer()
        .then((offer) => this.peer.setLocalDescription(offer))
        .then(() => {
          const message = { sdp: this.peer.localDescription }
          this.send(this.senderId, stringify(message))

          // this.remote.nativeElement.muted = true;
          this.callActive = true
        })
    } catch (error) {
      this.setUpMeet()
      console.log(error)
    }
  }

  hangup() {
    this.peer.close()

    const tracks = this.localStream.getTracks()
    for (let i = 0; i < tracks.length; i++) {
      tracks[i].stop()
    }

    this.callActive = false
  }

  ngOnDestroy(): void {
    if (this.peer) {
      this.peer.close()

      for (const track of this.localStream.getTracks()) {
        track.stop()
      }
    }
  }
}
