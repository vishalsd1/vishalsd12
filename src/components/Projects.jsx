import { projects } from "../data/portfolio";

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section__head">
        <span className="section__tag">PORTFOLIO</span>
        <h2 className="section__title">Featured Projects</h2>
      </div>

      <div className="projects">
        {projects.map((p) => (
          <article className="project" key={p.title}>
            <div className="project__body">
              <div className="project__header">
                <h3 className="project__title">{p.title}</h3>
                {p.highlight && (
                  <span className="project__highlight">{p.highlight}</span>
                )}
              </div>
              <ul className="project__tags">
                {p.tags.map((t) => (
                  <li key={t} className="chip chip--ghost">
                    {t}
                  </li>
                ))}
              </ul>
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
