function Projects() {
  const projects = [
    {
      title: "Edu Track Attendance System",
      description:
        "Online student attendance management platform designed to streamline academic workflows. Built with role-based access for admins, lecturers, and students, real-time attendance tracking, and centralized reporting.",
      techStack: "PHP, JavaScript, MySQL, HTML, CSS, Tailwind CSS, GitHub",
      github: "https://github.com/Kundananjik",
      demo: null
    },
    {
      title: "Future Project 1",
      description:
        "Coming Soon!!!",
      techStack: "JavaScript, React, Tailwind CSS, MySQL",
      github: null,
      demo: null
    },
    {
      title: "Future Project 2",
      description:
        "Coming Soon!!!!",
      techStack: "PHP, Laravel, MySQL, Bootstrap",
      github: null,
      demo: null
    }
  ]

  return (
    <section id="projects" className="scroll-mt-24 py-24 px-6 bg-white/5 border-y border-white/10">
      <div className="max-w-6xl mx-auto">
        <p className="section-kicker mb-4">Work</p>
        <h2 className="section-title mb-12">Selected Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const techArray = project.techStack.split(",").map(tech => tech.trim())

            return (
              <div
                key={index}
                className="bg-panel/70 border border-white/10 p-6 rounded-2xl shadow-lift hover:shadow-glow transition transform hover:-translate-y-1"
              >
                <h3 className="font-display text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-slate-300 mb-4">{project.description}</p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {techArray.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 flex-wrap">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
