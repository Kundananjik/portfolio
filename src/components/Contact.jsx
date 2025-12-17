function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

        <p className="text-gray-300 mb-6">
          Email:{" "}
          <a
            href="mailto:kundananjisimukonda@gmail.com"
            className="underline hover:text-white transition"
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
            className="px-6 py-3 bg-white text-black font-medium rounded hover:bg-gray-200 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Kundananjik"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white/30 rounded hover:bg-white/10 transition"
          >
            GitHub
          </a>
        </div>

        {/* Optional Contact Form */}
        <form className="max-w-md mx-auto flex flex-col gap-4 text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="px-4 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-white text-black font-medium rounded hover:bg-gray-200 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
