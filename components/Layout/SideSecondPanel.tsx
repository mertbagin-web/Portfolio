import SidePanelSubLink from "../SidePanelSubLink";

interface Props {
  isOpen: boolean;
}

export default function SideSecondPanel({ isOpen }: Props) {
  if (!isOpen) return null;

  return (
    <div className="menu-option">
      <h5>EXPLORER</h5>
      <div className="menu-drop">
        <div className="box-click">
          <div>
            <span>📁 PORTFOLIO</span>
          </div>
          <div className="show-pre">
            <ul>
              <SidePanelSubLink href="/" icon="🏠" label="index.html" color="#e37933" />
              <SidePanelSubLink href="/Skills" icon="⚙️" label="skills.js" color="#cbcb41" />
              <SidePanelSubLink href="/Projects" icon="📦" label="projects.ts" color="#519aba" />
              <SidePanelSubLink href="/Experience" icon="💼" label="experience.css" color="#563d7c" />
              <SidePanelSubLink href="/Contact" icon="✉️" label="contact.tsx" color="#519aba" />
              <SidePanelSubLink href="/Hobbies" icon="🎮" label="hobbies.cpp" color="#f34b7d" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
