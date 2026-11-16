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
    (target instanceof Element && Boolean(target.closest('img, video')))
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

    document.addEventListener('contextmenu', blockMediaMenu)
    document.addEventListener('dragstart', blockMediaDrag)
    return () => {
      document.removeEventListener('contextmenu', blockMediaMenu)
      document.removeEventListener('dragstart', blockMediaDrag)
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
