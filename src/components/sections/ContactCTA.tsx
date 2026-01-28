'use client'

import ContactForm from '@/components/forms/ContactForm'
import { motion } from 'framer-motion'

const ContactCTA = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-6 py-2 bg-accent/20 text-accent font-semibold rounded-full text-sm border border-accent/50">
                📞 Get In Touch
              </span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="section-heading mb-6">
              Ready to Find Your <span className="text-accent">Perfect Property?</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="section-subheading mb-8">
              Our expert team is here to help you find the perfect property that matches your dreams and investment goals.
            </motion.p>

            {/* Contact Methods */}
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.a
                href="tel:+919508635494"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent/10 transition-all"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <p className="font-semibold text-primary">Call Us</p>
                  <p className="text-gray-600">+91 9508635494</p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:suraj.logician@gmail.com"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent/10 transition-all"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <p className="font-semibold text-primary">Email Us</p>
                  <p className="text-gray-600">suraj.logician@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/919508635494"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent/10 transition-all"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💬</span>
                </div>
                <div>
                  <p className="font-semibold text-primary">WhatsApp</p>
                  <p className="text-gray-600">Chat with our agents</p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent/10 transition-all"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <p className="font-semibold text-primary">Visit Us</p>
                  <p className="text-gray-600">123 Premium Street, City</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-2xl card-shadow"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA
