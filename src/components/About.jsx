import { profile } from "../data/portfolio";

function About() {
  return (
    <section id="about" className="section">
      <div className="section__head">
        <span className="section__tag">ABOUT ME</span>
        <h2 className="section__title">Background & What I Do</h2>
      </div>

      <div className="about">
        <div className="about__media">
          <div className="about__photo about__photo--fallback" aria-hidden="true">VD</div>
          <img
            className="about__photo"
            src="/photos/photo2.jpg"
            alt="Vishal Dhangare"
            loading="lazy"
          />
        </div>

        <div className="about__copy">
          <p>
            I’m a final-year Computer Science Engineering student passionate about
            building systems end-to-end — from designing hardware circuits on Arduino
            to creating responsive React web applications that control and monitor them.
          </p>
          <p>
            My core focus is full-stack web development and IoT architectures. I specialize
            in React, modern JavaScript, Java, backend APIs, and connected sensor systems.
            I care about clean code, intuitive user experiences, and solving real-world problems.
          </p>
          <p>
            When I'm not coding, I participate in technical hackathons, explore emerging cloud
            technologies, and build functional open-source prototypes.
          </p>

          <div className="about__stats">
            <div className="stat">
              <span className="stat__num">4+</span>
              <span className="stat__label">Projects Shipped</span>
            </div>
            <div className="stat">
              <span className="stat__num">7</span>
              <span className="stat__label">Certifications</span>
            </div>
            <div className="stat">
              <span className="stat__num">1st</span>
              <span className="stat__label">Hackathon Winner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
