function Feature({ title, desc }) {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden">
      <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-gradient-to-tr from-red-500/20 via-orange-500/10 to-rose-500/20 blur-2xl" />
      <h3 className="text-white font-semibold">{title}</h3>
      <p className="text-white/70 text-sm mt-2">{desc}</p>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-black via-[#0b0b0c] to-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(255,90,31,0.15)_0%,transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs text-white/70">Why GreatWall Cloud</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">Everything you need to scale</h2>
          <p className="mt-3 text-white/70">Built for teams that demand resilience, speed and control.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Feature title="Zero-config deploys" desc="Push to main, ship to edge. No YAML required." />
          <Feature title="Observability" desc="End-to-end traces and live metrics out of the box." />
          <Feature title="AI toolchain" desc="Server-side adapters for your favorite models." />
          <Feature title="Compliance" desc="SOC2, ISO27001 and GDPR ready from day one." />
          <Feature title="Global KV & Queues" desc="Ultra-fast data primitives with geo-replication." />
          <Feature title="Billing that scales" desc="Transparent pricing with usage caps and alerts." />
        </div>
      </div>
    </section>
  );
}

export default Features;
