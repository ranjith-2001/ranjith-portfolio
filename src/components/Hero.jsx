
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">HELLO, I'M</p>

        <h1>Kandukuri Ranjith Kumar</h1>
        <h2>Full Stack Developer</h2>

        <p>
          Full Stack Developer experienced in PHP, CodeIgniter 4,
          MySQL, JavaScript and React.js. I build responsive web
          applications and healthcare management systems with
          a focus on performance and usability.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View My Work
          </a>

          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <h3>~3</h3>
            <p>Years Experience</p>
          </div>

          <div>
            <h3>18+</h3>
            <p>Skills & Tools</p>
          </div>

          <div>
            <h3>2</h3>
            <p>Degrees</p>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src="/profile2.jpeg" alt="Ranjith Kumar" />
      </div>
    </section>
  );
}

export default Hero;
