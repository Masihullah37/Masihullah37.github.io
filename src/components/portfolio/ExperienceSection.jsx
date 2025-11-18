import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { motion as Motion } from 'framer-motion';

export default function ExperienceSection({ isVisible }) {
  const achievements = [
    "Conception et développement d'un site e-commerce complet (front-end et back-end)",
    "Technologies utilisées: HTML, CSS, Bootstrap, ReactJS, PHP (architecture MVC), MySQL",
    "Intégration d'un panier dynamique, système d'authentification et gestion de base de données",
    "Tests d'API réalisés avec Postman",
    "Gestion du code source avec Git et GitHub",
    "Application de la méthodologie Agile via Trello"
  ];

  return (
    <Motion.section
      initial={{ opacity: 0, y: 5 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.005 }}
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-5xl w-full">
        <Motion.div
          initial={{ scale: 0.9 }}
          animate={isVisible ? { scale: 1 } : { scale: 0.9 }}
          transition={{ duration: 0.05, delay: 0.2 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Expérience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 mx-auto rounded-full shadow-lg" />
          </div>

          {/* Experience Card */}
          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-start gap-6 mb-8">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-4 shadow-lg">
                <Briefcase className="w-10 h-10 text-white" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                  Stage en développement Web
                </h3>
                <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold mb-3">
                  Projet e-commerce
                </p>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">Janvier 2025 – Avril 2025</span>
                </div>
              </div>
            </div>

            {/* Responsibilities & Achievements */}
            <div className="border-t border-slate-200 dark:border-slate-700 pt-8">
              <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full" />
                Responsabilités & Réalisations
              </h4>
              <div className="grid grid-cols-1 gap-4">
                {achievements.map((achievement, index) => (
                  <Motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <CheckCircle2 className="w-6 h-6 text-purple-500 dark:text-purple-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{achievement}</p>
                  </Motion.div>
                ))}
              </div>
            </div>
          </div>
        </Motion.div>
      </div>
    </Motion.section>
  );
}