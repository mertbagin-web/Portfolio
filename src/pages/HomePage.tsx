import { Link } from "react-router-dom";
import TechnologyMarquee from "../components/TechnologyMarquee";
import { profile, projects, stats } from "../data/portfolio";

function HomePage() {
  const featuredProject = projects[0];

  return (
    <section className="page-panel hero-panel">
      <p className="hero__tag">Portfolio Starter</p>
      <h1>{profile.name}</h1>
      <h2>{profile.role}</h2>
      <p className="hero__meta">{profile.location}</p>
      <p className="hero__about">{profile.about}</p>

      <div className="hero__stats">
        {stats.map((stat) => (
          <article key={stat.label} className="hero__stat-card">
            <strong className="hero__stat-value">{stat.value}</strong>
            <span className="hero__stat-label">{stat.label}</span>
          </article>
        ))}
      </div>

      <div className="hero__actions">
        <Link to={`/projects/${featuredProject.slug}`} className="btn btn--primary">
          Projekte ansehen
        </Link>
        <Link to="/experience" className="btn btn--ghost">
          Praktische Erfahrung
        </Link>
      </div>

      <TechnologyMarquee />
    </section>
  );
}

export default HomePage;
