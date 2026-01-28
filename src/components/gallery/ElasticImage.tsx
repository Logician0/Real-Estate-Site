'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useAnimation, useMotionTemplate } from 'framer-motion';
import { useGesture } from '@use-gesture/react';

interface ElasticImageProps {
  src: string;
  alt: string;
  className?: string;
  onClose?: () => void; // Optional: to close lightbox on swipe down/up
}

export default function ElasticImage({ src, alt, className, onClose }: ElasticImageProps) {
  const ref = useRef(null);
  
  // 1. Motion Values (Performance optimized)
  // We use useMotionValue instead of state to prevent re-renders during gestures
  const scale = useMotionValue(1);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // 2. Animation Controls
  // This allows us to trigger the "Snap Back" programmatically
  const controls = useAnimation();

  // 3. The Gesture Logic
  useGesture(
    {
      onPinch: ({ origin: [ox, oy], offset: [s], event, memo }) => {
        event.preventDefault(); // Stop browser zooming
        
        // Calculate the pinch scale
        // We set a minimum of 1 (can't make it smaller)
        const newScale = Math.max(1, s);
        
        scale.set(newScale);
        return memo;
      },
      
      onPinchEnd: () => {
        // THE MAGIC: When fingers leave, snap everything back
        scale.set(1);
        x.set(0);
        y.set(0);
        
        // Use Framer Motion to animate the values back smoothly
        controls.start({
          scale: 1,
          x: 0,
          y: 0,
          transition: { type: 'spring', stiffness: 300, damping: 30 }
        });
      },

      // Optional: Add Panning so you can move around while zoomed in
      onDrag: ({ offset: [dx, dy], pinching }) => {
        if (pinching) return; // Don't drag if we are pinching
        
        // Only allow drag if we are currently zoomed in (scale > 1)
        // OR if you want to implement "Swipe to Close" logic here
        if (scale.get() > 1) {
          x.set(dx);
          y.set(dy);
        }
      }
    },
    {
      target: ref,
      pinch: { scaleBounds: { min: 1, max: 4 }, rubberband: true },
      drag: { from: () => [x.get(), y.get()] },
      eventOptions: { passive: false } // Critical for preventing browser defaults
    }
  );

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden touch-none">
      <motion.img
        ref={ref}
        src={src}
        alt={alt}
        animate={controls}
        style={{
          scale,
          x,
          y,
          // Optimization: Use hardware acceleration
          touchAction: 'none', 
          cursor: 'grab'
        }}
        className={`max-h-[90vh] max-w-[90vw] object-contain select-none ${className}`}
        draggable={false} // Disable native HTML drag
      />
    </div>
  );
}