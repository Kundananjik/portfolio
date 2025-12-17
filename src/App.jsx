import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Certifications from "./components/Certifications"
import Contact from "./components/Contact"

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-black text-white">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <Projects />

        {/* Experience Section */}
        <Experience />

        {/* Certifications Section */}
        <Certifications />

        {/* Contact Section */}
        <Contact />
      </main>
    </>
  )
}

export default App
