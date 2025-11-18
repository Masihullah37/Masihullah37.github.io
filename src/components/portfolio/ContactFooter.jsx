import React from 'react';
import { Heart, Github } from 'lucide-react';
import { motion as Motion } from 'framer-motion';

export default function ContactFooter({ isVisible }) {
  return (
    <Motion.footer
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.005 }}
      className="py-12 px-6 border-t border-slate-200/50 dark:border-slate-700/50"
    >
      <div className="max-w-6xl mx-auto">
        <Motion.div
          initial={{ y: 20 }}
          animate={isVisible ? { y: 0 } : { y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          {/* Footer Content */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
            <p className="text-slate-600 dark:text-slate-300 flex items-center gap-2">
              <span>Créé avec</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <span>par</span>
              <span className="font-semibold text-slate-800 dark:text-slate-100">Masihullah</span>
            </p>
            <span className="hidden md:block text-slate-400 dark:text-slate-500">•</span>
            <a 
              href="https://github.com/Masihullah37"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
            >
              <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>@Masihullah37</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
            <span>© 2025 Masihullah</span>
            <span className="hidden md:block">•</span>
            <span>Développeur Web & Web Mobile</span>
            <span className="hidden md:block">•</span>
            <span>Tours, France</span>
          </div>

          {/* Decorative Line */}
          <div className="mt-6 w-32 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 dark:via-indigo-500 to-transparent mx-auto opacity-50" />
        </Motion.div>
      </div>
    </Motion.footer>
  );
}