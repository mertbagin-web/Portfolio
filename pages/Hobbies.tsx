import Head from "next/head";

const hobbies = [
  {
    name: "Gaming",
    icon: "🎮",
    description: "Enjoy playing strategy and RPG games in my free time. Currently playing indie games and exploring game development.",
    color: "#f34b7d"
  },
  {
    name: "Open Source",
    icon: "🐙",
    description: "Contributing to open source projects on GitHub. I believe in the power of community-driven development.",
    color: "#28c940"
  },
  {
    name: "Reading",
    icon: "📚",
    description: "Tech books, sci-fi novels, and technical blogs. Always trying to learn something new.",
    color: "#cbcb41"
  },
  {
    name: "Photography",
    icon: "📷",
    description: "Street and landscape photography. I love capturing moments and the beauty in everyday scenes.",
    color: "#519aba"
  },
  {
    name: "Hiking",
    icon: "🏔️",
    description: "Weekend hikes and exploring nature trails. It's a great way to disconnect and recharge.",
    color: "#68a063"
  },
  {
    name: "Music",
    icon: "🎵",
    description: "Playing guitar and listening to various genres. Music is a great companion while coding.",
    color: "#e37933"
  }
];

export default function Hobbies() {
  return (
    <>
      <Head>
        <title>Hobbies | Mert Bagin</title>
      </Head>
      <div style={{ padding: "40px 60px", maxWidth: "900px" }}>
        <div style={{ marginBottom: "32px" }}>
          <p style={{ color: "#608b4e", fontSize: "13px" }}>// hobbies.cpp</p>
          <p style={{ color: "#608b4e", fontSize: "13px" }}>// #include &lt;life.h&gt;</p>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <span style={{ color: "#569cd6" }}>int </span>
          <span style={{ color: "#dcdcaa" }}>main</span>
          <span style={{ color: "#cccccc" }}>() {"{"}</span>
        </div>

        <div style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <p style={{ color: "#9cdcfe", fontSize: "13px", marginBottom: "16px" }}>
            <span style={{ color: "#608b4e" }}>// Things I enjoy outside of coding</span>
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {hobbies.map((hobby) => (
              <div key={hobby.name} style={{
                background: "#252526",
                border: "1px solid #333",
                borderLeft: `3px solid ${hobby.color}`,
                borderRadius: "4px",
                padding: "16px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <span style={{ fontSize: "20px" }}>{hobby.icon}</span>
                  <h3 style={{ color: "#9cdcfe", fontSize: "14px", fontWeight: "600" }}>{hobby.name}</h3>
                </div>
                <p style={{ color: "#808080", fontSize: "12px", lineHeight: "1.6" }}>
                  {hobby.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <span style={{ color: "#569cd6" }}>return </span>
          <span style={{ color: "#b5cea8" }}>0</span>
          <span style={{ color: "#cccccc" }}>;</span>
          <br />
          <span style={{ color: "#cccccc" }}>{"}"}</span>
        </div>
      </div>
    </>
  );
}
