'use client'

import Gallery from '@/components/gallery/Gallery'
import ContactForm from '@/components/forms/ContactForm'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Property {
  id: number
  slug: string
  title: string
  type: string
  location: string
  price: string
  priceUSD: string
  bhk: string
  area: string
  description: string
  fullDescription: string
  amenities: string[]
  gallery: string[]
  highlights: string[]
}

interface PropertyDetailProps {
  property: Property
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
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
      {/* Breadcrumb */}
      <div className="container-custom mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-accent underline-animated">Home</Link>
          <span>/</span>
          <Link href="/properties" className="hover:text-accent underline-animated">Properties</Link>
          <span>/</span>
          <span className="text-primary font-semibold">{property.title}</span>
        </div>
      </div>

      <div className="container-custom pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          {/* Main Content - Left & Center */}
          <div className="lg:col-span-2 space-y-12">
            {/* Header */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-4 mb-4">
                <span className="px-4 py-2 bg-accent text-primary font-bold rounded-full text-sm">
                  {property.type}
                </span>
                <div className="flex items-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">⭐</span>
                  ))}
                </div>
              </div>
              <h1 className="text-5xl font-bold text-primary mb-4">{property.title}</h1>
              <div className="flex items-center gap-2 text-gray-600 text-lg mb-4">
                <span>📍</span>
                {property.location}
              </div>
              <div className="text-4xl font-bold text-accent">
                {property.price}
                <span className="text-lg text-gray-600 ml-2">({property.priceUSD})</span>
              </div>
            </motion.div>

            {/* Gallery */}
            <motion.div variants={itemVariants}>
              <Gallery images={property.gallery} title={property.title} />
            </motion.div>

            {/* Highlights */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {property.highlights.map((highlight, index) => (
                <div key={index} className="bg-accent/10 border border-accent/30 p-4 rounded-lg text-center">
                  <p className="font-semibold text-primary text-sm">{highlight}</p>
                </div>
              ))}
            </motion.div>

            {/* Key Specs */}
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl card-shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">Key Specifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">Property Type</p>
                  <p className="text-2xl font-bold text-primary">{property.type}</p>
                </div>
                {property.bhk !== 'N/A' && (
                  <div className="text-center p-4 bg-secondary rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">Bedrooms</p>
                    <p className="text-2xl font-bold text-primary">{property.bhk} BHK</p>
                  </div>
                )}
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">Area</p>
                  <p className="text-2xl font-bold text-primary">{property.area}</p>
                </div>
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">Price</p>
                  <p className="text-xl font-bold text-accent">{property.price}</p>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl card-shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">About This Property</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                {property.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            {/* Amenities */}
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl card-shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">Amenities & Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-2xl">✓</span>
                    <span className="text-primary font-semibold">{amenity}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Location Map Placeholder */}
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl card-shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">Location</h2>
              <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">
                  📍 Map coming soon for: {property.location}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Right */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Sticky Contact Form */}
            <div className="bg-white p-8 rounded-xl card-shadow sticky top-32">
              <h3 className="text-2xl font-bold text-primary mb-6">Get in Touch</h3>
              <ContactForm propertyTitle={property.title} propertyId={property.id} />
            </div>

            {/* Quick Contact */}
            <div className="bg-primary text-white p-8 rounded-xl space-y-4">
              <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>

              <a
                href="tel:+919508635494"
                className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
              >
                <span className="text-2xl">📞</span>
                <div>
                  <p className="text-sm text-gray-300">Call</p>
                  <p className="font-semibold">+91 9508635494</p>
                </div>
              </a>

              <a
                href="https://wa.me/919508635494"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
              >
                <span className="text-2xl">💬</span>
                <div>
                  <p className="text-sm text-gray-300">WhatsApp</p>
                  <p className="font-semibold">Chat Now</p>
                </div>
              </a>

              <a
                href="mailto:suraj.logician@gmail.com"
                className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
              >
                <span className="text-2xl">📧</span>
                <div>
                  <p className="text-sm text-gray-300">Email</p>
                  <p className="font-semibold">suraj.logician@gmail.com</p>
                </div>
              </a>
            </div>

            {/* Property Features */}
            <div className="bg-white p-8 rounded-xl card-shadow">
              <h3 className="text-2xl font-bold text-primary mb-6">Why Choose This Property?</h3>
              <ul className="space-y-4">
                {property.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent text-2xl mt-1">▪</span>
                    <span className="text-gray-700 font-medium">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust Badge */}
            <div className="bg-accent/10 border-2 border-accent p-6 rounded-xl text-center">
              <p className="text-4xl mb-2">🏆</p>
              <p className="font-bold text-primary mb-2">Award Winning Service</p>
              <p className="text-sm text-gray-600">15+ Years of Excellence</p>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary to-primary/90 text-white p-12 rounded-xl text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Schedule a Property Visit Today</h2>
          <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
            Experience this luxury property in person. Our expert agents are ready to show you around and answer all your questions.
          </p>
          <motion.a
            href="https://wa.me/919508635494"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-all"
          >
            Schedule Visit Now
          </motion.a>
        </motion.div>
      </div>
    </main>
  )
}

export default PropertyDetail
