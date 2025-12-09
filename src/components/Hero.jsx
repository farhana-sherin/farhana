import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaArrowDown, FaDownload } from "react-icons/fa";
import hero from "../assets/images/logo.png";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative bg-black text-white h-screen flex items-center justify-center px-6 lg:px-20 overflow-hidden"
    >
    

      <div className="flex flex-col lg:flex-row items-center w-full max-w-7xl mx-auto h-full py-12">
        {/* Left Content - Properly aligned */}
        <div
          className={`flex-1 flex flex-col justify-center space-y-4 text-center lg:text-left relative z-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-4 mt-20">
          {/* Name Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            <span className="block text-gray-300 text-xl sm:text-2xl lg:text-3xl mb-1">
              Hello, I'm
            </span>
            <span className="block text-white">Farhana Sherin</span>
            <span className="block text-xl sm:text-2xl lg:text-3xl font-light text-gray-400 mt-1">
              Full-Stack Developer
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-gray-300 max-w-xl text-base lg:text-lg leading-relaxed mx-auto lg:mx-0">
            I build elegant, high-performance web experiences that combine
            simplicity, precision, and modern design principles.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 ">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-base hover:bg-gray-200 transition-all duration-300 shadow-lg hover:-translate-y-1"
            >
              <span>Let's Connect</span>
              <FaArrowDown className="group-hover:translate-y-1 transition-transform duration-300" />
            </a>
            <a
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-white text-white font-semibold text-base hover:bg-white hover:text-black transition-all duration-300"
            >
              View My Work
            </a>
            
          </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-4 pt-2">
            <a
              href="https://github.com/farhana-sherin"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110"
            >
              <FaGithub
                size={20}
                className="text-gray-300 group-hover:text-black"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/farhana-sherin-14511a2b2"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110"
            >
              <FaLinkedin
                size={20}
                className="text-gray-300 group-hover:text-[#0A66C2]"
              />
            </a>
          </div>
        </div>

        {/* Right Image - Moved slightly to the right */}
        <div
          className={`flex-1 flex items-center justify-center lg:justify-end relative z-10 h-full transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="relative w-full h-full flex items-end justify-end max-h-[100vh]">
            {/* Image Container - Moved slightly right */}
            <div className="relative w-full h-[80vh] flex items-end justify-end pr-8 pt-6">
              {/* Base Image - Full height with proper aspect ratio */}
              <img
                src={hero}
                alt="Farhana Sherin"
                className="h-full max-h-full w-auto object-contain object-bottom opacity-100 "
                style={{
                  filter: 'brightness(0.85)',
                  maxWidth: '100%',
                }}
              />
              
              {/* Multi-directional Gradient Overlays for seamless blend */}
              {/* Fade from left (blending into background) */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent pointer-events-none"
                style={{
                  maskImage: 'linear-gradient(to right, black 0%, transparent 60%)',
                  WebkitMaskImage: 'linear-gradient(to right, black 0%, transparent 60%)',
                }}
              ></div>
              
              {/* Fade from bottom */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none"
                style={{
                  maskImage: 'linear-gradient(to top, black 0%, transparent 40%)',
                  WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 40%)',
                }}
              ></div>
              
              {/* Fade from top */}
              <div 
                className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 0%, transparent 30%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 30%)',
                }}
              ></div>
              
              {/* Subtle glow effect */}
              <div className="absolute -inset-8 bg-white/5 rounded-full blur-3xl opacity-30 pointer-events-none" style={{
                right: '-50px',
                bottom: '-100px',
              }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};