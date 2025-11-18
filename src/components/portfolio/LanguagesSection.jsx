import React from 'react';
import { Languages, CheckCircle2 } from 'lucide-react';
import { motion as Motion } from 'framer-motion';

export default function LanguagesSection({ isVisible }) {
  const languages = [
    { name: "Pashto", level: "Maternelle", proficiency: 100, color: "from-emerald-400 to-green-500" },
    { name: "Dari", level: "Courant", proficiency: 95, color: "from-sky-400 to-blue-500" },
    { name: "Persian", level: "Courant", proficiency: 95, color: "from-blue-500 to-indigo-500" },
    { name: "Hindi", level: "Courant", proficiency: 90, color: "from-orange-400 to-amber-500" },
    { name: "Urdu", level: "Courant", proficiency: 90, color: "from-indigo-500 to-purple-500" },
    { name: "English", level: "Fluent", proficiency: 90, color: "from-purple-500 to-pink-500" },
    { name: "French", level: "B1", proficiency: 65, color: "from-pink-500 to-rose-500" }
  ];

  return (
    <Motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.005 }}
      className="py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <Motion.div
          initial={{ scale: 0.9 }}
          animate={isVisible ? { scale: 1 } : { scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Langues
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 mx-auto mb-6 rounded-full shadow-lg" />
            <p className="text-slate-600 dark:text-slate-300 text-lg">
              Maîtrise multilingue pour une communication internationale
            </p>
          </div>

          {/* Languages Grid */}
          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200/50 dark:border-slate-700/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {languages.map((language, index) => (
                <Motion.div
                  key={language.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="space-y-3"
                >
                  {/* Language Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`bg-gradient-to-br ${language.color} rounded-lg p-2`}>
                        <Languages className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">{language.name}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{language.level}</p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">{language.proficiency}%</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="h-3 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                    <Motion.div
                      initial={{ width: 0 }}
                      animate={isVisible ? { width: `${language.proficiency}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                      className={`h-full bg-gradient-to-r ${language.color} rounded-full relative`}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </Motion.div>
                  </div>
                </Motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
              <div className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed">
                  Capacité à communiquer efficacement dans plusieurs langues, facilitant les échanges multiculturels et l'intégration dans des équipes internationales
                </p>
              </div>
            </div>
          </div>
        </Motion.div>
      </div>
    </Motion.section>
  );
}
