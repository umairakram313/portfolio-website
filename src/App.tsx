import CurrentlySection from "./components/home/CurrentlySection"
import ExperienceSection from "./components/home/ExperienceSection"
import Hero from "./components/home/Hero"
import ProjectsSection from "./components/home/ProjectsSection"
import ThoughtsSection from "./components/home/ThoughtsSection"
import SiteFooter from "./components/SiteFooter"
import SiteHeader from "./components/SiteHeader"

export default function App() {
  return (
    <div className="min-h-full bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <ProjectsSection />
        <ThoughtsSection />
        <ExperienceSection />
        <CurrentlySection />
      </main>
      <SiteFooter />
    </div>
  )
}
