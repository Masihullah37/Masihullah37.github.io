// "use client"
// import { FaGithub, FaLinkedin } from "react-icons/fa"

// function Hero() {
//   // Smooth scroll to section
//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId)
//     if (element) {
//       window.scrollTo({
//         top: element.offsetTop - 80,
//         behavior: "smooth",
//       })
//     }
//   }

//   return (
//     <section id="home" className="hero min-vh-100 d-flex align-items-center">
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-md-7 order-md-1 order-2">
//             <h1 className="display-4 fw-bold gradient-text mb-3 jetbrains-mono-bold">Masihullah Rushan Zamir</h1>
//             <h2 className="fs-3 text-secondary mb-4 jetbrains-mono-medium">Développeur Web et Web Mobile</h2>
//             <p className="lead mb-4 jetbrains-mono-light">
//               Passionné par la création d'interfaces dynamiques, modernes et accessibles
//             </p>
//             <div className="d-flex flex-wrap gap-3">
//               <button
//                 onClick={() => scrollToSection("contact")}
//                 className="btn btn-primary btn-lg jetbrains-mono-regular"
//               >
//                 Me contacter
//               </button>
//               <button
//                 onClick={() => scrollToSection("projects")}
//                 className="btn btn-outline-primary btn-lg jetbrains-mono-regular"
//               >
//                 Voir mes projets
//               </button>
//             </div>
//             <div className="mt-4 d-flex gap-3">
//               <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-secondary fs-4">
//                 <FaGithub />
//               </a>
//               <a
//                 href="https://www.linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-secondary fs-4"
//               >
//                 <FaLinkedin />
//               </a>
//             </div>
//           </div>
//           <div className="col-md-5 order-md-2 order-1 text-center mb-4 mb-md-0">
//             <div className="profile-image mx-auto d-flex align-items-center justify-content-center">
//               <span className="display-1 text-white fw-bold jetbrains-mono-bold">MZ</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero

"use client"

function Hero() {
  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="home" className="hero min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7 order-md-1 order-2">
            <h1 className="display-4 fw-bold gradient-text mb-3 jetbrains-mono-bold">Masihullah Rushan Zamir</h1>
            <h2 className="fs-3 text-secondary mb-4 jetbrains-mono-medium">Développeur Web et Web Mobile</h2>
            <p className="lead mb-4 jetbrains-mono-light">
              Passionné par la création d'interfaces dynamiques, modernes et accessibles
            </p>
            <div className="d-flex flex-wrap gap-3">
              <button
                onClick={() => scrollToSection("contact")}
                className="btn btn-primary btn-lg jetbrains-mono-regular"
              >
                Me contacter
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="btn btn-outline-primary btn-lg jetbrains-mono-regular"
              >
                Voir mes projets
              </button>
            </div>
            <div className="mt-4 d-flex gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-secondary fs-4">
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary fs-4"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="col-md-5 order-md-2 order-1 text-center mb-4 mb-md-0">
            <div className="profile-image mx-auto d-flex align-items-center justify-content-center">
              <span className="display-1 text-white fw-bold jetbrains-mono-bold">MZ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

