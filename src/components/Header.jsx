import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', to: '/', hash: '#home' },
    { name: 'About', to: '/', hash: '#about' },
    { name: 'Projects', to: '/projects', hash: '' },
    { name: 'Skills', to: '/', hash: '#skills' },
   
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl shadow-2xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <nav className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="text-2xl lg:text-3xl font-extrabold text-white hover:text-gray-300 transition-all duration-300"
            >
              Portfolio
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => {
                if (item.hash) {
                  // For hash links, navigate to home first if needed, then scroll
                  const handleHashClick = (e) => {
                    e.preventDefault()
                    if (location.pathname !== '/') {
                      window.location.href = `/${item.hash}`
                    } else {
                      const element = document.querySelector(item.hash)
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }
                  }
                  return (
                    <a
                      key={item.name}
                      href={item.hash}
                      onClick={handleHashClick}
                      className="relative px-3 py-2 text-lg font-medium text-white hover:text-gray-300 transition-colors duration-200 group"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  )
                }
                return (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="relative px-3 py-2 text-lg font-medium text-white hover:text-gray-300 transition-colors duration-200 group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-white text-lg font-medium rounded-full text-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-gray-200/50">
            {navItems.map((item, index) => {
              if (item.hash) {
                const handleHashClick = (e) => {
                  e.preventDefault()
                  setIsMobileMenuOpen(false)
                  if (location.pathname !== '/') {
                    window.location.href = `/${item.hash}`
                  } else {
                    const element = document.querySelector(item.hash)
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }
                }
                return (
                  <a
                    key={item.name}
                    href={item.hash}
                    onClick={handleHashClick}
                    className="block px-3 py-2 text-base font-medium text-white hover:text-gray-300 hover:bg-gray-800 rounded-md transition-colors duration-200"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item.name}
                  </a>
                )
              }
              return (
                <Link
                  key={item.name}
                  to={item.to}
                  className="block px-3 py-2 text-base font-medium text-white hover:text-gray-300 hover:bg-gray-800 rounded-md transition-colors duration-200"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            })}
            <div className="pt-4">
              <Link
                to="/contact"
                className="block w-full text-center px-4 py-3 border border-white text-base font-medium rounded-full text-white hover:bg-white hover:text-black transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}