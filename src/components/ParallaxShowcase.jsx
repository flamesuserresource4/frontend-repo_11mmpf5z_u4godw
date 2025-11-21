import { useEffect, useRef } from 'react';

function useParallax(multiplier = 0.2) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const y = rect.top * multiplier;
      el.style.transform = `translate3d(0, ${y}px, 0)`;
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [multiplier]);
  return ref;
}

function ParallaxCard({ depth = 0.15, children, className = '' }) {
  const ref = useParallax(depth);
  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}

function ParallaxShowcase() {
  return (
    <section id="showcase" className="relative py-28 bg-[#0a0a0b]">
      {/* backdrop visuals */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-x-20 -top-20 h-72 blur-3xl opacity-40 bg-[radial-gradient(70%_60%_at_30%_20%,rgba(255,90,31,0.35)_0%,transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-72 blur-3xl opacity-30 bg-[radial-gradient(60%_50%_at_70%_70%,rgba(255,140,31,0.35)_0%,transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Parallax Layers</h2>
          <p className="mt-3 text-white/70">Multi-depth tiles glide as you scroll for a cinematic effect.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ParallaxCard depth={0.05} className="">
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-orange-500/10 to-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <img src="https://images.unsplash.com/photo-1710910510424-3743397ef4b9?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHcmVhdCUyMFdhbGwlMjBhZXJpYWx8ZW58MHwwfHx8MTc2MzcwNTc1NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Great Wall aerial" className="h-56 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-white font-semibold">Scale without limits</h3>
                <p className="text-white/70 text-sm mt-1">Elastic compute with zero cold starts.</p>
              </div>
            </div>
          </ParallaxCard>

          <ParallaxCard depth={0.12}>
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-orange-500/10 to-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <img src="https://images.unsplash.com/photo-1650189222237-c0f4edd4a566?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHcmVhdCUyMFdhbGwlMjBzdW5zZXR8ZW58MHwwfHx8MTc2MzcwNTc1NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Great Wall sunset" className="h-56 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-white font-semibold">Defense-grade security</h3>
                <p className="text-white/70 text-sm mt-1">From edge to core, fully encrypted.</p>
              </div>
            </div>
          </ParallaxCard>

          <ParallaxCard depth={0.2}>
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-orange-500/10 to-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <img src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=1600&auto=format&fit=crop" alt="Great Wall details" className="h-56 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-white font-semibold">Lightning performance</h3>
                <p className="text-white/70 text-sm mt-1">Global latency under 50ms.</p>
              </div>
            </div>
          </ParallaxCard>
        </div>
      </div>
    </section>
  );
}

export default ParallaxShowcase;
