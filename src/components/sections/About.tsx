'use client'

import { motion } from 'framer-motion'

const About = () => {
  const features = [
    {
      icon: '🏆',
      title: 'Industry Leaders',
      description: 'Trusted by thousands with 15+ years of expertise in premium real estate.'
    },
    {
      icon: '🤝',
      title: 'Transparent Deals',
      description: 'Clear communication and honest transactions from start to finish.'
    },
    {
      icon: '📍',
      title: 'Prime Locations',
      description: 'Properties in the most sought-after neighborhoods and business districts.'
    },
    {
      icon: '💎',
      title: 'Premium Quality',
      description: 'Curated selection of luxury homes and investment opportunities.'
    },
    {
      icon: '⚡',
      title: 'Fast Process',
      description: 'Streamlined procedures for quick and hassle-free transactions.'
    },
    {
      icon: '🛡️',
      title: 'Complete Support',
      description: 'Expert guidance through every step of your real estate journey.'
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
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <span className="inline-block px-6 py-2 bg-accent/20 text-accent font-semibold rounded-full text-sm border border-accent/50 mb-6">
              👋 About Shree Ram
            </span>

            <h2 className="section-heading mb-6">
              Building Premium Properties Since <span className="text-accent">2009</span>
            </h2>

            <p className="section-subheading mb-6">
              Shree Ram Properties is a leading real estate developer and consultant committed to delivering luxury properties and exceptional service. With over 15 years of experience, we've helped thousands of families find their dream homes and investors secure their financial futures.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our portfolio spans residential villas, modern apartments, commercial spaces, and investment-grade plots across premium locations. We pride ourselves on transparency, quality, and customer satisfaction.
            </p>

            <motion.a
              href="https://wa.me/919876543210"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-accent inline-block"
            >
              Learn More About Us
            </motion.a>
          </motion.div>

          {/* Right Side - Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-gradient-to-br from-accent/20 to-primary/10 p-8 rounded-xl text-center">
              <p className="text-4xl font-bold text-accent mb-2">500+</p>
              <p className="font-semibold text-primary">Properties Sold</p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/20 p-8 rounded-xl text-center">
              <p className="text-4xl font-bold text-primary mb-2">2K+</p>
              <p className="font-semibold text-gray-700">Happy Customers</p>
            </div>
            <div className="bg-gradient-to-br from-accent/20 to-primary/10 p-8 rounded-xl text-center">
              <p className="text-4xl font-bold text-accent mb-2">₹1000Cr</p>
              <p className="font-semibold text-primary">Market Value</p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/20 p-8 rounded-xl text-center">
              <p className="text-4xl font-bold text-primary mb-2">15+</p>
              <p className="font-semibold text-gray-700">Years Experience</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12 border-t border-gray-200"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="p-6 rounded-xl hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
