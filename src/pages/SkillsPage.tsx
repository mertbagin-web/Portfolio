import TechnologyMarquee from "../components/TechnologyMarquee";
import { skillGroups } from "../data/portfolio";

function SkillsPage() {
  return (
    <section className="page-panel">
      <p className="section-eyebrow">Technologien</p>
      <h1>Skill-Stack und eingesetzte Werkzeuge</h1>
      <p className="section-lead">
        Diese Seite zeigt deine Schwerpunkte geordnet nach Bereichen. Sie eignet sich gut, um spaeter
        Zertifikate, Tools oder konkrete Erfahrungslevel zu ergaenzen.
      </p>

      <TechnologyMarquee />

      <div className="skill-groups">
        {skillGroups.map((group) => (
          <article key={group.title} className="detail-card">
            <h3>{group.title}</h3>
            <div className="skill-chip-grid">
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SkillsPage;
