function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        Ranjith Kumar<span>.</span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>

       <a
  href="/Ranjith.pdf"
  className="nav-resume-btn"
  download="Ranjith_Kumar_Resume.pdf"
>
  <span className="resume-icon">
    <i className="bi bi-file-earmark-person-fill"></i>
  </span>

  <span className="resume-text">
    <strong>My Resume</strong>
    <small>Download CV</small>
  </span>

  <i className="bi bi-download resume-download-icon"></i>
</a>
      </div>
    </nav>
  );
}

export default Navbar;