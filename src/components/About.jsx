import { education } from "../data/portfolio";

function About() {
  return (
    <section id="about" className="section">
      <div className="section__head">
        <span className="section__kicker">01 — About</span>
        <h2 className="section__title">A quick intro</h2>
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
          <div className="about__photo-ring" aria-hidden="true" />
          <div className="about__photo-badge">
            <span>Open to work</span>
          </div>
        </div>

        <div className="about__copy">
          <p>
            I’m a final-year Computer Science Engineering student who likes
            shipping things end-to-end — from soldering an Arduino board to
            wiring up the React dashboard that reads from it. I’m happiest at
            the intersection of hardware, web, and clean UX.
          </p>
          <p>
            Lately I’ve been working with React, React Native, Java/JDBC, and
            cloud platforms. I’m looking for opportunities where I can keep
            learning, write maintainable code, and ship features that real
            users actually feel.
          </p>

          <div className="about__stats">
            <div className="stat">
              <span className="stat__num">4+</span>
              <span className="stat__label">Projects shipped</span>
            </div>
            <div className="stat">
              <span className="stat__num">7</span>
              <span className="stat__label">Certifications</span>
            </div>
            <div className="stat">
              <span className="stat__num">1st</span>
              <span className="stat__label">Hackathon podium</span>
            </div>
          </div>
        </div>

        <div className="about__edu">
          <h3 className="about__edu-title">Education</h3>
          <ol className="timeline">
            {education.map((e) => (
              <li key={e.school} className="timeline__item">
                <div className="timeline__dot" />
                <div className="timeline__body">
                  <div className="timeline__period">{e.period}</div>
                  <div className="timeline__school">{e.school}</div>
                  <div className="timeline__degree">{e.degree}</div>
                  {e.score && <div className="timeline__score">{e.score}</div>}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default About;
