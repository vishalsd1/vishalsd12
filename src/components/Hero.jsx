import { useRef } from "react";
import { profile } from "../data/portfolio";

function Hero() {
  const cardRef = useRef(null);
  const initials = profile.shortName
    .split(" ")
    .map((s) => s[0])
    .join("");

  const onMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
  };
  const onMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = "";
  };

  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__blob hero__blob--a" />
        <div className="hero__blob hero__blob--b" />
        <div className="hero__blob hero__blob--c" />
        <div className="hero__grid" />
        <div className="hero__noise" />
      </div>

      <div className="hero__inner">
        <div className="hero__copy">
          <span className="hero__eyebrow">
            <span className="hero__dot" /> Available for opportunities
          </span>
          <h1 className="hero__title">
            Hi, I’m <span className="hero__name">{profile.shortName}</span>.
            <br />
            <span className="hero__role">{profile.role}</span>
          </h1>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__cta">
            <a
              href="#projects"
              className="btn btn--primary"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
            </a>
            <a href={`mailto:${profile.email}`} className="btn btn--ghost">
              Get in Touch
            </a>
          </div>

          <ul className="hero__meta">
            <li>📍 {profile.location}</li>
            <li>✉️ {profile.email}</li>
            <li>📞 {profile.phone}</li>
          </ul>
        </div>

        <div
          ref={cardRef}
          className="hero__card"
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
        >
          <div className="hero__photo-frame">
            <div className="hero__avatar" aria-hidden="true">{initials}</div>
            <img
              className="hero__photo"
              src="/photos/photo1.jpg"
              alt={`${profile.shortName} portrait`}
              loading="eager"
            />
            <div className="hero__photo-glow" aria-hidden="true" />
          </div>
          <div className="hero__chip hero__chip--1">React</div>
          <div className="hero__chip hero__chip--2">Java</div>
          <div className="hero__chip hero__chip--3">IoT</div>
          <div className="hero__chip hero__chip--4">Cloud</div>
        </div>
      </div>

      <a
        href="#about"
        className="hero__scroll"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
        aria-label="Scroll to about"
      >
        <span className="hero__scroll-mouse"><span /></span>
        <span className="hero__scroll-text">Scroll</span>
      </a>
    </section>
  );
}

export default Hero;
