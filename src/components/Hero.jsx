import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 120])
  const opacity = useTransform(scrollY, [0, 400], [1, 0.2])

  return (
    <section className="relative min-h-[100vh] w-full overflow-hidden bg-slate-950 text-white">
      <motion.div className="absolute inset-0" style={{ y, opacity }}>
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            RofaTech • Digital Agency
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight">
            We design, build and grow your digital presence
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            Websites, content, maintenance, and marketing — end to end. Modern animations, 3D, and performance baked in.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-5 py-3 transition-colors">Start a project</a>
            <a href="#work" className="rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 transition-colors">See our work</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
        >
          <a href="#services" className="flex items-center gap-2 text-slate-300 hover:text-white transition">
            <ArrowDown className="animate-bounce" size={18} />
            Scroll to explore
          </a>
        </motion.div>
      </div>
    </section>
  )
}
