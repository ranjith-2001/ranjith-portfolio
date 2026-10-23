
const experience = [
  {
    company: "Karemind iScripts Private Limited",
    role: "Full Stack Developer",
    duration: "June 2024 – Present",
    details: [
      "Develop and maintain HIMS modules using PHP, CodeIgniter 4 and MySQL.",
      "Implement CRUD operations, validations, business logic and REST APIs.",
      "Build responsive interfaces using JavaScript, HTML, CSS and Bootstrap.",
      "Test APIs using Postman, debug issues and optimize database queries.",
      "Coordinate with stakeholders on client-specific requirements.",
      "Support deployments and implementations across India and the UAE."
    ]
  },
  {
    company: "Why Global Services",
    role: "Full Stack Developer",
    duration: "September 2023 – February 2024",
    details: [
      "Developed web application features using PHP and MySQL.",
      "Created responsive interfaces using HTML, CSS, JavaScript and Bootstrap.",
      "Implemented backend CRUD functionality and API integrations.",
      "Performed debugging, testing and requirement-based improvements.",
      "Worked with the development team and maintained project documentation."
    ]
  }
];

function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section-heading">
        <p>MY PROFESSIONAL JOURNEY</p>
        <h2>Work Experience</h2>
      </div>

      <div className="experience-list">
        {experience.map((job) => (
          <article className="experience-card" key={job.company}>
            <h3>{job.role}</h3>
            <h4>{job.company}</h4>
            <p className="duration">{job.duration}</p>

            <ul>
              {job.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
