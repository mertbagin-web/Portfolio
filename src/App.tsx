import { BriefcaseBusiness, FolderKanban, Home, Mail, Wrench } from "lucide-react";
import { NavLink, Route, Routes } from "react-router-dom";
import ProfileCard from "./components/ProfileCard";
import ContactPage from "./pages/ContactPage";
import ExperiencePage from "./pages/ExperiencePage";
import HomePage from "./pages/HomePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";

const navigationItems = [
  { to: "/", label: "Start", icon: Home },
  { to: "/experience", label: "Erfahrung", icon: BriefcaseBusiness },
  { to: "/projects", label: "Projekte", icon: FolderKanban },
  { to: "/skills", label: "Skills", icon: Wrench },
  { to: "/contact", label: "Kontakt", icon: Mail }
];

function App() {
  return (
    <div className="page">
      <nav className="side-nav" aria-label="Hauptnavigation">
        {navigationItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                isActive ? "side-nav__link side-nav__link--active" : "side-nav__link"
              }
              title={item.label}
              aria-label={item.label}
            >
              <span className="side-nav__paper" aria-hidden="true">
                <span className="side-nav__paper-text">{item.label}</span>
              </span>
              <Icon size={20} />
            </NavLink>
          );
        })}
      </nav>

      <div className="layout-grid">
        <ProfileCard />
        <main className="content-column">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
