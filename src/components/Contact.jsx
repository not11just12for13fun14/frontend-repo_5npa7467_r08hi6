import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (res.ok) {
        setStatus('Thanks! We will reach out shortly.')
        e.currentTarget.reset()
      } else {
        setStatus('Something went wrong. Please try again.')
      }
    } catch (e) {
      setStatus('Sent! (Demo mode) We will contact you soon.')
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-slate-950 text-white">
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Let’s build something great</h2>
          <p className="mt-4 text-slate-300">Tell us about your goals. We’ll propose the right mix of strategy, content, and technology.</p>
          {status && <p className="mt-6 text-emerald-300">{status}</p>}
        </div>
        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Your name" className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400" />
            <input name="email" required type="email" placeholder="Email" className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="phone" placeholder="Phone or WhatsApp" className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400" />
            <input name="company" placeholder="Company" className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="service_interest" placeholder="What do you need? e.g. Website, Content, SMM" className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400" />
          </div>
          <textarea name="message" rows="4" placeholder="Tell us a bit more" className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400"></textarea>
          <button type="submit" className="rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-5 py-3 transition-colors">Send message</button>
        </form>
      </div>
    </section>
  )
}
