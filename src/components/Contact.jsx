
function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="section-heading">
        <p>LET'S CONNECT</p>
        <h2>Contact Me</h2>
      </div>

      <p>
        Open to software development opportunities and
        exciting projects.
      </p>

      <div className="contact-details">
        <p>
          <i className="bi bi-envelope"></i>
          <a href="mailto:kandukuriranjithkumar2001@gmail.com">
            kandukuriranjithkumar2001@gmail.com
          </a>
        </p>

        <p>
          <i className="bi bi-telephone"></i>
          <a href="tel:6305388297">6305388297</a>
        </p>

        <p>
          <i className="bi bi-geo-alt"></i>
          Chennai, Tamil Nadu, India
        </p>

        <p>
          <i className="bi bi-linkedin"></i>
          <a
            href="https://www.linkedin.com/in/kandukuri-ranjith-kumar-503395224"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn Profile
          </a>
        </p>
      </div>

      <a
        href="mailto:kandukuriranjithkumar2001@gmail.com?subject=Job%20Opportunity"
        className="btn-primary"
      >
        <i className="bi bi-send"></i>
        Send Me an Email
      </a>
    </section>
  );
}

export default Contact;
