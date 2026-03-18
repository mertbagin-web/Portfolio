import dockerLogo from "../../logos/Docker.png";
import gunicornlogo from "../../logos/Gunicorn.png";
import repomakerGif from "../../logos/Projekte/RepomakerUI.gif";
import pregoLogo from "../../logos/prego.jfif";

export type ProjectAsset = {
  name: string;
  src: string;
  kind?: "image" | "video";
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  link: string;
  period: string;
  highlights: string[];
  overview: string;
  responsibilities: string[];
  outcome: string;
  media?: ProjectAsset;
  technologyAssets?: ProjectAsset[];
};

export type Stat = {
  value: string;
  label: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  category: "work" | "uni";
  tech?: string[];
  activities?: string[];
  logo?: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const profile = {
  name: "Mert Bagin",
  role: "Student: Angewandte Informatik (BA) Hochschule Worms",
  location: "Lambsheim, Deutschland",
  availability: "Offen fuer Werkstudentenstellen und Praxisprojekte",
  email: "mert@example.com",
  github: "https://github.com/dein-username",
  linkedin: "https://linkedin.com/in/dein-profil",
  about:
    "Ich studiere Angewandte Informatik an der Hochschule Worms und entwickle mit Fokus auf moderne Webanwendungen, saubere Strukturen und praxisnahe Projekte."
};

export const stats: Stat[] = [
  {
    value: "2+",
    label: "Jahre Erfahrung als Werkstudent und in Praxisprojekten"
  },
  {
    value: "2",
    label: "Projekte umgesetzt"
  }
];

export const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "HTML",
  "CSS",
  "Git",
  "REST APIs"
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Vite", "HTML", "CSS", "Responsive Design"]
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "Express", "REST APIs", "JSON", "Authentication"]
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Docker", "Nginx", "Kubernetes"]
  }
];

export const experiences: Experience[] = [
  {
    company: "Eigene Lernprojekte",
    role: "Full-Stack orientierte Projektarbeit",
    period: "2022 – Heute",
    description: "Praxisnahe Entwicklung kleiner Anwendungen und Erkundung von Produktions-Workflows.",
    highlights: [
      "REST-APIs mit Node.js & Express",
      "Docker, Nginx & Kubernetes erkundet",
      "CI/CD mit GitHub Actions"
    ],
    category: "work"
  },
  {
    company: "Prego Services GmbH",
    role: "Werkstudent – IT Security Analyst",
    period: "2024 – Heute",
    logo: pregoLogo,
    description: "Werkstudententätigkeit im Bereich IT-Security mit Fokus auf Analyse, Monitoring und Sicherheitsmaßnahmen.",
    highlights: [
      "Sicherheitsanalysen & Monitoring",
      "SIEM-Systeme und Log-Auswertung",
      "Schwachstellenmanagement"
    ],
    category: "work",
    tech: [
      "SIEM (Splunk / QRadar)",
      "Wireshark",
      "Nessus / Vulnerability Scanning",
      "Linux CLI",
      "Python Scripting",
      "MITRE ATT&CK Framework",
      "Ticketing-Systeme (Jira)"
    ],
    activities: [
      "Überwachung und Analyse von Sicherheitsvorfällen im SIEM",
      "Auswertung von Log-Daten und Identifikation von Anomalien",
      "Durchführung von Schwachstellenscans und Dokumentation der Ergebnisse",
      "Erstellung von Security-Reports und Handlungsempfehlungen",
      "Unterstützung beim Aufbau interner Sicherheitsrichtlinien",
      "Enge Zusammenarbeit mit dem IT-Team bei Incident Response"
    ]
  },
  {
    company: "Hochschule Worms",
    role: "Angewandte Informatik (B.A.)",
    period: "2023 – Heute",
    description: "Studium mit Fokus auf Webentwicklung, Software Engineering und Teamarbeit.",
    highlights: [
      "React & TypeScript im Studium eingesetzt",
      "Routing & Komponentenarchitektur",
      "Deployment mit Vite & GitHub Pages"
    ],
    category: "uni"
  },
  {
    company: "Repomaker F-Droid",
    role: "Backend-Entwickler & Scrum Master",
    period: "Hochschule Worms",
    description: "Teamorientiertes Hochschulprojekt mit Scrum-Prozessen und Docker-Deployment.",
    highlights: [
      "Backend-Strukturen mitentwickelt",
      "Scrum Master: Sprints & Koordination",
      "Docker für reproduzierbare Umgebungen"
    ],
    category: "uni"
  }
];

export const projects: Project[] = [
  {
    slug: "repomaker-f-droid",
    title: "Repomaker F-Droid",
    description:
      "Teamorientiertes Hochschulprojekt an der Hochschule Worms, bei dem ich als Backend Entwickler und Scrum Master gearbeitet habe.",
    stack: ["Node.js", "REST API", "Docker", "Scrum", "Teamarbeit"],
    link: "#",
    period: "Hochschule Worms",
    highlights: [
      "Backend-Entwicklung innerhalb eines Teamprojekts verantwortet",
      "Scrum Master Rolle fuer Organisation, Abstimmung und Sprintstruktur uebernommen",
      "Docker fuer reproduzierbare lokale Entwicklungs- und Laufzeitumgebungen eingesetzt"
    ],
    overview:
      "Repomaker F-Droid war ein teamorientiertes Projekt an der Hochschule Worms. In diesem Projekt habe ich die Rolle als Backend Entwickler uebernommen und gleichzeitig als Scrum Master gearbeitet. Der Schwerpunkt lag darauf, Backend-Strukturen im Team sauber aufzusetzen, Aufgaben zu koordinieren und die Zusammenarbeit innerhalb der Sprints stabil zu halten.",
    responsibilities: [
      "Backend-Funktionen im Projektteam mitentwickelt und strukturiert",
      "Als Scrum Master Meetings, Sprint-Abstimmungen und Aufgabenfluss begleitet",
      "Technische Kommunikation zwischen den Teammitgliedern unterstuetzt und Hindernisse frueh sichtbar gemacht",
      "Docker genutzt, um Entwicklungsumgebungen konsistent und einfacher startbar zu machen"
    ],
    outcome:
      "Das Projekt hat mir gezeigt, wie wichtig saubere Abstimmung, verteilte Verantwortung und strukturierte Teamarbeit in einer realen Entwicklungsumgebung sind.",
    media: {
      name: "Überarbeitete UI",
      src: repomakerGif,
      kind: "image"
    },
    technologyAssets: [
      {
        name: "Docker",
        src: dockerLogo
      },
      {
        name: "Gunicorn",
        src: gunicornlogo
      }
    ]
  },
  {
    slug: "projekt-beta",
    title: "Projekt Beta",
    description: "Kleines Dashboard mit Filterfunktion und API-Integration.",
    stack: ["React", "Node.js", "Express"],
    link: "#",
    period: "2024",
    highlights: [
      "API-Daten strukturiert geladen und dargestellt",
      "Filter- und Kartenlogik fuer bessere Uebersicht umgesetzt",
      "Frontend und Backend lokal gemeinsam entwickelt"
    ],
    overview:
      "Projekt Beta war ein Dashboard-Projekt mit dem Fokus, Daten ueber eine API zu laden, sinnvoll aufzubereiten und interaktiv filterbar darzustellen.",
    responsibilities: [
      "API-Anbindung zwischen Frontend und Node.js-Backend umgesetzt",
      "Filterlogik und Kartenansichten fuer Datensaetze gebaut",
      "Zustandslogik im Frontend so organisiert, dass die Anwendung uebersichtlich bleibt",
      "Grundlage fuer weitere Kennzahlen und Ansichten vorbereitet"
    ],
    outcome:
      "Dadurch entstand ein funktionales Dashboard mit klarer Datenstruktur und guter Basis fuer spaetere Erweiterungen."
  },
  {
    slug: "projekt-gamma",
    title: "Projekt Gamma",
    description: "Portfolio-Prototyp mit modularen Komponenten.",
    stack: ["Vite", "TypeScript", "GitHub Pages"],
    link: "#",
    period: "2026",
    highlights: [
      "Mehrseitige Portfolio-Struktur mit Routing aufgebaut",
      "Technologie-Karussell und Profilkarte integriert",
      "Deployment fuer GitHub Pages vorbereitet"
    ],
    overview:
      "Projekt Gamma ist mein eigenes Portfolio, das als mehrseitige Webanwendung aufgebaut wurde. Ziel war es, mich strukturiert zu praesentieren und gleichzeitig ein sauberes, modernes Frontend umzusetzen.",
    responsibilities: [
      "Mehrere Unterseiten mit Routing und Navigation erstellt",
      "Ein Layout mit Steckbrief, Statistik, Projektseiten und Erfahrungsseite entwickelt",
      "GitHub Pages Deployment vorbereitet und lokale Entwicklungsumgebung eingerichtet",
      "Komponenten so organisiert, dass die Seite spaeter leicht erweitert werden kann"
    ],
    outcome:
      "Das Portfolio dient als technische Visitenkarte und zeigt gleichzeitig meine Arbeitsweise, meine Projekte und meine praktische Erfahrung."
  }
];

export const contactLinks = [
  {
    label: "E-Mail",
    value: profile.email,
    href: `mailto:${profile.email}`
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/dein-profil",
    href: profile.linkedin
  },
  {
    label: "GitHub",
    value: "github.com/dein-username",
    href: profile.github
  }
];
