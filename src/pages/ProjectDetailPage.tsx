import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { projects } from "../data/portfolio";

function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <section className="page-panel">
      <Link to="/projects" className="back-link">
        <ArrowLeft size={18} />
        <span>Zurueck zur Projektuebersicht</span>
      </Link>

      <p className="section-eyebrow">Projekt im Detail</p>
      <h1>{project.title}</h1>
      <p className="section-lead">{project.overview}</p>

      <div className="detail-hero-grid">
        <article className="detail-card">
          <div className="detail-card__header">
            <div>
              <h3>Technologien</h3>
              <p className="detail-card__role">{project.period}</p>
            </div>
          </div>
          {project.technologyAssets?.length ? (
            <div className="project-tech-logos">
              {project.technologyAssets.map((asset) => (
                <div key={asset.name} className="project-tech-logos__item">
                  <img src={asset.src} alt={asset.name} className="project-tech-logos__image" />
                </div>
              ))}
            </div>
          ) : null}
          <div className="skill-chip-grid">
            {project.stack.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </article>

        <article className="detail-card">
          <div className="detail-card__header">
            <div>
              <h3>Ergebnis</h3>
              <p className="detail-card__role">Kurzfazit</p>
            </div>
          </div>
          <p>{project.outcome}</p>
          <a href={project.link} className="detail-card__link">
            <span>Externer Projektlink</span>
            <ExternalLink size={18} />
          </a>
        </article>
      </div>

      <div className="stacked-cards">
        <article className="detail-card">
          <h3>Was ich bei {project.title} gemacht habe</h3>
          <ul className="detail-list">
            {project.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="detail-card">
          <h3>Wichtige Punkte</h3>
          <ul className="detail-list">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </article>

        {project.media ? (
          <article className="detail-card">
            <p className="section-eyebrow">Screenshots etc.</p>
            <h3>Einblick in das Projekt</h3>
            <p className="detail-card__role">Überarbeitete UI</p>
            <div className="project-showcase">
              {project.media.kind === "video" ? (
                <video className="project-showcase__media" controls muted playsInline preload="metadata">
                  <source src={project.media.src} type="video/mp4" />
                  Dein Browser unterstuetzt dieses Video nicht.
                </video>
              ) : (
                <img
                  src={project.media.src}
                  alt={project.media.name}
                  className="project-showcase__media"
                />
              )}
            </div>
          </article>
        ) : null}
      </div>
    </section>
  );
}

export default ProjectDetailPage;
