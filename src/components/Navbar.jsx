import { useState } from "react"

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-ink/70 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_-24px_rgba(0,0,0,0.8)]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-xl font-display font-semibold tracking-tight text-white">
          <span className="text-white">Kundananji</span>{" "}
          <span className="text-cyan-200/90">Simukonda</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-sm text-slate-300">
          <li>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-white transition">
              Experience
            </a>
          </li>
          <li>
            <a href="#certifications" className="hover:text-white transition">
              Certifications
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-ink/95 border-t border-white/10 px-6 py-4">
          <ul className="flex flex-col gap-4 text-slate-300">
            <li>
              <a
                href="#about"
                onClick={() => setOpen(false)}
                className="hover:text-white transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => setOpen(false)}
                className="hover:text-white transition"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={() => setOpen(false)}
                className="hover:text-white transition"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#certifications"
                onClick={() => setOpen(false)}
                className="hover:text-white transition"
              >
                Certifications
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="hover:text-white transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
