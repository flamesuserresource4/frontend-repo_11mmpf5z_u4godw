import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-24 flex items-stretch">
      {/* Spline immersive cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Dark gradient overlays for contrast - allow interactions through */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.25)_55%,rgba(0,0,0,0.75)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-rose-500" />
            Immersive SAAS platform
          </div>
          <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05] text-white drop-shadow-[0_6px_30px_rgba(255,90,31,0.2)]">
            Build at the scale of the Great Wall
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-white/80">
            A next-gen infrastructure suite with cinematic depth, buttery parallax, and blazing performance. Turn complex operations into a single elegant flow.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-red-500 via-orange-500 to-rose-500 text-white font-medium shadow-lg shadow-red-500/30 hover:opacity-95 transition-opacity">Start free trial</button>
            <button className="px-5 py-3 rounded-xl border border-white/15 text-white/90 bg-black/40 backdrop-blur hover:text-white hover:border-white/25 transition-colors">Book a demo</button>
          </div>
          <div className="mt-8 grid grid-cols-3 sm:grid-cols-6 gap-4 opacity-90">
            {['99.99% Uptime','SOC2 Ready','Global CDN','Realtime API','Edge Compute','AI Ready'].map((item) => (
              <div key={item} className="text-center text-[10px] sm:text-xs text-white/70 border border-white/10 rounded-lg px-2 py-2 bg-black/30 backdrop-blur">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
