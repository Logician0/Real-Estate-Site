import type { Metadata } from 'next'
import { properties } from '@/lib/properties'
import PropertyDetail from '@/components/sections/PropertyDetail'
import { notFound } from 'next/navigation'

interface Params {
  slug: string
}

export async function generateStaticParams() {
  return properties.map(property => ({
    slug: property.slug,
  }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const property = properties.find(p => p.slug === params.slug)

  if (!property) {
    return {
      title: 'Property Not Found',
      description: 'The property you are looking for does not exist.',
    }
  }

  return {
    title: `${property.title} | Shree Ram Properties`,
    description: property.description,
    keywords: [property.title, property.location, property.type, 'real estate'],
    openGraph: {
      title: property.title,
      description: property.description,
      images: [property.image],
    },
  }
}

export default function PropertyPage({ params }: { params: Params }) {
  const property = properties.find(p => p.slug === params.slug)

  if (!property) {
    notFound()
  }

  return <PropertyDetail property={property} />
}
