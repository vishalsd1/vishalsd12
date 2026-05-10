import { useEffect, useState } from "react";
import { profile } from "../data/portfolio";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = ["home", ...links.map((l) => l.id)];
      const y = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= y) {
          setActive(sections[i]);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <a className="nav__brand" href="#home" onClick={(e) => go(e, "home")}>
          <span className="nav__brand-mark">VD</span>
          <span className="nav__brand-text">{profile.shortName}</span>
        </a>

        <button
          className={`nav__toggle ${open ? "is-open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>

        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? "is-active" : ""}
              onClick={(e) => go(e, l.id)}
            >
              {l.label}
            </a>
          ))}
          <a
            className="nav__cta"
            href={`mailto:${profile.email}`}
            onClick={() => setOpen(false)}
          >
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
