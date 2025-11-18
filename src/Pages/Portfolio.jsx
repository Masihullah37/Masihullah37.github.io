
// import React, { useState, useEffect, useRef } from "react";
// import RocketTimeline from "../components/portfolio/RocketTimeline";
// import HeroSection from "../components/portfolio/HeroSection";
// import EducationSection from "../components/portfolio/EducationSection";
// import ExperienceSection from "../components/portfolio/ExperienceSection";
// import SkillsSection from "../components/portfolio/SkillsSection";
// import ProjectsSection from "../components/portfolio/ProjectsSection";
// import LanguagesSection from "../components/portfolio/LanguagesSection";
// import ContactFooter from "../components/portfolio/ContactFooter";
// import ThemeToggle from "../components/portfolio/ThemeToggle";

// export default function Portfolio() {
//   const [currentSection, setCurrentSection] = useState("hero");
//   const [isScrolling, setIsScrolling] = useState(false);
//   const [scrollDirection, setScrollDirection] = useState("down");
//   const [visibleSections, setVisibleSections] = useState({
//     hero: true,
//     education: false,
//     experience: false,
//     skills: false,
//     projects: false,
//     languages: false,
//     contact: false,
//   });

//   const [isDarkMode, setIsDarkMode] = useState(() => {
//     try {
//       const saved = localStorage.getItem("isDarkMode");
//       if (saved !== null) {
//         return JSON.parse(saved);
//       }
//       return window.matchMedia('(prefers-color-scheme: dark)').matches;
//     } catch {
//       return false;
//     }
//   });

//   const scrollTimeoutRef = useRef(null);
//   const lastScrollY = useRef(0);
//   const sectionsRef = useRef({});

//   // Theme toggle function with debug logging
//   const toggleTheme = () => {
//     console.log("Toggle clicked! Current mode:", isDarkMode);
//     const newDarkMode = !isDarkMode;
//     setIsDarkMode(newDarkMode);
//     console.log("New mode will be:", newDarkMode);
    
//     // Apply to DOM immediately
//     if (newDarkMode) {
//       document.documentElement.classList.add('dark');
//       console.log("Added 'dark' class to html element");
//     } else {
//       document.documentElement.classList.remove('dark');
//       console.log("Removed 'dark' class from html element");
//     }
    
//     // Verify it was applied
//     console.log("HTML element classes:", document.documentElement.className);
    
//     // Save to localStorage
//     try {
//       localStorage.setItem("isDarkMode", JSON.stringify(newDarkMode));
//       console.log("Saved to localStorage:", newDarkMode);
//     } catch (error) {
//       console.warn("Could not save theme preference:", error);
//     }
//   };

//   // Initialize theme on component mount
//   useEffect(() => {
//     console.log("Initializing theme. isDarkMode:", isDarkMode);
    
//     // Apply initial theme
//     if (isDarkMode) {
//       document.documentElement.classList.add('dark');
//       console.log("Added 'dark' class on mount");
//     } else {
//       document.documentElement.classList.remove('dark');
//       console.log("Removed 'dark' class on mount");
//     }
    
//     console.log("Initial HTML classes:", document.documentElement.className);
    
//     // Listen for system theme changes
//     const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
//     const handleSystemThemeChange = (e) => {
//       const saved = localStorage.getItem("isDarkMode");
//       if (saved === null) {
//         setIsDarkMode(e.matches);
//         if (e.matches) {
//           document.documentElement.classList.add('dark');
//         } else {
//           document.documentElement.classList.remove('dark');
//         }
//       }
//     };
    
//     mediaQuery.addEventListener('change', handleSystemThemeChange);
//     return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
//   }, [isDarkMode]);

//   const scrollHandler = () => {
//     const currentScrollY = window.scrollY;
//     setScrollDirection(currentScrollY > lastScrollY.current ? "down" : "up");
//     lastScrollY.current = currentScrollY;

//     setIsScrolling(true);
//     if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
//     scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 150);

//     const scrollPosition = window.scrollY + window.innerHeight / 2;
//     Object.entries(sectionsRef.current).forEach(([key, el]) => {
//       if (!el) return;
//       const { offsetTop, offsetHeight } = el;
//       if (
//         scrollPosition >= offsetTop &&
//         scrollPosition < offsetTop + offsetHeight
//       )
//         setCurrentSection(key);
//     });
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", scrollHandler, { passive: true });
//     return () => {
//       window.removeEventListener("scroll", scrollHandler);
//       if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
//     };
//   }, []);

//   useEffect(() => {
//     const keys = [
//       "hero",
//       "education",
//       "experience",
//       "skills",
//       "projects",
//       "languages",
//       "contact",
//     ];
//     keys.forEach((k) => (sectionsRef.current[k] = document.getElementById(k)));
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           setVisibleSections((prev) => ({
//             ...prev,
//             [entry.target.id]: entry.isIntersecting,
//           }));
//         });
//       },
//       { 
//         threshold: 0.05,
//         rootMargin: "0px 0px 0px 0px"
//       }
//     );

//     Object.keys(sectionsRef.current).forEach((k) => {
//       const el = document.getElementById(k);
//       if (el) observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-200">
//       {/* Debug info - Remove after fixing */}
//       <div className="fixed bottom-4 left-4 z-50 bg-black/80 text-white p-4 rounded-lg text-sm font-mono">
//         <div>Mode: {isDarkMode ? 'DARK' : 'LIGHT'}</div>
//         <div>HTML has dark: {document.documentElement.classList.contains('dark') ? 'YES' : 'NO'}</div>
//       </div>

//       {/* Animated background blobs */}
//       <div className="fixed inset-0 opacity-20 dark:opacity-10 pointer-events-none">
//         <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-300 dark:from-blue-600 dark:to-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
//         <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-300 dark:from-purple-600 dark:to-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
//         <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400 to-blue-300 dark:from-indigo-600 dark:to-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
//       </div>

//       <div className="fixed inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />

//       <ThemeToggle isDark={isDarkMode} toggleTheme={toggleTheme} />

//       <RocketTimeline
//         currentSection={currentSection}
//         isScrolling={isScrolling}
//         scrollDirection={scrollDirection}
//       />

//       <div id="hero">
//         <HeroSection isVisible={visibleSections.hero} />
//       </div>

//       <div id="education">
//         <EducationSection isVisible={visibleSections.education} />
//       </div>

//       <div id="experience">
//         <ExperienceSection isVisible={visibleSections.experience} />
//       </div>

//       <div id="skills">
//         <SkillsSection isVisible={visibleSections.skills} />
//       </div>

//       <div id="projects">
//         <ProjectsSection isVisible={visibleSections.projects} />
//       </div>

//       <div id="languages">
//         <LanguagesSection isVisible={visibleSections.languages} />
//       </div>

//       <div id="contact">
//         <ContactFooter isVisible={visibleSections.contact} />
//       </div>

//       <style>{`
//         @keyframes blob { 0%,100%{ transform: translate(0,0) scale(1);} 25%{ transform: translate(20px,-50px) scale(1.1);} 50%{ transform: translate(-20px,20px) scale(0.9);} 75%{ transform: translate(50px,50px) scale(1.05);} }
//         .animate-blob{ animation: blob 7s infinite; }
//         .animation-delay-2000{ animation-delay: 2s; }
//         .animation-delay-4000{ animation-delay: 4s; }
//       `}</style>
//     </div>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import RocketTimeline from "../components/portfolio/RocketTimeline";
import HeroSection from "../components/portfolio/HeroSection";
import EducationSection from "../components/portfolio/EducationSection";
import ExperienceSection from "../components/portfolio/ExperienceSection";
import SkillsSection from "../components/portfolio/SkillsSection";
import ProjectsSection from "../components/portfolio/ProjectsSection";
import LanguagesSection from "../components/portfolio/LanguagesSection";
import ContactFooter from "../components/portfolio/ContactFooter";
import ThemeToggle from "../components/portfolio/ThemeToggle";

export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState("hero");
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [visibleSections, setVisibleSections] = useState({
    hero: true,
    education: false,
    experience: false,
    skills: false,
    projects: false,
    languages: false,
    contact: false,
  });

  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem("isDarkMode");
      if (saved !== null) {
        return JSON.parse(saved);
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  const scrollTimeoutRef = useRef(null);
  const lastScrollY = useRef(0);
  const sectionsRef = useRef({});

  // Theme toggle function with debug logging
  const toggleTheme = () => {
    console.log("Toggle clicked! Current mode:", isDarkMode);
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    console.log("New mode will be:", newDarkMode);
    
    // Apply to DOM immediately
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      console.log("Added 'dark' class to html element");
    } else {
      document.documentElement.classList.remove('dark');
      console.log("Removed 'dark' class from html element");
    }
    
    // Verify it was applied
    console.log("HTML element classes:", document.documentElement.className);
    
    // Save to localStorage
    try {
      localStorage.setItem("isDarkMode", JSON.stringify(newDarkMode));
      console.log("Saved to localStorage:", newDarkMode);
    } catch (error) {
      console.warn("Could not save theme preference:", error);
    }
  };

  // Initialize theme on component mount
  useEffect(() => {
    console.log("Initializing theme. isDarkMode:", isDarkMode);
    
    // Apply initial theme
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      console.log("Added 'dark' class on mount");
    } else {
      document.documentElement.classList.remove('dark');
      console.log("Removed 'dark' class on mount");
    }
    
    console.log("Initial HTML classes:", document.documentElement.className);
    
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e) => {
      const saved = localStorage.getItem("isDarkMode");
      if (saved === null) {
        setIsDarkMode(e.matches);
        if (e.matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };
    
    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, [isDarkMode]);

  const scrollHandler = () => {
    const currentScrollY = window.scrollY;
    setScrollDirection(currentScrollY > lastScrollY.current ? "down" : "up");
    lastScrollY.current = currentScrollY;

    setIsScrolling(true);
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 150);

    const scrollPosition = window.scrollY + window.innerHeight / 2;
    Object.entries(sectionsRef.current).forEach(([key, el]) => {
      if (!el) return;
      const { offsetTop, offsetHeight } = el;
      if (
        scrollPosition >= offsetTop &&
        scrollPosition < offsetTop + offsetHeight
      )
        setCurrentSection(key);
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, { passive: true });
    return () => {
      window.removeEventListener("scroll", scrollHandler);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const keys = [
      "hero",
      "education",
      "experience",
      "skills",
      "projects",
      "languages",
      "contact",
    ];
    keys.forEach((k) => (sectionsRef.current[k] = document.getElementById(k)));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { 
        threshold: 0.05,
        rootMargin: "0px 0px 0px 0px"
      }
    );

    Object.keys(sectionsRef.current).forEach((k) => {
      const el = document.getElementById(k);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-200">
      {/* Animated background blobs */}
      <div className="fixed inset-0 opacity-20 dark:opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-300 dark:from-blue-600 dark:to-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-300 dark:from-purple-600 dark:to-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400 to-blue-300 dark:from-indigo-600 dark:to-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="fixed inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <ThemeToggle isDark={isDarkMode} toggleTheme={toggleTheme} />

      <RocketTimeline
        currentSection={currentSection}
        isScrolling={isScrolling}
        scrollDirection={scrollDirection}
      />

      <div id="hero">
        <HeroSection isVisible={visibleSections.hero} />
      </div>

      <div id="education">
        <EducationSection isVisible={visibleSections.education} />
      </div>

      <div id="experience">
        <ExperienceSection isVisible={visibleSections.experience} />
      </div>

      <div id="skills">
        <SkillsSection isVisible={visibleSections.skills} />
      </div>

      <div id="projects">
        <ProjectsSection isVisible={visibleSections.projects} />
      </div>

      <div id="languages">
        <LanguagesSection isVisible={visibleSections.languages} />
      </div>

      <div id="contact">
        <ContactFooter isVisible={visibleSections.contact} />
      </div>

      <style>{`
        @keyframes blob { 0%,100%{ transform: translate(0,0) scale(1);} 25%{ transform: translate(20px,-50px) scale(1.1);} 50%{ transform: translate(-20px,20px) scale(0.9);} 75%{ transform: translate(50px,50px) scale(1.05);} }
        .animate-blob{ animation: blob 7s infinite; }
        .animation-delay-2000{ animation-delay: 2s; }
        .animation-delay-4000{ animation-delay: 4s; }
      `}</style>
    </div>
  );
}