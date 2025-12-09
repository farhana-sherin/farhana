import React, { useState, useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaServer,
  FaTools,
} from "react-icons/fa";
import { SiTailwindcss, SiDjango, SiVercel } from "react-icons/si";
import { MdOutlineApi } from "react-icons/md";
import { Link } from "react-router-dom";

export const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);

  const skillCategories = [
    {
      title: "Technical Skills",
      icon: <FaCode className="text-blue-400" />,
      skills: [
        { name: "HTML5", icon: <FaHtml5 size={32} className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt size={32} className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJsSquare size={32} className="text-yellow-400" /> },
        { name: "React", icon: <FaReact size={32} className="text-cyan-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={32} className="text-teal-400" /> },
        { name: "Python", icon: <FaPython size={32} className="text-blue-400" /> },
        { name: "Django", icon: <SiDjango size={32} className="text-green-600" /> },
        { name: "REST API", icon: <MdOutlineApi size={32} className="text-purple-400" /> },
        { name: "Git", icon: <FaGitAlt size={32} className="text-orange-600" /> },
        { name: "GitHub", icon: <FaGithub size={32} className="text-gray-200" /> },
        { name: "Vercel", icon: <SiVercel size={32} className="text-white" /> },
      ],
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setVisibleSkills(skillCategories.map((_, i) => i));
    }, 100);
  }, []);

  return (
    <section id="skills" className="relative bg-black text-white py-28 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-300">Skills & Expertise</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">
              Technical  Expertise
            </span>
            
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                visibleSkills.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Header removed — show single combined skills grid */}

              {/* Skills Grid - Two columns on mobile, more on larger screens */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="group relative p-6 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                        {skill.icon}
                      </div>
                    </div>

                    <h4 className="text-center text-white font-semibold mb-2">{skill.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-6 px-8 py-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/20">
            <div className="text-2xl">🚀</div>

            <div className="text-left">
              <h4 className="text-lg font-semibold text-white">Ready to work together?</h4>
              <p className="text-sm text-gray-400">Let's discuss your next project</p>
            </div>

            <Link
              to="/contact"
              className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get In Touch
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};