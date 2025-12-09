import React from "react";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { SiReact, SiDjango, SiTailwindcss, SiPython, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";

const ProjectSlider = () => {
  const projects = [
    {
      title: "Evoque",
      description: "A modern web application built with React and Vite. Features clean UI/UX design with smooth animations and responsive layout.",
      tech: [
        { name: "React", icon: <SiReact className="text-cyan-400" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
      ],
      github: "https://github.com/farhana-sherin/evoque",
      live: "https://evoque-one.vercel.app",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    },
    {
      title: "Event Management Frontend",
      description: "A comprehensive event management system frontend built with React and Tailwind CSS. Provides seamless user experience for event planning and management.",
      tech: [
        { name: "React", icon: <SiReact className="text-cyan-400" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "Python", icon: <SiPython className="text-blue-500" /> },
      ],
      github: "https://github.com/farhana-sherin/event-management-frontend",
      live: "https://event-motivoc-frontend.vercel.app/#",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
    },
    {
      title: "Foodz",
      description: "A food delivery or restaurant website built with JavaScript. Features modern design and interactive user interface.",
      tech: [
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
      ],
      github: "https://github.com/farhana-sherin/Foodz",
      live: "#",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
    },
  ];

  return (
    <ScrollStack>
      {projects.map((project, index) => (
        <ScrollStackItem 
          key={index} 
          itemClassName="bg-white/5 border border-white/10 backdrop-blur-xl"
        >
          <div className="flex flex-col md:flex-row h-full">
            {/* Project Image */}
            <div className="md:w-2/5 relative h-48 md:h-[360px] overflow-hidden rounded-2xl mb-6 md:mb-0 md:mr-6">
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
              <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl">
                <FaCode className="text-5xl text-white/10" />
              </div>
            </div>

            {/* Project Info */}
            <div className="md:w-3/5 space-y-5 flex flex-col">
              <div>
                <h3 className="text-3xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 pt-2">
                {project.tech.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl backdrop-blur-sm bg-white/10 border border-white/20"
                  >
                    {tech.icon}
                    <span className="text-sm text-gray-200">{tech.name}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20 text-white font-medium transition-all duration-300"
                >
                  <FaGithub size={18} />
                  <span>Code</span>
                </a>
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl backdrop-blur-sm bg-white/20 border border-white/30 hover:bg-white/30 text-white font-medium transition-all duration-300"
                  >
                    <FaExternalLinkAlt size={16} />
                    <span>Live</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </ScrollStackItem>
      ))}
    </ScrollStack>
  );
};

export default ProjectSlider;