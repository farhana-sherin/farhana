import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaCode, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiReact, SiDjango, SiTailwindcss, SiPython, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import CircularGallery from "./CircularGallery";

// Project Details Overlay Component
const ProjectDetailsOverlay = ({ project, isVisible }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5 }}
      className="absolute bottom-0 left-0 right-0 z-20 p-6 lg:p-8 pointer-events-none"
    >
      <div className="max-w-4xl mx-auto bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8">
        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, techIndex) => (
            <motion.div
              key={techIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: techIndex * 0.05 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <span className="text-sm">{tech.icon}</span>
              <span className="text-gray-300 text-xs">{tech.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pointer-events-auto">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-medium transition-all duration-300 backdrop-blur-sm"
          >
            <FaGithub size={16} />
            <span>Code</span>
          </motion.a>
          {project.live !== "#" && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/30 text-white font-medium transition-all duration-300 backdrop-blur-sm"
            >
              <FaExternalLinkAlt size={14} />
              <span>Live</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const galleryRef = useRef(null);

  const projects = [
    {
      title: "Evoque",
      description: "A modern web application built with React and Vite. Features clean UI/UX design with smooth animations and responsive layout.",
      tech: [
        { name: "React", icon: <SiReact className="text-white" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-white" /> },
        { name: "CSS", icon: <SiCss3 className="text-white" /> },
      ],
      github: "https://github.com/farhana-sherin/evoque",
      live: "https://evoque-one.vercel.app",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    },
    {
      title: "Event Management Frontend",
      description: "A comprehensive event management system frontend built with React and Tailwind CSS. Provides seamless user experience for event planning and management.",
      tech: [
        { name: "React", icon: <SiReact className="text-white" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-white" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-white" /> },
        { name: "Python", icon: <SiPython className="text-white" /> },
      ],
      github: "https://github.com/farhana-sherin/event-management-frontend",
      live: "https://event-motivoc-frontend.vercel.app/#",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
    },
    {
      title: "Foodz",
      description: "A food delivery or restaurant website built with JavaScript. Features modern design and interactive user interface.",
      tech: [
        { name: "JavaScript", icon: <SiJavascript className="text-white" /> },
        { name: "HTML", icon: <SiHtml5 className="text-white" /> },
        { name: "CSS", icon: <SiCss3 className="text-white" /> },
      ],
      github: "https://github.com/farhana-sherin/Foodz",
      live: "#",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
    },
  ];

  // Convert projects to gallery items format
  const galleryItems = projects.map(project => ({
    image: project.image,
    text: project.title,
    project: project
  }));

  useEffect(() => {
    // Auto-rotate through projects
    const interval = setInterval(() => {
      setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <section id="projects" className="relative bg-black text-white py-28 px-6 lg:px-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] opacity-30 -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] opacity-30 -z-10 animate-pulse" style={{ animationDelay: "1s" }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-white/5 border border-white/10 mb-6"
          >
            <FaCode className="text-white/60" size={16} />
            <span className="text-sm font-medium text-gray-400">My Work</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="text-white">Featured Projects</span>
           
            
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-4"
          >
            A collection of projects that showcase my skills in web development, design, and problem-solving.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm text-gray-500"
          >
            Scroll or drag to explore projects
          </motion.p>
        </motion.div>

        {/* Circular Gallery */}
        <div className="relative" style={{ height: '600px' }}>
          <CircularGallery
            items={galleryItems}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
            scrollSpeed={2}
          />
          
          {/* Project Details Overlay */}
          <ProjectDetailsOverlay 
            project={projects[currentProjectIndex]} 
            isVisible={true}
          />
        </div>
      </div>
    </section>
  );
};