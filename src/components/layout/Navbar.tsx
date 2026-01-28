'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Properties', href: '/properties' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="container-custom flex items-center justify-between h-20">
        {/* Logo Section - Replace this part inside Navbar.tsx */}
      <Link href="/" className="flex items-center gap-2 flex-shrink-0">
                           {/* The Icon Box */}
                            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                             <span className="text-white font-bold text-lg">SR</span>
                            </div>
  
                          {/* The Text - Now forced to be visible and not wrap */}
                          <div className="flex flex-col justify-center">
                     <span className="font-bold text-primary text-lg leading-tight whitespace-nowrap">
      Shree Ram
    </span>
    <span className="text-xs text-gray-600 font-medium tracking-wide">
      Properties
    </span>
  </div>
</Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-primary hover:text-accent font-medium transition-colors underline-animated"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden sm:flex items-center space-x-4">
          <a href="tel:+919508635494" className="text-primary hover:text-accent font-semibold">
            📞
          </a>
          <a href="https://wa.me/919508635494" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent font-semibold">
            💬
          </a>
          <button className="btn-accent text-sm">
            View Properties
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col space-y-1.5 w-6 h-6 justify-center"
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
            className="w-6 h-0.5 bg-primary origin-center"
          />
          <motion.div
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="w-6 h-0.5 bg-primary"
          />
          <motion.div
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
            className="w-6 h-0.5 bg-primary origin-center"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="lg:hidden overflow-hidden bg-white border-t border-gray-200"
      >
        <div className="container-custom py-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-primary hover:text-accent font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button className="btn-accent w-full">
            View Properties
          </button>
        </div>
      </motion.div>
    </nav>
  )
}

export default Navbar