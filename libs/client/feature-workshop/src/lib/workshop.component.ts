import { AfterViewInit, Component, ComponentFactoryResolver, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core'
import { HostRefDirective, VideoComponent } from '@mymessage/client/ui-media';
import { WorkshopFacade } from '@mymessage/client/domain'
import {
  createPeerId,
  WebRTCPeerConnection,
  getRTCConfiguration,
  getDisplayMedia,
} from '@mymessage/client/util-peer'
import { filter } from 'rxjs/operators'

@Component({
  selector: 'client-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss'],
})
export class WorkshopComponent implements OnInit, AfterViewInit, OnDestroy {
  topic$ = this.workshopFacade.topic$

  @ViewChild(HostRefDirective) mediaHostRef!: HostRefDirective

  @ViewChild('me') me!: ElementRef<HTMLVideoElement>
  @ViewChild('remote') remote!: ElementRef<HTMLVideoElement>
  localStream: MediaStream
  peer: WebRTCPeerConnection
  sender = createPeerId()

  constructor(
    private workshopFacade: WorkshopFacade,
    private cfr: ComponentFactoryResolver,
    private renderer: Renderer2,
  ) {}

  ngAfterViewInit() {


    console.log(this.mediaHostRef);

  }
  async ngOnInit() {
    this.load()

    this.workshopFacade.topic$
      .pipe(filter((value) => !!value))
      .subscribe(async ({ sender, message } = {}) => {
        /**
         * Candidato e descrições */
        const { ice, sdp } = message

        /**
         * Para mensagens alheias */
        if (sender !== this.sender) {
          /**
           * Candidato de parceria */
          if (!!ice && !!this.peer) {
            /**
             * Adicione-o para uma negociação de stream */
            await this.peer.addIceCandidate(new RTCIceCandidate(ice))

            /**
             * Ou então para uma oferta */
          } else if (sdp?.type === 'offer') {
            /**
             * Configure com descrições necessárias para negociação */
            await this.peer.setRemoteDescription(new RTCSessionDescription(sdp))

            /**
             * Prepare uma resposta local para a oferta */
            const answer = await this.peer.createAnswer()
            await this.peer.setLocalDescription(answer)

            /**
             * E envie como resposta */
            this.workshopFacade.offer({
              sender: this.sender,
              message: { sdp: this.peer.localDescription },
            })
            /**
             * Ou tenha recebido já uma resposta */
          } else if (!!sdp && sdp.type === 'answer') {
            /**
             * Somente configure com descrições úteis para negociação */
            this.peer.setRemoteDescription(new RTCSessionDescription(sdp))
          }
        }
      })
  }

  load(): void {
    this.workshopFacade.load()

    try {
      this.peer = this.createConnection(getRTCConfiguration())
    } catch (error) {
      this.peer = this.createConnection(getRTCConfiguration())
    }

    this.peer.addEventListener('icecandidate', ({ candidate }) => {
      if (candidate) {
        this.workshopFacade.offer({
          sender: this.sender,
          message: { ice: candidate },
        })
      }
    })
    this.peer.addEventListener('track', ({ streams }) => {
      this.showRemote(streams)
    })
  }

  showRemote([stream]: readonly MediaStream[]) {
    this.remote.nativeElement.srcObject = stream
  }
  createConnection(configuration: RTCConfiguration) {
    return new RTCPeerConnection(configuration) as WebRTCPeerConnection
  }

  async share() {
    const video = document.createElement('video');
    video.muted = true;
    video.srcObject = await (navigator.mediaDevices as any).getDisplayMedia({ video: true });
    video.play();

    video.addEventListener('loadedmetadata', () => {
      (video as any).requestPictureInPicture();
    })


    /**
     * Captura tela do dispositivo */
    // const stream = await getDisplayMedia()

    // const video = document.createElement('video')
    // video.srcObject = stream
    // if ('requestPictureInPicture' in video) {
    //   video.requestPictureInPicture()
    // }

    // this.mediaHostRef.viewContainerRef.createComponent(
    //   this.cfr.resolveComponentFactory(VideoComponent)
    // )
    // // video.controls
    // this.renderer.createElement('video', '')
    // /**
    //  * Faz o vincula com elemento de video */
    // this.me.nativeElement.srcObject = stream
    // /**
    //  * Adiciona na negociação */
    // this.peer.addStream(stream)
    // /**
    //  * Guarda para re-uso */
    // this.localStream = stream
    // /**
    //  * Cria uma nova oferta */
    // const offer = await this.peer.createOffer()
    // /**
    //  * Configura a oferta a negociação */
    // await this.peer.setLocalDescription(offer)
    // /**
    //  * Faz o envio da oferta */
    // this.workshopFacade.offer({
    //   sender: this.sender,
    //   message: { sdp: this.peer.localDescription },
    // })
  }

  hangup() {
    this.peer.close()
    this.localStream.getTracks()
      .forEach(track => track.stop())
  }

  ngOnDestroy() {
    this.hangup()
  }
}
