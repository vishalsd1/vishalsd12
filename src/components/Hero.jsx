import { profile } from "../data/portfolio";

function Hero() {
  const initials = profile.shortName
    .split(" ")
    .map((s) => s[0])
    .join("");

  return (
    <section id="home" className="hero">
      <div className="hero__inner">
        <div className="hero__copy">
          <div className="hero__eyebrow">
            <span className="hero__dot" /> Open to Opportunities
          </div>

          <h1 className="hero__title">
            Hi, I’m <span className="hero__name-clean">{profile.shortName}</span>
          </h1>

          <p className="hero__role">{profile.role}</p>

          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__cta">
            <a
              href="#projects"
              className="btn btn--primary"
              onClick={(e) => {
                e.preventDefault();
                if (window.lenis) {
                  window.lenis.scrollTo("#projects", { offset: -70, duration: 1.2 });
                } else {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              View Projects
            </a>
            <a href={`mailto:${profile.email}`} className="btn btn--ghost">
              Get in Touch
            </a>
          </div>

          <div className="hero__meta">
            <span className="hero__meta-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {profile.location}
            </span>
            <a href={`mailto:${profile.email}`} className="hero__meta-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="hero__meta-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {profile.phone}
            </a>
          </div>
        </div>

        <div className="hero__profile">
          <div className="hero__photo-container">
            <div className="hero__avatar" aria-hidden="true">{initials}</div>
            <img
              className="hero__photo"
              src="/photos/photo1.jpg"
              alt={`${profile.shortName} portrait`}
              loading="eager"
            />
          </div>
          <div className="hero__profile-caption">
            <span className="hero__profile-status" />
            <span>Based in Maharashtra · Full-Stack & IoT</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
