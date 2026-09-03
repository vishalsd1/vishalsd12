import { certifications } from "../data/portfolio";

function Certifications() {
  return (
    <section id="certifications" className="section section--light">
      <div className="section__head">
        <span className="section__tag">CREDENTIALS</span>
        <h2 className="section__title">Certifications & Training</h2>
      </div>

      <div className="certifications">
        {certifications.map((cert) => (
          <div className="cert-card" key={cert}>
            <div className="cert-card__badge" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
              </svg>
            </div>
            <p className="cert-card__text">{cert}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
