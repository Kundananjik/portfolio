function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* About Me Text */}
        <div>
          <p className="section-kicker mb-4">About</p>
          <h2 className="section-title mb-6">Building reliable systems with real-world value</h2>

          <p className="text-slate-300 mb-4 leading-relaxed">
            I am a motivated and tech-savvy Bachelor of Science in Information, Technology and Communication with hands-on experience building real-world software solutions, providing IT support, and managing digital systems in institutional environments. My work focuses on turning manual processes into efficient digital solutions.
          </p>

          <p className="text-slate-300 mb-4 leading-relaxed">
            I have developed and deployed systems such as the Edu Track Attendance System, an online platform used to streamline academic operations. I am comfortable working across the full stack, managing databases, and supporting users in production environments.
          </p>

          <p className="text-slate-300 mb-4 leading-relaxed">
            I have gained practical exposure to public sector ICT operations during my internships at Nakonde Town Council, providing technical support, system setup, troubleshooting, and assisting staff with digital workflows and data management.
          </p>

          <p className="text-slate-300 mb-4 leading-relaxed">
            My approach emphasizes clean architecture, reliability, and continuous improvement. I am eager to contribute to teams that solve meaningful problems through technology, leveraging my skills in web development, IT support, networking, cybersecurity, and data analytics.
          </p>
        </div>

        {/* Core Skills Box */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lift backdrop-blur">
          <h3 className="font-display text-xl font-semibold mb-6">Core Skills</h3>

          <ul className="grid grid-cols-2 gap-3 text-slate-300 text-sm">
            <li>JavaScript</li>
            <li>React</li>
            <li>PHP</li>
            <li>MySQL</li>
            <li>HTML & CSS</li>
            <li>Tailwind CSS</li>
            <li>IT Support</li>
            <li>Networking Basics</li>
            <li>Cybersecurity Fundamentals</li>
            <li>Data Analytics Essentials</li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default About
