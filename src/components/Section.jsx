import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Section({ id, heading, subheading, children, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' })

  return (
    <section id={id} ref={ref} className={`relative py-24 ${className}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-[80vw] blur-3xl opacity-40 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15),transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {(heading || subheading) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            {heading && <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">{heading}</h2>}
            {subheading && <p className="mt-4 text-slate-300">{subheading}</p>}
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-12"
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
