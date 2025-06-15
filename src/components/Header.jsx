"use client"

import { useState } from "react"

function Header({ activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  const sections = ["home", "about", "skills", "education", "experience", "projects", "languages", "contact"]

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
      <div className="container">
        <a className="navbar-brand gradient-text jetbrains-mono-bold" href="#home">
          Masihullah R. Zamir
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {sections.map((section) => (
              <li className="nav-item" key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`nav-link jetbrains-mono-regular ${activeSection === section ? "active" : ""}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
