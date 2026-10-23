
const education = [
  {
    degree: "MBA – Business Administration",
    specialization: "Business Analytics",
    college: "SRM Institute of Science and Technology, Chennai",
    duration: "2023 – 2025",
    score: "CGPA: 9.3/10"
  },
  {
    degree: "B.E. – Computer Science and Engineering",
    specialization: "",
    college: "Jeppiaar Institute of Technology, Chennai",
    duration: "2019 – 2023",
    score: "CGPA: 8.44/10"
  }
];

function Education() {
  return (
    <section id="education" className="section education">
      <div className="section-heading">
        <p>MY ACADEMIC BACKGROUND</p>
        <h2>Education</h2>
      </div>

      <div className="education-grid">
        {education.map((item) => (
          <article className="education-card" key={item.degree}>
            <div className="education-icon">
              <i className="bi bi-mortarboard-fill"></i>
            </div>

            <h3>{item.degree}</h3>

            {item.specialization && <p>{item.specialization}</p>}

            <p>{item.college}</p>
            <p>{item.duration}</p>

            <strong className="education-score">
              {item.score}
            </strong>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;
