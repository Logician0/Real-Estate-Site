'use client'

import PropertyCard from '@/components/cards/PropertyCard'
import { properties } from '@/lib/properties'
import { motion } from 'framer-motion'

const PropertyListing = () => {
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
    <section className="py-20 bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-6 py-2 bg-accent/20 text-accent font-semibold rounded-full text-sm border border-accent/50">
              🏠 Our Collections
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="section-heading mb-6">
            Handpicked <span className="text-accent">Premium Properties</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="section-subheading">
            Explore our curated selection of luxury properties across residential, commercial, and investment categories.
          </motion.p>
        </motion.div>

        {/* Properties Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {properties.map((property, index) => (
            <PropertyCard
              key={property.id}
              {...property}
              index={index}
            />
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <motion.a
            href="/properties"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-10 py-4"
          >
            View All Properties
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default PropertyListing
