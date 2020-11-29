import { from } from 'rxjs'

export async function getUserMedia(constraints?: MediaStreamConstraints) {
  return from(navigator.mediaDevices.getUserMedia(constraints))
}
