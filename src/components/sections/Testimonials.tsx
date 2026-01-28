'use client'

import { motion } from 'framer-motion'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      title: 'Happy Homeowner',
      content: 'Shree Ram Properties made the entire process smooth and hassle-free. The luxury villa we found exceeded our expectations. Highly recommended!',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Priya Sharma',
      title: 'Investor',
      content: 'Excellent investment opportunities with great ROI potential. The team provided expert guidance throughout. Best decision ever!',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'Vikram Patel',
      title: 'Business Owner',
      content: 'Found the perfect commercial space for my business. The location and infrastructure are exactly what we needed. Thank you!',
      rating: 5,
      image: '👨‍💻'
    },
    {
      name: 'Anjali Singh',
      title: 'First-Time Buyer',
      content: 'Professional team that understood our needs. They guided us through every step. Our dream home is now a reality!',
      rating: 5,
      image: '👩‍🎨'
    },
    {
      name: 'Amit Desai',
      title: 'Property Investor',
      content: 'Shree Ram Properties offers unique investment opportunities in prime locations. The appreciation potential is outstanding.',
      rating: 5,
      image: '👨‍🎯'
    },
    {
      name: 'Sophia Gupta',
      title: 'Corporate Client',
      content: 'We rented a luxury apartment through them. The entire experience was premium quality, from selection to moving in.',
      rating: 5,
      image: '👩‍💼'
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
              ⭐ Client Testimonials
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="section-heading mb-6">
            Trusted by <span className="text-accent">Thousands</span> of Satisfied Clients
          </motion.h2>

          <motion.p variants={itemVariants} className="section-subheading">
            Real stories from real people who found their perfect property with Shree Ram Properties.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-xl card-shadow"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-xl text-accent">⭐</span>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <p className="font-bold text-primary text-lg">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
