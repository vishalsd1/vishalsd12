import { certifications } from "../data/portfolio";

function Certifications() {
  return (
    <section id="certifications" className="section section--light">
      <div className="section__head">
        <span className="section__kicker">✓ Certifications</span>
        <h2 className="section__title">Verified expertise</h2>
      </div>

      <div className="certifications">
        {certifications.map((cert, index) => (
          <div className="cert-card" key={cert}>
            <div className="cert-card__badge">
              <span className="cert-card__number">{index + 1}</span>
            </div>
            <p className="cert-card__text">{cert}</p>
            <div className="cert-card__accent" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
