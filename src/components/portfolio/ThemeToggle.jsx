// import React from 'react';
// import { Sun, Moon } from 'lucide-react';
// import { motion as Motion } from 'framer-motion';

// export default function ThemeToggle({ isDark, toggleTheme }) {
//   return (
//     <Motion.button
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       onClick={toggleTheme}
//       className="fixed top-8 right-8 z-50 w-14 h-14 rounded-full bg-white dark:bg-slate-800 shadow-xl border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
//       aria-label="Toggle theme"
//     >
//       <Motion.div
//         initial={false}
//         animate={{ rotate: isDark ? 180 : 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         {isDark ? (
//           <Moon className="w-6 h-6 text-indigo-500 group-hover:text-indigo-600" />
//         ) : (
//           <Sun className="w-6 h-6 text-amber-500 group-hover:text-amber-600" />
//         )}
//       </Motion.div>
//     </Motion.button>
//   );
// }
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle({ isDark, toggleTheme }) {
  const MotionButton = motion.button;
  const MotionDiv = motion.div;

  return (
    <MotionButton
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={toggleTheme}
      className="fixed top-8 right-8 z-50 w-14 h-14 rounded-full bg-white dark:bg-slate-800 shadow-xl border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center hover:scale-110 transition-transform duration-200 group"
      aria-label="Toggle theme"
    >
      <MotionDiv
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Moon className="w-6 h-6 text-indigo-500 group-hover:text-indigo-600" />
        ) : (
          <Sun className="w-6 h-6 text-amber-500 group-hover:text-amber-600" />
        )}
      </MotionDiv>
    </MotionButton>
  );
}