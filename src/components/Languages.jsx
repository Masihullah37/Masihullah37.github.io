function Languages() {
  const languages = [
    {
      name: "Anglais",
      level: "C1 - Courant",
      description: "Oral, écrit, compréhension",
      badgeClass: "bg-success",
    },
    {
      name: "Français",
      level: "B1 - Intermédiaire",
      description: "En progression continue",
      badgeClass: "bg-info",
    },
    {
      name: "Dari / Pashto",
      level: "C1 - Langue maternelle",
      description: "",
      badgeClass: "bg-primary",
    },
    {
      name: "Hindi / Urdu / Persan",
      level: "C1 - Courant",
      description: "",
      badgeClass: "bg-primary",
    },
  ]

  return (
    <section id="languages" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center gradient-text fw-bold mb-5 jetbrains-mono-bold">Langues</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="row g-4">
              {languages.map((language, index) => (
                <div className="col-md-6" key={index}>
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body p-4">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <h3 className="card-title h5 jetbrains-mono-medium">{language.name}</h3>
                        <span className={`badge ${language.badgeClass} jetbrains-mono-regular`}>{language.level}</span>
                      </div>
                      {language.description && (
                        <p className="text-muted small mb-0 jetbrains-mono-light">{language.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Languages
