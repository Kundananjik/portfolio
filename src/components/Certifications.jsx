function Certifications() {
  const certifications = [
    "Introduction to Cybersecurity",
    "Introduction to IoT",
    "Computer Hardware Basics",
    "Introduction to Modern AI",
    "Introduction to Data Science",
    "Networking Basics",
    "Networking Devices and Initial Configuration",
    "Operating Systems Basics",
    "Digital Awareness",
    "Create Digital Content, Communicate & Collaborate Online",
    "Digital Safety and Security Awareness",
    "Network Addressing and Basic Troubleshooting",
    "Network Support and Security",
    "Network Technician Career Path",
    "Introduction to Packet Tracer",
    "Data Analytics Essentials"
  ]

  return (
    <section id="certifications" className="scroll-mt-24 py-24 px-6 bg-white/5 border-y border-white/10">
      <div className="max-w-6xl mx-auto">
        <p className="section-kicker mb-4">Credentials</p>
        <h2 className="section-title mb-12">Certifications</h2>

        <div className="flex flex-wrap gap-3">
          {certifications.map((cert, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium bg-panel/70 text-white rounded-full border border-white/20"
            >
              {cert}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
