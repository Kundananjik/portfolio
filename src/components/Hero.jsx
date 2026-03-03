function Hero() {
  return (
    <section className="min-h-[92vh] flex items-center justify-center px-6">
      <div className="max-w-5xl text-center">

        {/* Subtitle */}
        <p className="section-kicker mb-5 animate-fade-up">
          Full Stack Developer & IT Support
        </p>

        {/* Main Heading */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6 animate-fade-up [animation-delay:120ms]">
          Building{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-200 to-amber-200">
            practical web systems
          </span>{" "}
          that solve real problems
        </h1>

        {/* Description */}
        <p className="text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up [animation-delay:240ms]">
          I design and develop reliable web applications with a strong focus on{" "}
          <span className="text-white font-semibold">usability</span>,{" "}
          <span className="text-white font-semibold">security</span>, and{" "}
          <span className="text-white font-semibold">real-world impact</span>.
          From academic systems to business tools, I turn requirements into working solutions.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex justify-center gap-4 flex-wrap animate-fade-up [animation-delay:360ms]">
          <a
            href="#projects"
            className="btn-primary"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="btn-secondary"
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  )
}

export default Hero
