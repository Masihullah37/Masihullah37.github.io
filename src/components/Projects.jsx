


function Projects() {
  const projects = [
    {
      title: "Site e-commerce complet",
      technologies: ["React", "PHP", "MySQL", "Bootstrap"],
      description: [
        "Interface utilisateur fluide (ReactJS, Bootstrap)",
        "Architecture Back-End en PHP MVC",
        "Gestion de Données avec MySQL",
        "Gestion des utilisateurs, commandes, produits",
        "Sécurité, validation des formulaires, design responsive",
        "Déploiement local avec Laragon, gestion de projet avec Trello",
      ],
      github: "https://github.com/Masihullah37/Projects/tree/main",
      colorClass: "badge-purple",
    },
    {
      title: "Application To-do list",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
      description: ["Développement d'une application de gestion de tâches avec HTML, CSS, Bootstrap, JS, PHP et MySQL"],
      github: "https://github.com/masihullah/todo-app",
      colorClass: "badge-blue",
    },
    {
      title: "Bibliothèque style BD",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      description: ["Création d'un site interactif utilisant HTML, CSS, Bootstrap et JavaScript"],
      github: "https://github.com/masihullah/bd-library",
      colorClass: "badge-green",
    },
    {
      title: "Projet Spotify",
      technologies: ["HTML", "Bootstrap", "JavaScript", "PHP", "MySQL"],
      description: [
        "Réalisation d'une application musicale avec HTML, Bootstrap, JS, et PHP (architecture MVC) et MySQL",
      ],
      github: "https://github.com/masihullah/spotify-clone",
      colorClass: "badge-orange",
    },
  ]

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center gradient-text fw-bold mb-5 jetbrains-mono-bold">Projets Réalisés</h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-md-6" key={index}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="card-title mb-3 jetbrains-mono-medium">{project.title}</h3>
                  <div className="mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={`badge ${project.colorClass} me-2 mb-2 jetbrains-mono-regular`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="list-unstyled mb-4 jetbrains-mono-light">
                    {project.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="mb-1 small">
                        • {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center text-primary jetbrains-mono-regular"
                  >
                    <i className="bi bi-github me-2"></i> Voir sur GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
