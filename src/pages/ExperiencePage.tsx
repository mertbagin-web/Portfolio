import { useEffect, useRef, useState } from "react";
import { X, Cpu, ClipboardList, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { experiences, type Experience } from "../data/portfolio";

const workExperiences = experiences.filter((e) => e.category === "work");
const uniExperiences = experiences.filter((e) => e.category === "uni");

function ExpModal({
  initialIndex,
  onClose,
}: {
  initialIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(initialIndex);
  const [visible, setVisible] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [transitioning, setTransitioning] = useState(false);
  const backdropRef = useRef<HTMLDivElement>(null);

  const exp = experiences[index];

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") navigate(index + 1, "next");
      if (e.key === "ArrowLeft") navigate(index - 1, "prev");
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, transitioning]);

  function handleClose() {
    setVisible(false);
    setTimeout(onClose, 420);
  }

  function navigate(newIndex: number, dir: "next" | "prev") {
    if (transitioning || newIndex < 0 || newIndex >= experiences.length) return;
    setTransitioning(true);
    setDirection(dir);
    setVisible(false);
    setTimeout(() => {
      setIndex(newIndex);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setVisible(true);
          setTransitioning(false);
        })
      );
    }, 280);
  }

  return (
    <div
      ref={backdropRef}
      className={`exp-modal-backdrop ${visible ? "exp-modal-backdrop--in" : ""}`}
      onClick={(e) => e.target === backdropRef.current && handleClose()}
    >
      {/* Prev arrow */}
      <button
        className="exp-modal-nav exp-modal-nav--prev"
        onClick={() => navigate(index - 1, "prev")}
        disabled={index === 0}
        aria-label="Vorherige Erfahrung"
      >
        <ChevronLeft size={22} />
      </button>

      <div className={`exp-modal exp-modal--${direction} ${visible ? "exp-modal--in" : ""}`}>
        <button className="exp-modal__close" onClick={handleClose} aria-label="Schließen">
          <X size={18} />
        </button>

        <div className="exp-modal__header">
          <div className="exp-modal__title-row">
            {exp.logo && (
              <img src={exp.logo} alt={exp.company} className="exp-modal__logo" />
            )}
            <div>
              <p className="exp-modal__eyebrow">{exp.role}</p>
              <h2 className="exp-modal__company">{exp.company}</h2>
            </div>
          </div>
          <div className="exp-modal__meta">
            <span className="exp-card__badge">{exp.period}</span>
            <div className="exp-modal__dots" aria-label="Seite">
              {experiences.map((_, i) => (
                <button
                  key={i}
                  className={`exp-modal__dot ${i === index ? "exp-modal__dot--active" : ""}`}
                  onClick={() => navigate(i, i > index ? "next" : "prev")}
                  aria-label={`Erfahrung ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <p className="exp-modal__desc">{exp.description}</p>

        {exp.tech && exp.tech.length > 0 && (
          <div className="exp-modal__section">
            <p className="exp-modal__section-title">
              <Cpu size={15} />
              Technologien &amp; Gelerntes
            </p>
            <div className="exp-modal__chips">
              {exp.tech.map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </div>
        )}

        {exp.activities && exp.activities.length > 0 ? (
          <div className="exp-modal__section">
            <p className="exp-modal__section-title">
              <ClipboardList size={15} />
              Tätigkeiten
            </p>
            <ul className="exp-modal__list">
              {exp.activities.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="exp-modal__section">
            <p className="exp-modal__section-title">
              <ClipboardList size={15} />
              Highlights
            </p>
            <ul className="exp-modal__list">
              {exp.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Next arrow */}
      <button
        className="exp-modal-nav exp-modal-nav--next"
        onClick={() => navigate(index + 1, "next")}
        disabled={index === experiences.length - 1}
        aria-label="Nächste Erfahrung"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
}

function ExperienceColumn({
  title,
  eyebrow,
  items,
  onSelect,
}: {
  title: string;
  eyebrow: string;
  items: typeof experiences;
  onSelect: (exp: Experience) => void;
}) {
  return (
    <div className="exp-column">
      <p className="exp-column__eyebrow">{eyebrow}</p>
      <h2 className="exp-column__title">{title}</h2>
      <div className="exp-stack">
        {items.map((exp) => (
          <article
            key={`${exp.company}-${exp.period}`}
            className="exp-card exp-card--clickable"
            onClick={() => onSelect(exp)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && onSelect(exp)}
          >
            <div className="exp-card__top">
              <div className="exp-card__title-row">
                {exp.logo && <img src={exp.logo} alt={exp.company} className="exp-card__logo" />}
                <div>
                  <p className="exp-card__company">{exp.company}</p>
                  <p className="exp-card__role">{exp.role}</p>
                </div>
              </div>
              <span className="exp-card__badge">{exp.period}</span>
            </div>
            <ul className="exp-card__list">
              {exp.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="exp-card__hint">
              <BookOpen size={13} />
              <span>Details ansehen</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function ExperiencePage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  function handleSelect(exp: Experience) {
    setSelectedIndex(experiences.indexOf(exp));
  }

  return (
    <section className="page-panel">
      <p className="section-eyebrow">Erfahrung</p>
      <h1>Beruf &amp; Studium</h1>

      <div className="exp-grid">
        <ExperienceColumn
          eyebrow="Beruflich"
          title="Berufserfahrung"
          items={workExperiences}
          onSelect={handleSelect}
        />
        <ExperienceColumn
          eyebrow="Akademisch"
          title="Uni &amp; Projekte"
          items={uniExperiences}
          onSelect={handleSelect}
        />
      </div>

      {selectedIndex !== null && (
        <ExpModal initialIndex={selectedIndex} onClose={() => setSelectedIndex(null)} />
      )}
    </section>
  );
}

export default ExperiencePage;
