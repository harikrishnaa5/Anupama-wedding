export const VIDEO_PLAYING = 'wedding:video-playing'
export const VIDEO_STOPPED = 'wedding:video-stopped'

export function notifyVideoPlaying() {
  window.dispatchEvent(new Event(VIDEO_PLAYING))
}

export function notifyVideoStopped() {
  window.dispatchEvent(new Event(VIDEO_STOPPED))
}
