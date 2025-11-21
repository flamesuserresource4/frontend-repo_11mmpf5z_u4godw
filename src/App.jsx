import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import ParallaxShowcase from './components/ParallaxShowcase'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ParallaxShowcase />

        {/* CTA */}
        <section className="relative py-24 bg-gradient-to-b from-black via-[#0b0b0c] to-black">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_0%,rgba(255,90,31,0.18)_0%,transparent_60%)]" />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-white">Launch faster than ever</h3>
            <p className="mt-3 text-white/70 max-w-2xl mx-auto">Join teams building resilient products on a platform inspired by the Great Wall: vast, secure and built to last.</p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 via-orange-500 to-rose-500 text-white font-medium shadow-lg shadow-red-500/30 hover:opacity-95 transition-opacity">Create your workspace</button>
              <button className="px-6 py-3 rounded-xl border border-white/15 text-white/90 bg-black/40 backdrop-blur hover:text-white hover:border-white/25 transition-colors">Talk to sales</button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/60">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-red-500 via-orange-500 to-rose-500" />
            <span className="text-sm">© {new Date().getFullYear()} GreatWall Cloud</span>
          </div>
          <div className="text-xs flex items-center gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
