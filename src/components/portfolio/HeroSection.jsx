// import React from 'react';
// import { Mail, Phone, MapPin, Github } from 'lucide-react';
// import { motion as Motion } from 'framer-motion';

// export default function HeroSection({ isVisible }) {
//   return (
//     <Motion.section
//       initial={{ opacity: 0, y: 5 }}
//       animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//       transition={{ duration: 0.005, ease: 'easeOut' }}
//       className="min-h-screen flex items-center justify-center px-6 py-20"
//     >
//       <div className="max-w-5xl w-full">
//         <Motion.div
//           initial={{ scale: 0.9 }}
//           animate={isVisible ? { scale: 1 } : { scale: 0.9 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="text-center"
//         >
//           {/* Name & Title */}
//           <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 dark:from-slate-100 dark:via-slate-200 dark:to-slate-300 bg-clip-text text-transparent">
//             Masihullah
//           </h1>
//           <h2 className="text-2xl md:text-4xl text-slate-600 dark:text-slate-300 font-medium mb-3 tracking-tight">
//             Développeur Web & Web Mobile
//           </h2>
//           <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8">
//             Spécialisé en React, Laravel & PHP • Passionate about creating elegant web solutions
//           </p>
          
//           {/* Decorative Line */}
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 mx-auto mb-12 rounded-full shadow-lg" />
          
//           {/* Contact Info Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
//             <Motion.a
//               href="mailto:digitalmail372@gmail.com"
//               whileHover={{ scale: 1.05, y: -5 }}
//               className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50"
//             >
//               <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-3 w-fit mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg">
//                 <Mail className="w-6 h-6 text-white" />
//               </div>
//               <p className="text-sm text-slate-700 dark:text-slate-200 font-semibold">Email</p>
//               <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 break-all">digitalmail372@gmail.com</p>
//             </Motion.a>

//             <Motion.a
//               href="tel:0602145879"
//               whileHover={{ scale: 1.05, y: -5 }}
//               className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50"
//             >
//               <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-3 w-fit mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg">
//                 <Phone className="w-6 h-6 text-white" />
//               </div>
//               <p className="text-sm text-slate-700 dark:text-slate-200 font-semibold">Téléphone</p>
//               <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">0602145879</p>
//             </Motion.a>

//             <Motion.div
//               whileHover={{ scale: 1.05, y: -5 }}
//               className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50"
//             >
//               <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-3 w-fit mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg">
//                 <MapPin className="w-6 h-6 text-white" />
//               </div>
//               <p className="text-sm text-slate-700 dark:text-slate-200 font-semibold">Localisation</p>
//               <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Tours, France</p>
//             </Motion.div>

//             <Motion.a
//               href="https://github.com/Masihullah37"
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.05, y: -5 }}
//               className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50"
//             >
//               <div className="bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-600 dark:to-slate-800 rounded-xl p-3 w-fit mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg">
//                 <Github className="w-6 h-6 text-white" />
//               </div>
//               <p className="text-sm text-slate-700 dark:text-slate-200 font-semibold">GitHub</p>
//               <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">@Masihullah37</p>
//             </Motion.a>
//           </div>

//           {/* Scroll Indicator */}
//           <Motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="mt-16"
//           >
//             <div className="w-6 h-10 border-2 border-indigo-400 dark:border-indigo-500 rounded-full mx-auto flex items-start justify-center p-2">
//               <div className="w-1.5 h-3 bg-indigo-400 dark:bg-indigo-500 rounded-full animate-bounce" />
//             </div>
//           </Motion.div>
//         </Motion.div>
//       </div>
//     </Motion.section>
//   );
// }

import React from 'react';
import { Mail, Phone, MapPin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection({ isVisible }) {
  const MotionSection = motion.section;
  const MotionDiv = motion.div;
  const MotionA = motion.a;

  return (
    <MotionSection
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-5xl w-full">
        <MotionDiv
          initial={{ scale: 0.95 }}
          animate={isVisible ? { scale: 1 } : { scale: 0.95 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-center"
        >
          {/* Name & Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 dark:from-slate-100 dark:via-slate-200 dark:to-slate-300 bg-clip-text text-transparent">
            Masihullah
          </h1>
          <h2 className="text-2xl md:text-4xl text-slate-600 dark:text-slate-300 font-medium mb-3 tracking-tight">
            Développeur Web & Web Mobile
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            Spécialisé en React, Laravel & PHP • Passionate about creating elegant web solutions
          </p>
          
          {/* Decorative Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 mx-auto mb-12 rounded-full shadow-lg" />
          
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            <MotionA
              href="mailto:digitalmail372@gmail.com"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
              className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 border border-slate-200/50 dark:border-slate-700/50"
            >
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-3 w-fit mx-auto mb-3 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-200 font-semibold">Email</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 break-all">digitalmail372@gmail.com</p>
            </MotionA>

            <MotionA
              href="tel:0602145879"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
              className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 border border-slate-200/50 dark:border-slate-700/50"
            >
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-3 w-fit mx-auto mb-3 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-200 font-semibold">Téléphone</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">0602145879</p>
            </MotionA>

            <MotionDiv
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
              className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 border border-slate-200/50 dark:border-slate-700/50"
            >
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-3 w-fit mx-auto mb-3 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-200 font-semibold">Localisation</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Tours, France</p>
            </MotionDiv>

            <MotionA
              href="https://github.com/Masihullah37"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
              className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 border border-slate-200/50 dark:border-slate-700/50"
            >
              <div className="bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-600 dark:to-slate-800 rounded-xl p-3 w-fit mx-auto mb-3 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                <Github className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-200 font-semibold">GitHub</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">@Masihullah37</p>
            </MotionA>
          </div>

          {/* Scroll Indicator */}
          <MotionDiv
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-16"
          >
            <div className="w-6 h-10 border-2 border-indigo-400 dark:border-indigo-500 rounded-full mx-auto flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-indigo-400 dark:bg-indigo-500 rounded-full animate-bounce" />
            </div>
          </MotionDiv>
        </MotionDiv>
      </div>
    </MotionSection>
  );
}
