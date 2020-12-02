export interface TopicMessage {
  sdp?: RTCSessionDescription
  ice?: RTCIceCandidate
}

export interface Topic {
  message?: TopicMessage
  sender?: string
}
