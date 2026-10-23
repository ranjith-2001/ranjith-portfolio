
const projects = [
  {
    title: "Hospital Information Management System",
    description:
      "Developed and maintained healthcare modules covering patient registration, billing, laboratory, pharmacy and appointments.",
    technologies:
      "PHP · CodeIgniter 4 · MySQL · JavaScript · Bootstrap"
  },
  {
    title: "Company Website Development",
    description:
      "Developed responsive web interfaces and backend functionality based on business requirements.",
    technologies:
      "PHP · MySQL · HTML5 · CSS3 · Bootstrap"
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Created a personal portfolio to showcase technical skills, professional experience, projects and education.",
    technologies:
      "React.js · JavaScript · HTML5 · CSS3"
  }
];

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section-heading">
        <p>WHAT I HAVE WORKED ON</p>
        <h2>Featured Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span>{project.technologies}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
