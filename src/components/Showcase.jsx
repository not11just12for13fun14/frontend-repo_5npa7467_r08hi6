import { motion } from 'framer-motion'
import ParallaxImage from './ParallaxImage'

const projects = [
  {
    title: 'SaaS Dashboard',
    tech: 'React • Tailwind',
    image: 'https://images.unsplash.com/photo-1651760464181-49092525ca3b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYWFTJTIwRGFzaGJvYXJkfGVufDB8MHx8fDE3NjM1Mzc0MDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description: 'Clean analytics UI with role-based access and charts.'
  },
  {
    title: 'E-commerce Experience',
    tech: 'Next.js • Stripe',
    image: 'https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFLWNvbW1lcmNlJTIwRXhwZXJpZW5jZXxlbnwwfDB8fHwxNzYzNTM3NDA1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description: 'High-converting storefront with blazing-fast performance.'
  },
  {
    title: 'Brand & Marketing Site',
    tech: 'React • CMS',
    image: 'https://images.unsplash.com/photo-1626794453133-ec97d10d86b9?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCcmFuZCUyMCUyNiUyME1hcmtldGluZyUyMFNpdGV8ZW58MHwwfHx8MTc2MzUzNzQwNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description: 'Elegant brand presence with motion and CMS editing.'
  },
  {
    title: 'Mobile App Landing',
    tech: 'Vite • Framer Motion',
    image: 'https://images.unsplash.com/photo-1520410973988-f551cf36c60d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNb2JpbGUlMjBBcHAlMjBMYW5kaW5nfGVufDB8MHx8fDE3NjM1Mzc0MDZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description: 'Polished launch page with 3D visuals and storytelling.'
  }
]

export default function Showcase() {
  return (
    <section id="work" className="relative py-24 bg-slate-950 text-white">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Selected work</h2>
          <p className="mt-4 text-slate-300">A peek at the kind of experiences we ship — fast, modern, and memorable.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5"
            >
              <ParallaxImage src={p.image} alt={p.title} className="" />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <span className="text-xs text-slate-300">{p.tech}</span>
                </div>
                <p className="mt-2 text-sm text-slate-300">{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
