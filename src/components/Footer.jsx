import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="relative bg-black text-white py-16 px-6 lg:px-24 border-t border-white/10">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              Farhana Sherin
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Full-Stack Developer crafting elegant digital experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Skills
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaEnvelope className="text-purple-400" />
                <span>your.email@example.com</span>
              </a>
              <div className="flex gap-4 pt-2">
                <a
                  href="https://github.com/farhana-sherin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/farhana-sherin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Farhana Sherin. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  )
}
