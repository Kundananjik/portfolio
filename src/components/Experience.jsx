function Experience() {
  const experiences = [
    {
      company: "Nakonde Town Council",
      role: "IT Intern",
      duration: "Jan-Apr 2024 & Dec 2024-Mar 2025",
      responsibilities: [
        "Provided technical support for office computers and printers",
        "Assisted in network setup, system configuration, and troubleshooting",
        "Supported staff with digital workflows and data management",
        "Gained practical exposure to public sector ICT operations"
      ],
      skills: ["IT Support", "Networking", "System Troubleshooting", "Digital Workflows"]
    }
  ]

  return (
    <section id="experience" className="scroll-mt-24 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-kicker mb-4">Experience</p>
        <h2 className="section-title mb-12">Hands-on, production-grade work</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-panel/70 border border-white/10 p-6 rounded-2xl shadow-lift hover:shadow-glow transition transform hover:-translate-y-1"
            >
              <h3 className="font-display text-xl font-semibold mb-2">{exp.company}</h3>
              <p className="text-slate-300 mb-2">{exp.role} | {exp.duration}</p>

              {/* Responsibilities */}
              <ul className="list-disc list-inside text-slate-400 text-sm mb-4">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              {/* Skills / Tech badges */}
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full border border-white/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
