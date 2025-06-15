function Experience() {
  return (
    <section id="experience" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center gradient-text fw-bold mb-5 jetbrains-mono-bold">Expérience Professionnelle</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h3 className="card-title mb-2 jetbrains-mono-medium">
                  Stage en développement Web – Projet e-commerce
                </h3>
                <div className="d-flex align-items-center text-muted mb-3 jetbrains-mono-light">
                  <span className="me-2">📅</span> Janvier 2025 – Avril 2025
                </div>
                <ul className="list-unstyled jetbrains-mono-regular">
                  <li className="mb-2">
                    • Conception et développement d'un site e-commerce complet (front-end et back-end)
                  </li>
                  <li className="mb-2">
                    • Technologies utilisées : HTML, CSS, Bootstrap, ReactJS pour le front-end ; PHP (architecture MVC)
                    et MySQL pour le back-end
                  </li>
                  <li className="mb-2">
                    • Intégration d'un panier dynamique, système d'authentification et gestion de base de données MySQL
                  </li>
                  <li className="mb-2">• Tests d'API réalisés avec Postman</li>
                  <li className="mb-2">• Gestion du code source et collaboration en équipe avec Git et GitHub</li>
                  <li>• Application de la méthodologie Agile via Trello et participation aux revues de sprint</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
