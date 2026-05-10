import { education } from "../data/portfolio";

function Education() {
  return (
    <section id="education" className="section section--light">
      <div className="section__head">
        <span className="section__kicker">📚 Education</span>
        <h2 className="section__title">Learning journey</h2>
      </div>

      <div className="education">
        {education.map((edu, index) => (
          <div className="edu-card" key={edu.school}>
            <div className="edu-card__timeline">
              <div className="edu-card__dot" />
              {index !== education.length - 1 && <div className="edu-card__line" />}
            </div>
            <div className="edu-card__content">
              <div className="edu-card__header">
                <h3 className="edu-card__school">{edu.school}</h3>
                <span className="edu-card__period">{edu.period}</span>
              </div>
              <p className="edu-card__degree">{edu.degree}</p>
              {edu.score && <p className="edu-card__score">Score: {edu.score}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
