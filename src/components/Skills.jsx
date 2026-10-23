const skills = [
  { name: "PHP", icon: "devicon-php-plain", color: "#777BB4" },
  { name: "CodeIgniter", icon: "devicon-codeigniter-plain", color: "#EF4223" },
  { name: "React.js", icon: "devicon-react-original", color: "#61DAFB" },
  { name: "JavaScript", icon: "devicon-javascript-plain", color: "#F7DF1E" },
  { name: "MySQL", icon: "devicon-mysql-original", color: "#4479A1" },
  { name: "HTML5", icon: "devicon-html5-plain", color: "#E34F26" },
  { name: "CSS3", icon: "devicon-css3-plain", color: "#1572B6" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain", color: "#7952B3" },
  { name: "jQuery", icon: "devicon-jquery-plain", color: "#0769AD" },
  { name: "Git", icon: "devicon-git-plain", color: "#F05032" },
  { name: "GitHub", icon: "devicon-github-original", color: "#FFFFFF" },
  { name: "VS Code", icon: "devicon-vscode-plain", color: "#007ACC" },
  { name: "Figma", icon: "devicon-figma-plain", color: "#F24E1E" },
  { name: "Postman", icon: "devicon-postman-plain", color: "#FF6C37" },
  { name: "JSON", icon: "devicon-json-plain", color: "#F0DB4F" },
 { name: "phpMyAdmin", icon: "devicon-mysql-original", color: "#6C78AF" }
];

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section-heading">
        <p>WHAT I WORK WITH</p>
        <h2>
          My <span className="gradient-text">Tech Stack</span>
        </h2>
        <div className="heading-line"></div>
        <p className="skills-description">
          Technologies and tools I use to build modern, responsive
          and reliable web applications.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div
              className="skill-icon-box"
              style={{ "--icon-color": skill.color }}
            >
              <i className={skill.icon}></i>
            </div>

            <h3>{skill.name}</h3>
            <span className="skill-status">
              <span className="status-dot"></span>
              Technical Skill
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;