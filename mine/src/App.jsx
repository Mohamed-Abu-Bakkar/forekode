import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx"; // Add this import
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";

export default function App() {
  return (
    <div className="w-full min-h-screen snap-y snap-mandatory scroll-smooth">
      <Navbar />
      <section id="home" className="snap-start h-screen w-full">
        <Home />
      </section>
      <section id="projects" className="snap-start minh-screen w-full">
        <Projects />
      </section>
      <section id="services" className="snap-start h-screen w-full">
        <Services />
      </section>
      <section id="contact" className="snap-start h-screen w-full">
        <Contact />
      </section>
      <section id="about" className="snap-start min-h-screen w-full">
        <About />
      </section>
    </div>
  );
}
