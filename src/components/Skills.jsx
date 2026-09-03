import { skills } from "../data/portfolio";

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section__head">
        <span className="section__tag">SKILLS & EXPERTISE</span>
        <h2 className="section__title">Technologies I Work With</h2>
      </div>

      <div className="skills">
        {skills.map((g) => (
          <div className="skills__group" key={g.group}>
            <h3 className="skills__group-title">{g.group}</h3>
            <ul className="skills__chips">
              {g.items.map((s) => (
                <li key={s} className="chip">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
