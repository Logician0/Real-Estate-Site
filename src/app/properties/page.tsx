'use client'

import PropertyCard from '@/components/cards/PropertyCard'
import { properties } from '@/lib/properties'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function PropertiesPage() {
  const [selectedType, setSelectedType] = useState<string>('All')
  const [sortBy, setSortBy] = useState<string>('featured')

  const propertyTypes = ['All', 'House', 'Flat', 'Plot', 'Commercial']

  const filteredProperties = selectedType === 'All'
    ? properties
    : properties.filter(p => p.type === selectedType)

  const sortedProperties = [...filteredProperties].sort((a, b) => {
    if (sortBy === 'price-low') {
      const priceA = parseInt(a.price.replace(/[^0-9]/g, ''))
      const priceB = parseInt(b.price.replace(/[^0-9]/g, ''))
      return priceA - priceB
    }
    if (sortBy === 'price-high') {
      const priceA = parseInt(a.price.replace(/[^0-9]/g, ''))
      const priceB = parseInt(b.price.replace(/[^0-9]/g, ''))
      return priceB - priceA
    }
    return 0
  })

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
    <main className="min-h-screen bg-secondary pt-24">
      <div className="container-custom">
        {/* Page Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <motion.h1 variants={itemVariants} className="section-heading mb-4">
            All <span className="text-accent">Properties</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="section-subheading">
            Browse our complete collection of premium properties.
          </motion.p>
        </motion.div>

        {/* Filters and Sorting */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white p-6 rounded-xl card-shadow mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Type Filter */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-primary mb-4">
                Property Type
              </label>
              <div className="flex flex-wrap gap-3">
                {propertyTypes.map(type => (
                  <motion.button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                      selectedType === type
                        ? 'bg-accent text-primary'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {type}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Sort */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-primary mb-4">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent bg-white text-primary"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </motion.div>
          </div>
        </motion.div>

        {/* Properties Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {sortedProperties.map((property, index) => (
            <PropertyCard
              key={property.id}
              {...property}
              index={index}
            />
          ))}
        </motion.div>

        {/* No Results */}
        {sortedProperties.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl text-gray-600">No properties found</p>
          </motion.div>
        )}

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-8 border-t border-gray-300"
        >
          <p className="text-gray-600">
            Showing <span className="font-bold text-primary">{sortedProperties.length}</span> properties
          </p>
        </motion.div>
      </div>
    </main>
  )
}
