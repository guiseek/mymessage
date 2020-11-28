export function getOfferConfig(options?: RTCOfferOptions) {
  return Object.assign(
    {
      offerToReceiveAudio: true,
      offerToReceiveVideo: true,
    },
    options ?? {}
  )
}

export function getDataChannelConfig(options?: RTCDataChannelInit) {
  return Object.assign({ ordered: true }, options ?? {})
}

export function getRTCConfiguration(): RTCConfiguration {
  return {
    iceServers: [
      { urls: 'stun:stun.services.mozilla.com' },
      { urls: 'stun:stun.l.google.com:19302' },
    ],
  }
}
