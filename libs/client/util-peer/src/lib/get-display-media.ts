export async function getDisplayMedia(): Promise<MediaStream> {
  return new Promise(async (resolve, reject) => {
    try {
      const nav = <any>window.navigator
      let screen: MediaStream
      if (nav.getDisplayMedia) {
        screen = await nav.getDisplayMedia({ video: true })
      } else if (nav.mediaDevices.getDisplayMedia) {
        screen = await nav.mediaDevices.getDisplayMedia({ video: true })
      } else {
        screen = await nav.mediaDevices.getUserMedia({
          video: { mediaSource: 'screen' },
        })
      }
      return resolve(screen)
    } catch (error) {
      reject(error)
    }
  })
  // return from(navigator.mediaDevices.getDisplayMedia(constraints));
}
