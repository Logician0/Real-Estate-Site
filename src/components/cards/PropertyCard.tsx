'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface PropertyCardProps {
  id: number
  slug: string
  title: string
  location: string
  price: string
  image: string
  type: string
  bhk: string
  area: string
  index?: number
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  slug,
  title,
  location,
  price,
  image,
  type,
  bhk,
  area,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <Link href={`/properties/${slug}`}>
        <div className="bg-white rounded-xl overflow-hidden card-shadow cursor-pointer">
          {/* Image Container */}
          <div className="relative h-64 overflow-hidden bg-gray-200">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Badge */}
            <div className="absolute top-4 right-4 bg-accent text-primary px-4 py-2 rounded-full text-sm font-bold">
              {type}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-primary mb-2 line-clamp-2">
                {title}
              </h3>
              <div className="flex items-center text-gray-600 text-sm mb-3">
                <span className="mr-2">📍</span>
                {location}
              </div>
            </div>

            {/* Specs */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-200 mb-4">
              {bhk !== 'N/A' && (
                <div className="text-center">
                  <p className="text-xs text-gray-600">BHK</p>
                  <p className="font-bold text-primary">{bhk}</p>
                </div>
              )}
              <div className="text-center">
                <p className="text-xs text-gray-600">Area</p>
                <p className="font-bold text-primary text-sm">{area}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-600">Type</p>
                <p className="font-bold text-primary text-sm">{type}</p>
              </div>
            </div>

            {/* Price & CTA */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-600 mb-1">Starting From</p>
                <p className="text-2xl font-bold text-accent">{price}</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all"
              >
                →
              </motion.button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default PropertyCard
