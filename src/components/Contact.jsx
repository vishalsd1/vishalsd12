import { profile } from "../data/portfolio";

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section__head">
        <span className="section__tag">GET IN TOUCH</span>
        <h2 className="section__title">Let's Connect</h2>
      </div>

      <div className="contact">
        <p className="contact__lead">
          Whether you have a job opportunity, a project to collaborate on, or just want to discuss tech — feel free to reach out.
        </p>

        <div className="contact__grid">
          <a className="contact__card" href={`mailto:${profile.email}`}>
            <span className="contact__label">Email</span>
            <span className="contact__value">{profile.email}</span>
          </a>
          <a className="contact__card" href={`tel:${profile.phone.replace(/\s+/g, "")}`}>
            <span className="contact__label">Phone</span>
            <span className="contact__value">{profile.phone}</span>
          </a>
          <div className="contact__card">
            <span className="contact__label">Location</span>
            <span className="contact__value">{profile.location}</span>
          </div>
        </div>

        <a className="btn btn--primary contact__cta" href={`mailto:${profile.email}`}>
          Send an Email →
        </a>
      </div>
    </section>
  );
}

export default Contact;
