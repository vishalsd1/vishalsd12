import { projects } from "../data/portfolio";

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section__head">
        <span className="section__kicker">03 — Projects</span>
        <h2 className="section__title">Selected work</h2>
      </div>

      <div className="projects">
        {projects.map((p, i) => (
          <article className="project" key={p.title}>
            <div className="project__index">{String(i + 1).padStart(2, "0")}</div>
            <div className="project__body">
              <h3 className="project__title">{p.title}</h3>
              <ul className="project__tags">
                {p.tags.map((t) => (
                  <li key={t} className="chip chip--ghost">
                    {t}
                  </li>
                ))}
              </ul>
              {p.highlight && (
                <div className="project__highlight">{p.highlight}</div>
              )}
              <ul className="project__points">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
