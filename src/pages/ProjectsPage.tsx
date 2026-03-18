import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/portfolio";

function ProjectsPage() {
  return (
    <section className="page-panel">
      <p className="section-eyebrow">Projektarchiv</p>
      <h1>Projekte mit mehr Informationen und Kontext</h1>
      <p className="section-lead">
        Diese Seite ist fuer ausfuehrlichere Projektbeschreibungen gedacht. Hier kannst du spaeter
        Screenshots, Links, Tech-Entscheidungen und Ergebnisse ergaenzen.
      </p>

      <div className="stacked-cards">
        {projects.map((project) => (
          <article key={project.title} className="detail-card">
            <div className="detail-card__header">
              <div>
                <h3>{project.title}</h3>
                <p className="detail-card__role">{project.stack.join(" | ")}</p>
              </div>
              <span className="detail-card__badge">{project.period}</span>
            </div>
            <p>{project.description}</p>
            <ul className="detail-list">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <Link to={`/projects/${project.slug}`} className="detail-card__link">
              <span>Mehr Informationen</span>
              <ArrowRight size={18} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;
