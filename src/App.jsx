import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Showcase from './components/Showcase'
import Contact from './components/Contact'
import ScrollProgress from './components/ScrollProgress'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Services />
      <Showcase />
      <Contact />
      <footer className="border-t border-white/10 py-10 text-center text-slate-300 bg-slate-950">© {new Date().getFullYear()} RofaTech. All rights reserved.</footer>
    </div>
  )
}

export default App
