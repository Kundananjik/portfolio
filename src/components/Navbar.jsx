import { useState } from "react"

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-xl font-bold text-white">
          Kundananji Simukonda
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-sm text-gray-300">
          <li>
            <a href="#about" className="hover:text-white">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-white">
              Experience
            </a>
          </li>
          <li>
            <a href="#certifications" className="hover:text-white">
              Certifications
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white">
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
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-4">
          <ul className="flex flex-col gap-4 text-gray-300">
            <li>
              <a
                href="#about"
                onClick={() => setOpen(false)}
                className="hover:text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => setOpen(false)}
                className="hover:text-white"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={() => setOpen(false)}
                className="hover:text-white"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#certifications"
                onClick={() => setOpen(false)}
                className="hover:text-white"
              >
                Certifications
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="hover:text-white"
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
