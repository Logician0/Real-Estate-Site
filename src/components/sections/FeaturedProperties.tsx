'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { properties } from '@/lib/properties'
import PropertyCard from '@/components/cards/PropertyCard'

const FeaturedProperties = () => {
  // Get first 4 items
  const featuredList = properties.slice(0, 4)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-bold tracking-wider uppercase text-sm">
            Exclusive Listings
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
            Featured Properties
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          {featuredList.map((property, index) => {
            // --- THE FIX IS HERE ---
            // 1. Grab the first image from the array
            // 2. If array is empty, look for a singular 'image' property
            // 3. If that fails, use a safe placeholder
            // @ts-ignore
            const mainImage = property.images?.[0] || property.image || '/images/img1.jpg';

            return (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <PropertyCard 
                  id={Number(property.id)}
                  slug={property.slug}
                  title={property.title}
                  location={property.location}
                  price={property.price}
                  type={property.type}
                  bhk={String(property.bhk)}
                  area={property.area}
                  // We explicitly pass the calculated image variable here
                  image={mainImage} 
                  index={index}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <Link href="/properties">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2 shadow-sm"
            >
              View All Properties
              <span className="text-xl">→</span>
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProperties