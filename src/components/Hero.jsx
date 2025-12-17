function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-black text-white">
      <div className="max-w-4xl text-center">

        {/* Subtitle */}
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
          Full Stack Developer & IT Support
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Building practical web systems that solve real problems
        </h1>

        {/* Description */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          I design and develop reliable web applications with a strong focus on <span className="text-white font-semibold">usability</span>, <span className="text-white font-semibold">security</span>, and <span className="text-white font-semibold">real-world impact</span>. 
          From academic systems to business tools, I turn requirements into working solutions.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-black font-medium rounded hover:bg-gray-200 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-white/30 rounded hover:bg-white/10 transition"
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  )
}

export default Hero
