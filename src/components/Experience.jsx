import { experience, certifications, achievements } from "../data/portfolio";

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section__head">
        <span className="section__kicker">04 — Experience</span>
        <h2 className="section__title">Work, learning & wins</h2>
      </div>

      <div className="exp">
        <div className="exp__main">
          <h3 className="exp__heading">Professional Experience</h3>
          {experience.map((x) => (
            <div className="exp__card" key={x.role + x.company}>
              <div className="exp__row">
                <div>
                  <div className="exp__role">{x.role}</div>
                  <div className="exp__company">{x.company}</div>
                </div>
                <div className="exp__period">{x.period}</div>
              </div>
              <ul className="exp__points">
                {x.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}

          <h3 className="exp__heading">Achievements</h3>
          <div className="exp__awards">
            {achievements.map((a) => (
              <div className="award" key={a.title}>
                <div className="award__icon" aria-hidden="true">★</div>
                <div>
                  <div className="award__title">{a.title}</div>
                  <div className="award__detail">{a.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="exp__side">
          <h3 className="exp__heading">Certifications</h3>
          <ul className="certs">
            {certifications.map((c) => (
              <li className="certs__item" key={c}>
                <span className="certs__check" aria-hidden="true">✓</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

export default Experience;
