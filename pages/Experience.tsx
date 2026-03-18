import Head from "next/head";

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Tech Startup",
    period: "2022 - Present",
    description: "Developing and maintaining full-stack web applications using React, Next.js, and Node.js. Leading front-end architecture decisions and mentoring junior developers.",
    tech: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"],
    color: "#007acc"
  },
  {
    id: 2,
    role: "Front-End Developer",
    company: "Digital Agency",
    period: "2021 - 2022",
    description: "Built responsive, accessible web interfaces for various clients. Worked closely with designers to translate mockups into pixel-perfect, performant web applications.",
    tech: ["React", "JavaScript", "CSS", "Tailwind CSS"],
    color: "#28c940"
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "Freelance",
    period: "2020 - 2021",
    description: "Started career as a freelance developer, building websites and web apps for small businesses. Gained experience across the full development lifecycle.",
    tech: ["HTML", "CSS", "JavaScript", "WordPress"],
    color: "#cbcb41"
  }
];

const education = [
  {
    degree: "BSc Computer Science",
    school: "University",
    period: "2016 - 2020",
    color: "#f34b7d"
  }
];

export default function Experience() {
  return (
    <>
      <Head>
        <title>Experience | Mert Bagin</title>
      </Head>
      <div style={{ padding: "40px 60px", maxWidth: "900px" }}>
        <div style={{ marginBottom: "32px" }}>
          <p style={{ color: "#608b4e", fontSize: "13px" }}>/* experience.css */</p>
          <p style={{ color: "#608b4e", fontSize: "13px" }}>/* Work history and education */</p>
        </div>

        <h2 style={{ color: "#cccccc", fontSize: "14px", fontWeight: "600", marginBottom: "20px", letterSpacing: "1px" }}>
          .work-experience {"{"} 
        </h2>

        <div style={{ position: "relative", paddingLeft: "20px" }}>
          {/* Timeline line */}
          <div style={{
            position: "absolute",
            left: "0",
            top: "8px",
            bottom: "8px",
            width: "2px",
            background: "#333"
          }} />

          {experiences.map((exp) => (
            <div key={exp.id} style={{ position: "relative", marginBottom: "32px", paddingLeft: "20px" }}>
              {/* Timeline dot */}
              <div style={{
                position: "absolute",
                left: "-25px",
                top: "8px",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: exp.color,
                border: "2px solid #1e1e1e"
              }} />

              <div style={{
                background: "#252526",
                border: "1px solid #333",
                borderLeft: `3px solid ${exp.color}`,
                borderRadius: "4px",
                padding: "16px 20px"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                  <h3 style={{ color: "#9cdcfe", fontSize: "15px", fontWeight: "600" }}>{exp.role}</h3>
                  <span style={{ color: "#808080", fontSize: "12px" }}>{exp.period}</span>
                </div>
                <p style={{ color: exp.color, fontSize: "13px", marginBottom: "8px" }}>{exp.company}</p>
                <p style={{ color: "#808080", fontSize: "13px", lineHeight: "1.6", marginBottom: "12px" }}>
                  {exp.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {exp.tech.map((t) => (
                    <span key={t} style={{
                      background: "#1e1e1e",
                      border: "1px solid #444",
                      color: "#ce9178",
                      fontSize: "11px",
                      padding: "2px 8px",
                      borderRadius: "3px"
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ color: "#cccccc", fontSize: "14px", fontWeight: "600", margin: "24px 0 20px", letterSpacing: "1px" }}>
          {"}"} <br />
          .education {"{"}
        </h2>

        {education.map((edu) => (
          <div key={edu.degree} style={{
            background: "#252526",
            border: "1px solid #333",
            borderLeft: `3px solid ${edu.color}`,
            borderRadius: "4px",
            padding: "16px 20px",
            marginLeft: "20px"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3 style={{ color: "#9cdcfe", fontSize: "15px", fontWeight: "600" }}>{edu.degree}</h3>
              <span style={{ color: "#808080", fontSize: "12px" }}>{edu.period}</span>
            </div>
            <p style={{ color: edu.color, fontSize: "13px", marginTop: "4px" }}>{edu.school}</p>
          </div>
        ))}

        <p style={{ color: "#cccccc", fontSize: "14px", marginTop: "20px" }}>{"}"}</p>
      </div>
    </>
  );
}
