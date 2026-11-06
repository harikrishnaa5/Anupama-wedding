import Hero from './components/Hero'
import Invitation from './components/Invitation'
import SaveTheDate from './components/SaveTheDate'
import WeddingDetails from './components/WeddingDetails'
import Gallery from './components/Gallery'
import Closing from './components/Closing'
import MusicControl from './components/MusicControl'

export default function App() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <Invitation />
      <SaveTheDate />
      <WeddingDetails />
      <Gallery />
      <Closing />
      <MusicControl />
    </main>
  )
}
