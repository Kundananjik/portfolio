function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="section-kicker mb-4">Contact</p>
        <h2 className="section-title mb-6">Let’s build something useful</h2>

        <p className="text-slate-300 mb-6">
          Email:{" "}
          <a
            href="mailto:kundananjisimukonda@gmail.com"
            className="underline underline-offset-4 hover:text-white transition"
          >
            kundananjisimukonda@gmail.com
          </a>
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 flex-wrap mb-8">
          <a
            href="https://www.linkedin.com/in/kundananjisimukonda"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Kundananjik"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            GitHub
          </a>
        </div>

        {/* Optional Contact Form */}
        <form className="max-w-md mx-auto flex flex-col gap-4 text-left bg-panel/70 border border-white/10 rounded-2xl p-6 shadow-lift">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-2 bg-white/5 border border-white/15 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-300/50 focus:border-cyan-300/50 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 bg-white/5 border border-white/15 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-300/50 focus:border-cyan-300/50 transition"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="px-4 py-2 bg-white/5 border border-white/15 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-300/50 focus:border-cyan-300/50 transition"
          />
          <button
            type="submit"
            className="btn-primary"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
