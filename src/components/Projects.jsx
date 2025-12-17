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
    <section id="projects" className="scroll-mt-24 py-24 px-6 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const techArray = project.techStack.split(",").map(tech => tech.trim())

            return (
              <div
                key={index}
                className="bg-black/30 border border-white/10 p-6 rounded shadow hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

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
                      className="px-4 py-2 bg-white text-black font-medium rounded hover:bg-gray-200 transition"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-white/30 rounded hover:bg-white/10 transition"
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
