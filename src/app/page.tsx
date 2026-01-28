import Hero from '@/components/sections/Hero'
import FeaturedProperties from '@/components/sections/FeaturedProperties' // <--- New Import
import About from '@/components/sections/About'
import Testimonials from '@/components/sections/Testimonials'
import ContactCTA from '@/components/sections/ContactCTA'

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Updated: Now shows top 4 properties + "View All" button */}
      <FeaturedProperties />
      
      <About />
      <Testimonials />
      <ContactCTA />
    </>
  )
}