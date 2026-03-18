import Head from "next/head";

const projects = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js, Node.js, and PostgreSQL. Features include user authentication, product management, shopping cart, and payment integration.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com/mertbagin-web",
    live: "#",
    color: "#007acc",
    icon: "🛍️"
  },
  {
    id: 2,
    name: "Task Management App",
    description: "A real-time collaborative task management application built with React and Firebase. Users can create boards, add tasks, and collaborate with team members in real-time.",
    tech: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    github: "https://github.com/mertbagin-web",
    live: "#",
    color: "#28c940",
    icon: "✅"
  },
  {
    id: 3,
    name: "Weather Dashboard",
    description: "A weather dashboard application that displays current weather and 5-day forecasts for any city. Uses OpenWeatherMap API for data and features beautiful data visualizations.",
    tech: ["React", "JavaScript", "Chart.js", "OpenWeatherMap API"],
    github: "https://github.com/mertbagin-web",
    live: "#",
    color: "#cbcb41",
    icon: "🌤️"
  },
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Mert Bagin</title>
      </Head>
      <div style={{ padding: "40px 60px", maxWidth: "950px" }}>
        <div style={{ marginBottom: "32px" }}>
          <p style={{ color: "#608b4e", fontSize: "13px" }}>// projects.ts</p>
          <p style={{ color: "#608b4e", fontSize: "13px" }}>// My featured projects</p>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <span style={{ color: "#569cd6" }}>interface </span>
          <span style={{ color: "#4ec9b0" }}>Project </span>
          <span style={{ color: "#cccccc" }}>{"{"}</span>
          <div style={{ paddingLeft: "24px" }}>
            <p style={{ color: "#9cdcfe", fontSize: "13px" }}>name: <span style={{ color: "#569cd6" }}>string</span>;</p>
            <p style={{ color: "#9cdcfe", fontSize: "13px" }}>description: <span style={{ color: "#569cd6" }}>string</span>;</p>
            <p style={{ color: "#9cdcfe", fontSize: "13px" }}>tech: <span style={{ color: "#569cd6" }}>string</span>[];</p>
          </div>
          <span style={{ color: "#cccccc" }}>{"}"}</span>
        </div>

        <div style={{ height: "1px", background: "#333", margin: "24px 0" }} />

        <div style={{ display: "grid", gap: "24px" }}>
          {projects.map((project) => (
            <div key={project.id} style={{
              background: "#252526",
              border: "1px solid #333",
              borderLeft: `3px solid ${project.color}`,
              borderRadius: "4px",
              padding: "20px 24px",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                <h3 style={{ color: "#cccccc", fontSize: "16px", fontWeight: "600", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{project.icon}</span>
                  {project.name}
                </h3>
                <div style={{ display: "flex", gap: "12px" }}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    style={{ color: "#3794ff", fontSize: "12px", textDecoration: "none" }}>
                    GitHub ↗
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    style={{ color: "#3794ff", fontSize: "12px", textDecoration: "none" }}>
                    Live ↗
                  </a>
                </div>
              </div>
              <p style={{ color: "#808080", fontSize: "13px", lineHeight: "1.6", marginBottom: "14px" }}>
                {project.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {project.tech.map((t) => (
                  <span key={t} style={{
                    background: "#1e1e1e",
                    border: "1px solid #444",
                    color: "#ce9178",
                    fontSize: "11px",
                    padding: "2px 8px",
                    borderRadius: "3px",
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
