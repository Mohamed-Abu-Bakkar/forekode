import Home from './components/Home.jsx'
import Projects from './components/Projects.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx' // Add this import

export default function App() {
  return (
    <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory" style={{scrollSnapType: 'y mandatory'}}>
      <section className="snap-start h-screen w-full">
        <Home />
      </section>
      <section className="snap-start h-screen w-full">
        <Projects />
      </section>
      <section className="snap-start h-screen w-full">
        <Services />
      </section>
      <section className="snap-start h-screen w-full">
        <Contact />
      </section>
    </div>
  )
}
