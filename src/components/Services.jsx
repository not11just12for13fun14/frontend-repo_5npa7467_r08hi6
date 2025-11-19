import { useEffect, useState } from 'react'
import { Code2, PenTool, Wrench, Share2 } from 'lucide-react'

const ICONS = { Code2, PenTool, Wrench, Share2 }

export default function Services() {
  const [services, setServices] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/services`)
        const data = await res.json()
        setServices(data)
      } catch (e) {
        setServices([])
      }
    }
    load()
  }, [])

  return (
    <section id="services" className="relative py-24 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_20%,rgba(16,185,129,0.15),transparent),radial-gradient(600px_300px_at_80%_50%,rgba(59,130,246,0.15),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">What we do</h2>
          <p className="mt-4 text-slate-300">From strategy to execution. We partner with you to create content, build products, and drive growth.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = ICONS[s.icon] || Code2
            return (
              <div key={i} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:-translate-y-1 hover:shadow-xl transition-all">
                <div className="h-12 w-12 rounded-lg bg-emerald-500/20 text-emerald-300 grid place-items-center group-hover:bg-emerald-500/30 transition">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-slate-300 text-sm">{s.description}</p>
                {s.features && (
                  <ul className="mt-4 space-y-2 text-sm text-slate-300/90">
                    {s.features.map((f, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
