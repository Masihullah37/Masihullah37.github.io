import React from "react";
import { Github, ExternalLink, Code2 } from "lucide-react";
import { motion as Motion } from "framer-motion";

export default function ProjectsSection({ isVisible }) {
  // treat small viewports as always-visible so animations don't prevent rendering on mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const projects = [
    {
      title: "School Management Project",
      description:
        "Système complet de gestion scolaire avec interface moderne, backend robuste avec Laravel 11, déploiement automatisé via GitHub Actions",
      technologies: [
        "React",
        "Laravel 11",
        "GitHub Actions CI/CD",
        "Hostinger",
        "Tailwind CSS",
      ],
      links: [
        {
          label: "Frontend",
          url: "https://github.com/Masihullah37/school-management-frontend.git",
        },
        {
          label: "Backend",
          url: "https://github.com/Masihullah37/school-management-backend.git",
        },
      ],
      gradient: "from-blue-500 to-indigo-600",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    },
    {
      title: "Site e-commerce complet",
      description:
        "Interface utilisateur fluide, architecture Back-End en PHP MVC, gestion des utilisateurs, commandes, produits",
      technologies: ["React", "PHP", "MySQL", "Bootstrap"],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/Masihullah37/Projects/tree/main",
        },
      ],
      gradient: "from-emerald-500 to-teal-600",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    },
    {
      title: "Application To-do list",
      description:
        "Application de gestion de tâches complète avec interface intuitive",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
      links: [
        { label: "GitHub", url: "https://github.com/masihullah/todo-app" },
      ],
      gradient: "from-purple-500 to-pink-600",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    },
    {
      title: "Bibliothèque style BD",
      description: "Site interactif style bande dessinée avec design créatif",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      links: [
        { label: "GitHub", url: "https://github.com/masihullah/bd-library" },
      ],
      gradient: "from-orange-500 to-amber-600",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80",
    },
    {
      title: "Projet Spotify",
      description: "Application musicale avec architecture MVC complète",
      technologies: ["HTML", "Bootstrap", "JavaScript", "PHP", "MySQL"],
      links: [
        { label: "GitHub", url: "https://github.com/masihullah/spotify-clone" },
      ],
      gradient: "from-pink-500 to-rose-600",
      image:
        "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=800&q=80",
    },
    {
      title: "Google Chrome Extension",
      description: "Gestionnaire de favoris simple et puissant pour Chrome",
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/Masihullah37/Google-chrome-extension.git",
        },
      ],
      gradient: "from-cyan-500 to-blue-600",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
  ];

  return (
    <Motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={
        isVisible || isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
      }
      transition={{ duration: 0.005 }}
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-7xl w-full">
        <Motion.div
          initial={{ scale: 0.9 }}
          animate={isVisible ? { scale: 1 } : { scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Projets
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 mx-auto rounded-full shadow-lg" />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-500 group flex flex-col"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-full text-xs font-medium border border-slate-200 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2 pt-4 border-t border-slate-200 dark:border-slate-700 mt-auto">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-xl text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex-1 justify-center`}
                      >
                        <Github className="w-4 h-4" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        </Motion.div>
      </div>
    </Motion.section>
  );
}
