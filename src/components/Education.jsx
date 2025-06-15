function Education() {
  return (
    <section id="education" className="py-5">
      <div className="container">
        <h2 className="text-center gradient-text fw-bold mb-5 jetbrains-mono-bold">Formation</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <div className="d-flex flex-column flex-md-row justify-content-between mb-2">
                  <h3 className="card-title jetbrains-mono-medium">
                    Titre professionnel – Développeur Web et Web Mobile (Bac+2)
                  </h3>
                  <span className="text-muted jetbrains-mono-regular">AFPA</span>
                </div>
                <div className="d-flex align-items-center text-muted mb-3 jetbrains-mono-light">
                  <span className="me-2">📅</span> Mai 2024 – Avril 2025
                </div>
                <ul className="list-unstyled jetbrains-mono-regular">
                  <li className="mb-2">• Maîtrise du développement front-end et back-end</li>
                  <li className="mb-2">
                    • Mise en pratique des architectures MVC et des bonnes pratiques de développement
                  </li>
                  <li className="mb-2">• Développement de projets web dynamiques et responsive</li>
                  <li>• Stage de 10 semaines sur un projet e-commerce réel</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
