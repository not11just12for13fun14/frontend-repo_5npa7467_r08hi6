import { useState } from 'react'
import { Menu, X, Rocket, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between gap-6 py-5 rounded-2xl mt-4 backdrop-blur supports-[backdrop-filter]:bg-white/10 border border-white/10">
          <a href="#" className="flex items-center gap-2 text-white">
            <div className="h-9 w-9 rounded-lg bg-emerald-500 text-slate-900 grid place-items-center"><Rocket size={18} /></div>
            <span className="font-semibold">RofaTech</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-slate-200">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
          <div className="hidden md:block">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-4 py-2 transition"><Sparkles size={18}/> Get Quote</a>
          </div>
          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X/> : <Menu/>}
          </button>
        </div>
      </div>
      {open && (
        <div className="mx-auto max-w-7xl px-6 md:hidden">
          <div className="mt-2 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur p-4 text-slate-200">
            <a href="#services" className="block py-2">Services</a>
            <a href="#work" className="block py-2">Work</a>
            <a href="#about" className="block py-2">About</a>
            <a href="#contact" className="block py-2">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
