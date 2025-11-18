import React from 'react';
import { Code2, Database, Wrench, Monitor } from 'lucide-react';
import { motion as Motion } from 'framer-motion';

export default function SkillsSection({ isVisible }) {
  const skillCategories = [
    {
      title: "Langages & Frameworks",
      icon: Code2,
      color: "from-blue-500 to-indigo-600",
      skills: ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "JavaScript", "React.js", "Node.js", "PHP", "Symfony", "Laravel"]
    },
    {
      title: "Base de données",
      icon: Database,
      color: "from-emerald-500 to-teal-600",
      skills: ["MySQL", "Modélisation", "Requêtage SQL"]
    },
    {
      title: "DevOps & Outils",
      icon: Wrench,
      color: "from-purple-500 to-pink-600",
      skills: ["Git", "GitHub", "GitLab", "GitHub Actions CI/CD", "GitLab CI/CD", "Docker", "Trello", "Méthode Agile", "Scrum", "Responsive design"]
    },
    {
      title: "Environnements",
      icon: Monitor,
      color: "from-orange-500 to-amber-600",
      skills: ["Visual Studio Code", "Postman", "Figma", "Laragon"]
    }
  ];

  return (
    <Motion.section
      initial={{ opacity: 0, y: 0 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.005 }}
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl w-full">
        <Motion.div
          initial={{ scale: 0.9 }}
          animate={isVisible ? { scale: 1 } : { scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Compétences
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 mx-auto rounded-full shadow-lg" />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <Motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
                  className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-500 group"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`bg-gradient-to-br ${category.color} rounded-xl p-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className="px-4 py-2 bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-600 hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </Motion.span>
                    ))}
                  </div>
                </Motion.div>
              );
            })}
          </div>
        </Motion.div>
      </div>
    </Motion.section>
  );
}