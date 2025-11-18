import React, { useState, useEffect } from "react";
import { Rocket } from "lucide-react";

export default function RocketTimeline({
  currentSection,
  isScrolling,
  scrollDirection,
}) {
  const [showSmoke, setShowSmoke] = useState(false);

  useEffect(() => {
    if (isScrolling) {
      // schedule the state update asynchronously
      const frame = requestAnimationFrame(() => setShowSmoke(true));

      const timer = setTimeout(() => setShowSmoke(false), 300);

      return () => {
        cancelAnimationFrame(frame);
        clearTimeout(timer);
      };
    }
  }, [isScrolling]);

  const sections = [
    "hero",
    "education",
    "experience",
    "skills",
    "projects",
    "contact",
  ];
  const currentIndex = sections.indexOf(currentSection);
  const progress = (currentIndex / (sections.length - 1)) * 100;

  // Show timeline only for certain sections
  const showTimeline =
    currentSection === "hero" || currentSection === "between";

  return (
  <div className="fixed left-3 lg:left-8 top-1/2 -translate-y-1/2 z-50 block lg:block">
      {/* Vertical Timeline Line */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 transition-opacity duration-700 ${
          showTimeline ? "opacity-100" : "opacity-0"
        }`}
        style={{ height: "400px", top: "-200px" }}
      />

      {/* Progress Indicator */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-600 transition-all duration-700 rounded-full shadow-lg"
        style={{
          height: `${(progress / 100) * 400}px`,
          top: "-200px",
          opacity: showTimeline ? 1 : 0,
        }}
      />

      {/* Rocket */}
      <div
        className="relative transition-all duration-700 ease-out"
        style={{
          transform: `translateY(${(progress / 100) * 400 - 200}px) rotate(${
            scrollDirection === "down" ? "-45deg" : "135deg"
          })`,
        }}
      >
        <div
          className={`relative ${
            isScrolling ? "scale-110" : "scale-100"
          } transition-transform duration-300`}
        >
          <div className="relative">
            <Rocket
              className="w-12 h-12 drop-shadow-2xl"
              style={{ color: "#ef4444" }}
              fill="currentColor"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent rounded-full" />
          </div>

          {/* Fire/Smoke Trail */}
          {showSmoke && (
            <>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-full opacity-80 animate-ping" />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-5 h-5 bg-gradient-to-br from-yellow-400 to-orange-300 rounded-full opacity-60 animate-ping delay-75" />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full opacity-40 animate-ping delay-150" />
            </>
          )}
        </div>

        <div className="absolute inset-0 blur-2xl bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500 opacity-50 rounded-full" />
      </div>

      {/* Section Dots */}
      {sections.map((section, index) => (
        <div
          key={section}
          className="absolute left-1/2 -translate-x-1/2 transition-all duration-700"
          style={{
            top: `${(index / (sections.length - 1)) * 400 - 200}px`,
            opacity: showTimeline ? 1 : 0,
          }}
        >
          <div
            className={`w-3 h-3 rounded-full border-2 transition-all duration-500 ${
              index <= currentIndex
                ? "bg-gradient-to-br from-blue-500 to-indigo-600 border-indigo-700 scale-110 shadow-lg shadow-indigo-500/50"
                : "bg-white border-slate-300"
            }`}
          />
        </div>
      ))}
    </div>
  );
}
