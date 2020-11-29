import { performOfferAnswer } from './perform-offer-answer'

export async function logPeerTracks(sdpSemantics: string) {
  console.log('--- sdpSemantics: ' + sdpSemantics + ' ---')
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
  const [track] = stream.getTracks()

  const config: RTCConfiguration = {
    iceServers: [
      { urls: 'stun:stun.stunprotocol.org:3478' },
      { urls: 'stun:stun.l.google.com:19302' },
    ],
  }
  const pc1 = new RTCPeerConnection(config)
  const pc2 = new RTCPeerConnection(config)
  const sender = pc1.addTrack(track, stream)

  pc2.ontrack = (e) => {
    console.log('- pc.ontrack fired!')
    e.track.onmute = () => console.log('- track.onmute fired!')
    e.track.onended = () => console.log('- track.onended fired!')
    e.streams[0].onremovetrack = () =>
      console.log('- stream.onremovetrack fired!')
  }

  console.log('Negotiate adding a track.')
  await performOfferAnswer(pc1, pc2)

  pc1.removeTrack(sender)
  console.log('Negotiate "removing" the track.')
  await performOfferAnswer(pc1, pc2)
}
