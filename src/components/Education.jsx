import { education } from "../data/portfolio";

function Education() {
  return (
    <section id="education" className="section section--light">
      <div className="section__head">
        <span className="section__tag">EDUCATION</span>
        <h2 className="section__title">Academic Background</h2>
      </div>

      <div className="education-grid">
        {education.map((edu) => (
          <div className="edu-card-clean" key={edu.school}>
            <div className="edu-card-clean__top">
              <div className="edu-card-clean__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div className="edu-card-clean__header">
                <h3 className="edu-card-clean__degree">{edu.degree}</h3>
                <p className="edu-card-clean__school">{edu.school}</p>
              </div>
              <span className="edu-card-clean__period">{edu.period}</span>
            </div>
            {edu.score && (
              <div className="edu-card-clean__footer">
                <span className="edu-card-clean__score">Score / Grade: <strong>{edu.score}</strong></span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
