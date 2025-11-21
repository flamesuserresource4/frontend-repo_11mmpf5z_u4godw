import { Menu } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-black/30 border border-white/10 rounded-2xl px-5 py-3 flex items-center justify-between shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-red-500 via-orange-500 to-rose-500 shadow ring-1 ring-white/20" />
            <span className="font-semibold tracking-tight text-white">GreatWall Cloud</span>
          </div>
          <nav className="hidden md:flex items-center gap-7 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#showcase" className="hover:text-white transition-colors">Showcase</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex px-4 py-2 text-sm rounded-xl border border-white/15 text-white/90 hover:text-white hover:border-white/25 transition-colors">Sign in</button>
            <button className="px-4 py-2 text-sm rounded-xl bg-gradient-to-r from-red-500 via-orange-500 to-rose-500 text-white shadow hover:opacity-95 transition-opacity">Start free</button>
            <button className="md:hidden text-white/80"><Menu size={22} /></button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
