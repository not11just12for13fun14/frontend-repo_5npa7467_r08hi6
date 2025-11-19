export default function Showcase() {
  return (
    <section id="work" className="relative py-24 bg-slate-950 text-white">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Selected work</h2>
          <p className="mt-4 text-slate-300">A peek at the kind of experiences we ship — fast, modern, and memorable.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {[1,2,3,4].map((i) => (
            <div key={i} className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5">
              <div className="aspect-[16/10] bg-[url('https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform" />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">SaaS Dashboard</h3>
                  <span className="text-xs text-slate-300">React • Tailwind</span>
                </div>
                <p className="mt-2 text-sm text-slate-300">Clean analytics UI with role-based access and charts.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}