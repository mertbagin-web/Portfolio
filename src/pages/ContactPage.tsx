import { contactLinks, profile } from "../data/portfolio";

function ContactPage() {
  return (
    <section className="page-panel">
      <p className="section-eyebrow">Kontakt</p>
      <h1>Zusammenarbeit, Werkstudentenstelle oder Projektanfrage</h1>
      <p className="section-lead">
        Wenn du an einer Zusammenarbeit interessiert bist, findest du hier die passenden Kanaele.
      </p>

      <div className="stacked-cards">
        <article className="detail-card">
          <h3>Verfuegbarkeit</h3>
          <p>{profile.availability}</p>
          <div className="contact-grid">
            {contactLinks.map((entry) => (
              <a key={entry.label} href={entry.href} className="contact-link-card">
                <span className="contact-link-card__label">{entry.label}</span>
                <strong>{entry.value}</strong>
              </a>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default ContactPage;
