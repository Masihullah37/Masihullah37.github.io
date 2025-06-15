
import { useState, useEffect } from "react"
import "./App.css"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Languages from "./components/Languages"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  const [activeSection, setActiveSection] = useState("home")

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="app">
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
