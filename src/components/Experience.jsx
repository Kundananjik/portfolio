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
    <section id="experience" className="scroll-mt-24 py-24 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-black/30 border border-white/10 p-6 rounded shadow hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-2">{exp.company}</h3>
              <p className="text-gray-300 mb-2">{exp.role} | {exp.duration}</p>

              {/* Responsibilities */}
              <ul className="list-disc list-inside text-gray-400 text-sm mb-4">
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
