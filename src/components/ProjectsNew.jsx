import React from "react";
import { FaCode, FaGithub } from "react-icons/fa";
import ProjectSlider from "./ProjectSlider";

export const Projects = () => {
  return (
    <section id="projects" className="relative bg-black text-white py-28 px-6 lg:px-24 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] opacity-30 -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-white/5 border border-white/10 mb-6">
            <FaCode className="text-white/60" size={16} />
            <span className="text-sm font-medium text-gray-400">My Work</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Featured</span>
            <br />
            <span className="text-gray-300">Projects</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A collection of projects that showcase my skills in web development, design, and problem-solving.
          </p>
        </div>

        {/* Project Slider - Maintains Original Design */}
        <div className="flex justify-center">
          <ProjectSlider />
        </div>

        {/* View More CTA */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/farhana-sherin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-medium transition-all duration-300"
          >
            <FaGithub size={18} />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};