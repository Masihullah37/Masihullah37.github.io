// import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaGithub, FaLinkedin } from "react-icons/fa"

// function Contact() {
//   return (
//     <section id="contact" className="py-5">
//       <div className="container">
//         <h2 className="text-center gradient-text fw-bold mb-5 jetbrains-mono-bold">Contact</h2>
//         <div className="row justify-content-center">
//           <div className="col-lg-8">
//             <div className="card border-0 shadow-sm">
//               <div className="card-body p-4">
//                 <div className="row">
//                   <div className="col-md-6 mb-4 mb-md-0">
//                     <div className="d-flex mb-3">
//                       <div className="flex-shrink-0 text-primary me-3">
//                         <FaMapMarkerAlt size={20} />
//                       </div>
//                       <div>
//                         <p className="mb-0 jetbrains-mono-regular">1 Rue le notre, Joué les tours, 37300</p>
//                       </div>
//                     </div>
//                     <div className="d-flex mb-3">
//                       <div className="flex-shrink-0 text-primary me-3">
//                         <FaPhone size={20} />
//                       </div>
//                       <div>
//                         <p className="mb-0 jetbrains-mono-regular">+33602324278</p>
//                       </div>
//                     </div>
//                     <div className="d-flex mb-3">
//                       <div className="flex-shrink-0 text-primary me-3">
//                         <FaEnvelope size={20} />
//                       </div>
//                       <div>
//                         <p className="mb-0 jetbrains-mono-regular">digitalmail372@gmail.com</p>
//                       </div>
//                     </div>
//                     <div className="d-flex">
//                       <div className="flex-shrink-0 text-primary me-3">
//                         <FaGlobe size={20} />
//                       </div>
//                       <div>
//                         <p className="mb-0 jetbrains-mono-regular">www.linkedin.com</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="d-flex mb-3">
//                       <a
//                         href="https://github.com"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="btn btn-outline-primary d-flex align-items-center jetbrains-mono-regular"
//                       >
//                         <FaGithub className="me-2" /> GitHub
//                       </a>
//                     </div>
//                     <div className="d-flex">
//                       <a
//                         href="https://www.linkedin.com"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="btn btn-outline-primary d-flex align-items-center jetbrains-mono-regular"
//                       >
//                         <FaLinkedin className="me-2" /> LinkedIn
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Contact

function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="text-center gradient-text fw-bold mb-5 jetbrains-mono-bold">Contact</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-md-6 mb-4 mb-md-0">
                    <div className="d-flex mb-3">
                      <div className="flex-shrink-0 text-primary me-3">
                        <i className="bi bi-geo-alt"></i>
                      </div>
                      <div>
                        <p className="mb-0 jetbrains-mono-regular">1 Rue le notre, Joué les tours, 37300</p>
                      </div>
                    </div>
                    <div className="d-flex mb-3">
                      <div className="flex-shrink-0 text-primary me-3">
                        <i className="bi bi-telephone"></i>
                      </div>
                      <div>
                        <p className="mb-0 jetbrains-mono-regular">+33602324278</p>
                      </div>
                    </div>
                    <div className="d-flex mb-3">
                      <div className="flex-shrink-0 text-primary me-3">
                        <i className="bi bi-envelope"></i>
                      </div>
                      <div>
                        <p className="mb-0 jetbrains-mono-regular">digitalmail372@gmail.com</p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="flex-shrink-0 text-primary me-3">
                        <i className="bi bi-globe"></i>
                      </div>
                      <div>
                        <p className="mb-0 jetbrains-mono-regular">www.linkedin.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex mb-3">
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary d-flex align-items-center jetbrains-mono-regular"
                      >
                        <i className="bi bi-github me-2"></i> GitHub
                      </a>
                    </div>
                    <div className="d-flex">
                      <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary d-flex align-items-center jetbrains-mono-regular"
                      >
                        <i className="bi bi-linkedin me-2"></i> LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

