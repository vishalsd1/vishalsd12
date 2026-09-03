import { experience } from "../data/portfolio";

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section__head">
        <span className="section__tag">EXPERIENCE</span>
        <h2 className="section__title">Work & Internships</h2>
      </div>

      <div className="exp-clean">
        {experience.map((x) => (
          <div className="exp__card" key={x.role + x.company}>
            <div className="exp__row">
              <div>
                <h3 className="exp__role">{x.role}</h3>
                <div className="exp__company">{x.company}</div>
              </div>
              <span className="exp__period">{x.period}</span>
            </div>
            <ul className="exp__points">
              {x.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
