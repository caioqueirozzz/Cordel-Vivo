import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { OurCulture } from './components/OurCulture'
import { TheProblem } from './components/TheProblem'
import { TheSolution } from './components/TheSolution'
import { PoetProfile } from './components/PoetProfile'
import { PublishFlow } from './components/PublishFlow'
import { SmartSearch } from './components/SmartSearch'
import { EducationSection } from './components/EducationSection'
import { Library } from './components/Library'
import { DigitalMuseum } from './components/DigitalMuseum'
import { WomenVoices } from './components/WomenVoices'
import { SocialImpact } from './components/SocialImpact'
import { References } from './components/References'
import { Closing } from './components/Closing'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OurCulture />
        <TheProblem />
        <TheSolution />
        <PoetProfile />
        <PublishFlow />
        <SmartSearch />
        <EducationSection />
        <Library />
        <DigitalMuseum />
        <WomenVoices />
        <SocialImpact />
<References />
        <Closing />
      </main>
    </>
  )
}
