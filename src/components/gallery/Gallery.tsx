'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useMotionValue, useAnimation } from 'framer-motion'
import { useGesture } from '@use-gesture/react'

interface GalleryProps {
  images: string[]
  title?: string
}

const swipeConfidenceThreshold = 100

// --- 1. The Elastic Zoom Component (Internal) ---
// This handles the "Instagram-style" pinch physics
const ElasticImage = ({ src, alt }: { src: string; alt: string }) => {
  const ref = useRef(null)
  
  // Motion values for smooth, performant animations without re-renders
  const scale = useMotionValue(1)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const controls = useAnimation()

  useGesture(
    {
      onPinch: ({ origin: [ox, oy], offset: [s], event, memo }) => {
        event.preventDefault()
        // Prevent zooming out smaller than original size
        const newScale = Math.max(1, s)
        scale.set(newScale)
        return memo
      },
      onPinchEnd: () => {
        // SNAP BACK: The key "Instagram" behavior
        // When fingers leave, spring back to original size and position
        controls.start({
          scale: 1,
          x: 0,
          y: 0,
          transition: { type: 'spring', stiffness: 300, damping: 30 }
        })
      },
      onDrag: ({ offset: [dx, dy], pinching }) => {
        // Only allow panning if we are zoomed in
        if (pinching) return
        if (scale.get() > 1) {
          x.set(dx)
          y.set(dy)
        }
      },
      onDoubleClick: () => {
        // Bonus: Double tap to zoom in/out slightly
        if (scale.get() > 1) {
           controls.start({ scale: 1, x: 0, y: 0 })
        } else {
           controls.start({ scale: 2.5, transition: { type: 'spring' } })
           scale.set(2.5) // Sync value
        }
      }
    },
    {
      target: ref,
      pinch: { scaleBounds: { min: 1, max: 4 }, rubberband: true },
      drag: { from: () => [x.get(), y.get()] },
      eventOptions: { passive: false } // Critical for overriding browser zoom
    }
  )

  return (
    <motion.div 
        ref={ref}
        animate={controls}
        style={{ scale, x, y, touchAction: 'none' }}
        className="relative w-full h-full flex items-center justify-center"
    >
      {/* We use a div wrapper to center the image properly during zoom */}
      <div className="relative w-full h-full max-w-[90vw] max-h-[85vh]">
        <Image
            src={src}
            alt={alt}
            fill
            className="object-contain pointer-events-none select-none"
            priority
            draggable={false}
        />
      </div>
    </motion.div>
  )
}


// --- 2. Main Gallery Component ---
const Gallery: React.FC<GalleryProps> = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  const goToImage = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  /* ================= BACK BUTTON HANDLING ================= */
  useEffect(() => {
    if (!isFullscreen) return

    const handlePopState = () => {
      setIsFullscreen(false)
    }

    window.history.pushState({ fullscreen: true }, '')
    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
      // Only go back if we are still in the state we pushed
      if (window.history.state?.fullscreen) {
        window.history.back()
      }
    }
  }, [isFullscreen])

  return (
    <>
      {/* ================= MAIN GALLERY (Grid View) ================= */}
      <div className="space-y-6">
        <motion.div className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden bg-gray-200 group">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, { offset }) => {
                if (offset.x < -swipeConfidenceThreshold) nextImage()
                if (offset.x > swipeConfidenceThreshold) prevImage()
              }}
              onClick={() => setIsFullscreen(true)}
              className="relative w-full h-full cursor-zoom-in active:cursor-grabbing"
            >
              <Image
                src={images[currentIndex]}
                alt={`${title || 'Gallery'} image ${currentIndex + 1}`}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Arrows (Hidden on mobile, visible on hover desktop) */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 text-white rounded-full text-xl backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10"
          >
            ←
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 text-white rounded-full text-xl backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10"
          >
            →
          </button>
        </motion.div>

        {/* Thumbnails */}
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => goToImage(i)}
              className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all ${
                i === currentIndex ? 'ring-2 ring-yellow-500 ring-offset-2' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <Image src={img} alt={`Thumb ${i + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* ================= FULLSCREEN (Lightbox) ================= */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* UI Controls - Absolute positioned on top of the image */}
            
            {/* Close Button */}
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-6 right-6 z-[110] w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full text-xl backdrop-blur-md flex items-center justify-center transition-colors"
            >
              ✕
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full text-xl backdrop-blur-md flex items-center justify-center transition-colors"
            >
              ←
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full text-xl backdrop-blur-md flex items-center justify-center transition-colors"
            >
              →
            </button>

            {/* THE ELASTIC IMAGE COMPONENT */}
            {/* We use the key={currentIndex} trick: 
                This forces React to destroy and recreate the ElasticImage component 
                whenever the slide changes. This automatically resets the zoom 
                level to 1.0 without us needing complex useEffects. */}
            <div className="w-full h-full overflow-hidden">
                <ElasticImage 
                    key={currentIndex} 
                    src={images[currentIndex]} 
                    alt={`${title} - Fullscreen`} 
                />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Gallery