import React from 'react'
import { FaDownload, FaCode, FaRocket, FaHeart } from 'react-icons/fa'
import hero from "../assets/images/far1.png"

export const About = () => {
  const stats = [
    { number: "3+", label: "Years Experience", icon: <FaCode className="text-gray-300" /> },
    { number: "15+", label: "Projects Completed", icon: <FaRocket className="text-gray-300" /> },
    { number: "100%", label: "Client Satisfaction", icon: <FaHeart className="text-gray-300" /> }
  ]

  return (
    <section id="about" className="relative bg-black text-white px-6 lg:px-24 py-28">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-300">About Me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Crafting Digital Experiences</span>
            
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm passionate about creating functional, user-centered digital experiences that make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left - Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start relative">
            <div className="relative group">
              <div className="absolute -inset-2 bg-white/10 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-500"></div>

              <div className="relative rounded-3xl overflow-hidden bg-white/5 p-2 transform group-hover:scale-[1.02] transition-all duration-500 border border-white/10">
                <img
                  src={hero}
                  alt="Farhana Sherin"
                  className="w-full h-[380px] object-cover rounded-2xl opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Bio */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Hello, I'm <span className="text-gray-300">Farhana</span>
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                A passionate full-stack developer who loves crafting elegant, efficient, and modern web applications. 
                I focus on writing clean code, scalable architecture, and user-friendly designs that bridge creativity with functionality.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, I explore new technologies, contribute to open-source projects, and share insights with the dev community. 
                I believe in lifelong learning and staying ahead with the latest in tech.
              </p>
            </div>

            

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/farhana sherin.pdf"
                download="farhana sherin.pdf"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 shadow-md hover:-translate-y-1"
              >
                <FaDownload />
                Download Resume
              </a>
              <a
                href="#skills"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-all duration-300"
              >
                View Skills
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}