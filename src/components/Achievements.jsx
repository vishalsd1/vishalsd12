import { achievements } from "../data/portfolio";

function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="section__head">
        <span className="section__kicker">🏆 Achievements</span>
        <h2 className="section__title">Recognition & awards</h2>
      </div>

      <div className="achievements">
        {achievements.map((achievement, index) => (
          <div className="achievement" key={achievement.title}>
            <div className="achievement__index">
              <span className="achievement__medal">
                {index === 0 ? "🥈" : "🏅"}
              </span>
            </div>
            <div className="achievement__content">
              <h3 className="achievement__title">{achievement.title}</h3>
              <p className="achievement__detail">{achievement.detail}</p>
            </div>
            <div className="achievement__accent" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
