import React from 'react';
import { Mail, Phone, MapPin, Github } from 'lucide-react';
import { motion as Motion } from 'framer-motion';

export default function CircularContact({ isVisible }) {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "digitalmail372@gmail.com",
      href: "mailto:digitalmail372@gmail.com",
      color: "from-blue-500 to-indigo-600",
      rotation: 0
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "0602145879",
      href: "tel:0602145879",
      color: "from-purple-500 to-pink-600",
      rotation: 90
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Tours, France",
      href: null,
      color: "from-emerald-500 to-teal-600",
      rotation: 180
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@Masihullah37",
      href: "https://github.com/Masihullah37",
      color: "from-slate-700 to-slate-900",
      rotation: 270
    }
  ];

  return (
    <Motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center py-20 px-6"
    >
      <div className="relative w-full max-w-2xl aspect-square">
        {/* Center Circle - Title */}
        <Motion.div
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 dark:from-blue-600 dark:via-indigo-600 dark:to-purple-700 shadow-2xl flex items-center justify-center z-10"
        >
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold mb-1">Contact</h3>
            <p className="text-sm opacity-90">Restons en contact</p>
          </div>
        </Motion.div>

        {/* Contact Segments */}
        {contacts.map((contact, index) => {
          const Icon = contact.icon;
          const angle = (360 / contacts.length) * index;
          const nextAngle = (360 / contacts.length) * (index + 1);
          
          // Calculate position for the segment
          const radius = 200;
          const midAngle = (angle + nextAngle) / 2;
          const radian = (midAngle - 90) * (Math.PI / 180);
          const x = Math.cos(radian) * (radius * 0.7);
          const y = Math.sin(radian) * (radius * 0.7);

          return (
            <Motion.div
              key={contact.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="absolute top-1/2 left-1/2"
              style={{
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              }}
            >
              <Motion.a
                href={contact.href || undefined}
                target={contact.href?.startsWith('http') ? '_blank' : undefined}
                rel={contact.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`block w-32 h-32 rounded-full bg-gradient-to-br ${contact.color} shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center text-white cursor-pointer group ${!contact.href ? 'pointer-events-auto' : ''}`}
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 mb-2 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8" />
                </div>
                <p className="text-xs font-bold text-center px-2">{contact.label}</p>
                <p className="text-[10px] opacity-90 text-center px-2 mt-1 truncate max-w-full">
                  {contact.value}
                </p>
              </Motion.a>
            </Motion.div>
          );
        })}

        {/* Decorative Rings */}
        <Motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-2 border-dashed border-slate-300 dark:border-slate-600 opacity-30"
        />
        <Motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-slate-200 dark:border-slate-700 opacity-20"
        />
      </div>
    </Motion.div>
  );
}