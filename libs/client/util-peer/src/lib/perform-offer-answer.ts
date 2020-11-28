export async function performOfferAnswer(
  pc1: RTCPeerConnection,
  pc2: RTCPeerConnection
) {
  const offer = await pc1.createOffer()
  await pc1.setLocalDescription(offer)
  await pc2.setRemoteDescription(offer)
  const answer = await pc2.createAnswer()
  await pc2.setLocalDescription(answer)
  await pc1.setRemoteDescription(answer)
}
