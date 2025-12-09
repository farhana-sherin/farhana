import React, { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { SiReact, SiDjango, SiTailwindcss, SiPython, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Evoque",
      description: "React & Vite web app.",
      tech: [
        { name: "React", icon: <SiReact className="text-cyan-400 text-xs" /> },
        { name: "JS", icon: <SiJavascript className="text-yellow-400 text-xs" /> },
      ],
      github: "https://github.com/farhana-sherin/evoque",
      live: "https://evoque-one.vercel.app",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    },
    {
      title: "Event Manager",
      description: "React & Tailwind frontend.",
      tech: [
        { name: "React", icon: <SiReact className="text-cyan-400 text-xs" /> },
        { name: "TW", icon: <SiTailwindcss className="text-teal-400 text-xs" /> },
      ],
      github: "https://github.com/farhana-sherin/event-management-frontend",
      live: "#",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
    },
    {
      title: "Foodz",
      description: "JS restaurant website.",
      tech: [
        { name: "JS", icon: <SiJavascript className="text-yellow-400 text-xs" /> },
        { name: "HTML", icon: <SiHtml5 className="text-orange-500 text-xs" /> },
      ],
      github: "https://github.com/farhana-sherin/Foodz",
      live: "#",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
    },
  ];

  // Auto-advance cards every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <div className="relative w-full max-w-3xl mx-auto h-64 overflow-hidden">
      {/* Card Container */}
      <div className="relative w-full h-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out ${
              index === currentIndex
                ? "opacity-100 translate-x-0 z-10"
                : index === (currentIndex - 1 + projects.length) % projects.length
                ? "opacity-0 -translate-x-full z-0"
                : index === (currentIndex + 1) % projects.length
                ? "opacity-0 translate-x-full z-0"
                : "opacity-0 translate-x-0 z-0"
            }`}
          >
            <ProjectCard project={project} isActive={index === currentIndex} />
          </div>
        ))}
      </div>
      
      {/* Indicators */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              i === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Ultra Compact Project Card Component
const ProjectCard = ({ project, isActive }) => (
  <div className="relative h-full rounded-md overflow-hidden bg-gray-800 border border-gray-700 shadow">
    <div className="flex flex-col md:flex-row h-full p-3">
      {/* Project Image */}
      <div className="md:w-2/5 relative h-24 md:h-full rounded-sm overflow-hidden bg-gray-700">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        {/* Fallback if image fails */}
        <div className="absolute inset-0 hidden items-center justify-center bg-gray-800">
          <FaCode className="text-lg text-gray-600" />
        </div>
      </div>

      {/* Project Info */}
      <div className="md:w-3/5 md:pl-3 flex flex-col justify-between">
        <div>
          <h3 className="text-base font-bold text-white mb-1">
            {project.title}
          </h3>
          <p className="text-gray-300 text-xs leading-tight mb-2">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1 mb-2">
          {project.tech.map((tech, techIndex) => (
            <div
              key={techIndex}
              className="flex items-center gap-0.5 px-1 py-0.5 rounded bg-gray-700 border border-gray-600"
            >
              <div className="text-xs">{tech.icon}</div>
              <span className="text-xs text-gray-300">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-1.5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2 py-1 rounded bg-gray-700 hover:bg-gray-600 text-white text-xs transition-colors"
          >
            <FaGithub size={10} />
            <span className="text-xs">Code</span>
          </a>
          {project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-1 rounded bg-cyan-600 hover:bg-cyan-500 text-white text-xs transition-colors"
              >
              <FaExternalLinkAlt size={8} />
              <span className="text-xs">Live</span>
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default CardSlider;