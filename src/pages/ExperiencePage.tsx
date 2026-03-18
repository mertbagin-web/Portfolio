import { ArrowUpRight } from "lucide-react";
import { experiences } from "../data/portfolio";

function ExperiencePage() {
  return (
    <section className="page-panel">
      <p className="section-eyebrow">Praktische Erfahrung</p>
      <h1>Praxis, Studium und eigene Entwicklung im Ueberblick</h1>
      <p className="section-lead">
        Hier zeigst du, woran du praktisch gearbeitet hast, welche Themen du vertieft hast und
        wie du Verantwortung in Projekten uebernimmst.
      </p>

      <div className="stacked-cards">
        {experiences.map((experience) => (
          <article key={`${experience.company}-${experience.period}`} className="detail-card">
            <div className="detail-card__header">
              <div>
                <h3>{experience.company}</h3>
                <p className="detail-card__role">{experience.role}</p>
              </div>
              <span className="detail-card__badge">{experience.period}</span>
            </div>
            <p>{experience.description}</p>
            <ul className="detail-list">
              {experience.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className="detail-card__footer">
              <span>Praxisnaher Fokus</span>
              <ArrowUpRight size={20} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ExperiencePage;
