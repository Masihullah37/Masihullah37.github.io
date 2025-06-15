function Skills() {
  const skillCategories = [
    {
      title: "Langages & Frameworks",
      icon: "💻",
      skills: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "React.js", "PHP", "Symfony"],
      colorClass: "badge-purple",
    },
    {
      title: "Base de données",
      icon: "🗄️",
      skills: ["MySQL", "Modélisation", "Requêtage SQL"],
      colorClass: "badge-blue",
    },
    {
      title: "Outils & Méthodologies",
      icon: "🛠️",
      skills: ["Git", "GitHub", "Trello", "Méthode Agile", "Scrum", "Gestion de versions", "Responsive design"],
      colorClass: "badge-green",
    },
    {
      title: "Environnements",
      icon: "🌐",
      skills: ["Visual Studio Code", "Postman", "Figma", "Laragon"],
      colorClass: "badge-orange",
    },
  ]

  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center gradient-text fw-bold mb-5 jetbrains-mono-bold">Compétences Techniques</h2>
        <div className="row g-4">
          {skillCategories.map((category, index) => (
            <div className="col-md-6" key={index}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h3 className="card-title mb-4 jetbrains-mono-medium">
                    <span className="me-2">{category.icon}</span> {category.title}
                  </h3>
                  <div className="d-flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className={`badge ${category.colorClass} mb-2 jetbrains-mono-regular`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
