'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const Footer = () => {
  const footerSections = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Our Team', href: '#team' },
        { label: 'Careers', href: '#careers' },
        { label: 'Blog', href: '#blog' },
      ],
    },
    {
      title: 'Properties',
      links: [
        { label: 'All Listings', href: '/properties' },
        { label: 'Residential', href: '/properties?type=residential' },
        { label: 'Commercial', href: '/properties?type=commercial' },
        { label: 'Land', href: '/properties?type=land' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Buying Guide', href: '#guide' },
        { label: 'Investment Tips', href: '#tips' },
        { label: 'Market Trends', href: '#trends' },
        { label: 'FAQ', href: '#faq' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms & Conditions', href: '/terms' },
        { label: 'Cookie Policy', href: '/cookies' },
        { label: 'Disclaimer', href: '/disclaimer' },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <footer className="bg-primary text-white pt-20 pb-8">
      <div className="container-custom">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">SR</span>
              </div>
              <div>
                <p className="font-bold text-lg">Shree Ram Properties</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium real estate solutions for discerning investors and homeowners. Building dreams, one property at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                f
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                𝕏
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                in
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                📸
              </a>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h4 className="font-bold text-lg mb-6 text-accent">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-accent transition-colors underline-animated"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 py-8 border-t border-white/10"
        >
          <motion.div variants={itemVariants} className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-accent text-xl">📍</span>
            </div>
            <div>
              <h5 className="font-semibold mb-1">Address</h5>
              <p className="text-gray-400 text-sm">
                123 Premium Street<br />
                Business District, City<br />
                State 123456
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-accent text-xl">📞</span>
            </div>
            <div>
              <h5 className="font-semibold mb-1">Contact</h5>
              <p className="text-gray-400 text-sm">
                <a href="tel:+919508635494" className="hover:text-accent transition-colors">
                  +91 9508635494
                </a><br />
                <a href="mailto:suraj.logician@gmail.com" className="hover:text-accent transition-colors">
                  suraj.logician@gmail.com
                </a>
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-accent text-xl">⏰</span>
            </div>
            <div>
              <h5 className="font-semibold mb-1">Hours</h5>
              <p className="text-gray-400 text-sm">
                Mon - Fri: 9:00 AM - 6:00 PM<br />
                Sat: 10:00 AM - 4:00 PM<br />
                Sun: By Appointment
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
            © 2026 Shree Ram Properties. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-accent transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-accent transition-colors">
              Terms
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-accent transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
