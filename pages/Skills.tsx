import Head from "next/head";

const skills = [
  { name: "JavaScript", level: 90, color: "#cbcb41", icon: "JS" },
  { name: "TypeScript", level: 85, color: "#519aba", icon: "TS" },
  { name: "React", level: 88, color: "#61dafb", icon: "⚛" },
  { name: "Next.js", level: 85, color: "#cccccc", icon: "N" },
  { name: "Node.js", level: 80, color: "#68a063", icon: "⬡" },
  { name: "HTML5", level: 95, color: "#e34c26", icon: "H" },
  { name: "CSS / Tailwind", level: 87, color: "#264de4", icon: "C" },
  { name: "Python", level: 70, color: "#3572A5", icon: "Py" },
];

const tools = [
  "VS Code", "Git", "GitHub", "Docker", "Vercel", "PostgreSQL", "MongoDB", "REST APIs"
];

export default function Skills() {
  return (
    <>
      <Head>
        <title>Skills | Mert Bagin</title>
      </Head>
      <div style={{ padding: "40px 60px", maxWidth: "900px" }}>
        {/* File header comment */}
        <div style={{ marginBottom: "32px" }}>
          <p style={{ color: "#608b4e", fontSize: "13px" }}>// skills.js</p>
          <p style={{ color: "#608b4e", fontSize: "13px" }}>// Technical skills and proficiency</p>
        </div>

        <div style={{ marginBottom: "8px" }}>
          <span style={{ color: "#569cd6" }}>const </span>
          <span style={{ color: "#9cdcfe" }}>skills</span>
          <span style={{ color: "#cccccc" }}> = </span>
          <span style={{ color: "#ce9178" }}>{"{"}</span>
        </div>

        {/* Skills grid */}
        <div style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          {skills.map((skill) => (
            <div key={skill.name} style={{ marginBottom: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{
                    background: skill.color,
                    color: "#1e1e1e",
                    fontSize: "10px",
                    fontWeight: "700",
                    padding: "2px 5px",
                    borderRadius: "3px",
                    minWidth: "24px",
                    textAlign: "center"
                  }}>
                    {skill.icon}
                  </span>
                  <span style={{ color: "#9cdcfe", fontSize: "13px" }}>{skill.name}</span>
                </div>
                <span style={{ color: "#808080", fontSize: "12px" }}>{skill.level}%</span>
              </div>
              <div style={{ background: "#2d2d2d", borderRadius: "3px", height: "6px", overflow: "hidden" }}>
                <div style={{
                  background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`,
                  width: `${skill.level}%`,
                  height: "100%",
                  borderRadius: "3px",
                  transition: "width 0.3s ease"
                }} />
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: "32px" }}>
          <span style={{ color: "#ce9178" }}>{"}"}</span>
          <span style={{ color: "#cccccc" }}>;</span>
        </div>

        {/* Tools section */}
        <div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ color: "#569cd6" }}>const </span>
            <span style={{ color: "#9cdcfe" }}>tools</span>
            <span style={{ color: "#cccccc" }}> = [</span>
          </div>
          <div style={{ paddingLeft: "24px", display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
            {tools.map((tool) => (
              <span key={tool} style={{
                background: "#252526",
                border: "1px solid #444",
                color: "#ce9178",
                fontSize: "12px",
                padding: "4px 12px",
                borderRadius: "3px",
              }}>
                &quot;{tool}&quot;
              </span>
            ))}
          </div>
          <div>
            <span style={{ color: "#cccccc" }}>];</span>
          </div>
        </div>
      </div>
    </>
  );
}
