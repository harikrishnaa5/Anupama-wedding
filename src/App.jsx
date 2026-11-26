import { useEffect } from 'react'
import Hero from './components/Hero'
import Invitation from './components/Invitation'
import SaveTheDate from './components/SaveTheDate'
import Gallery from './components/Gallery'
import Closing from './components/Closing'
import MusicControl from './components/MusicControl'

function isMediaTarget(target) {
  return (
    target instanceof HTMLImageElement ||
    target instanceof HTMLVideoElement ||
    target instanceof HTMLAudioElement ||
    (target instanceof Element && Boolean(target.closest('img, video, audio, canvas')))
  )
}

export default function App() {
  useEffect(() => {
    const blockMediaMenu = (event) => {
      if (isMediaTarget(event.target)) event.preventDefault()
    }

    const blockMediaDrag = (event) => {
      if (isMediaTarget(event.target)) event.preventDefault()
    }

    const blockMediaCopy = (event) => {
      if (isMediaTarget(event.target)) event.preventDefault()
    }

    // Block common save / print shortcuts as a deterrent (not foolproof)
    const blockSaveShortcuts = (event) => {
      const key = event.key?.toLowerCase()
      const mod = event.ctrlKey || event.metaKey
      if (!mod) return

      if (key === 's' || key === 'p') {
        event.preventDefault()
      }
    }

    // Soft deterrent when a display-capture session may be active in-page
    const blockCaptureGesture = () => {
      document.documentElement.classList.add('capture-deterrent')
      window.setTimeout(() => {
        document.documentElement.classList.remove('capture-deterrent')
      }, 800)
    }

    const onKeyUp = (event) => {
      // PrintScreen can't be cancelled; brief overlay flash as deterrent only
      if (event.key === 'PrintScreen') blockCaptureGesture()
    }

    document.addEventListener('contextmenu', blockMediaMenu)
    document.addEventListener('dragstart', blockMediaDrag)
    document.addEventListener('copy', blockMediaCopy)
    document.addEventListener('cut', blockMediaCopy)
    document.addEventListener('keydown', blockSaveShortcuts)
    document.addEventListener('keyup', onKeyUp)

    return () => {
      document.removeEventListener('contextmenu', blockMediaMenu)
      document.removeEventListener('dragstart', blockMediaDrag)
      document.removeEventListener('copy', blockMediaCopy)
      document.removeEventListener('cut', blockMediaCopy)
      document.removeEventListener('keydown', blockSaveShortcuts)
      document.removeEventListener('keyup', onKeyUp)
    }
  }, [])

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <Invitation />
      <SaveTheDate />
      <Gallery />
      <Closing />
      <MusicControl />
    </main>
  )
}
