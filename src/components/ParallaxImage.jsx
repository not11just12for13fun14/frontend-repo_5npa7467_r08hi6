import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ParallaxImage({ src, alt = '', speed = 0.2, className = '', overlay = true }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <div ref={ref} className={`relative overflow-hidden rounded-2xl ${className}`}>
      <motion.div style={{ y }} className="aspect-[16/10] bg-cover bg-center" aria-label={alt} role="img"
        
        // eslint-disable-next-line jsx-a11y/alt-text
      >
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </motion.div>
      {overlay && <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />}
    </div>
  )
}
