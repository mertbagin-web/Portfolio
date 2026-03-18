import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./Layout.module.css";
import SideMainPanel from "./SideMainPanel";
import SideSecondPanel from "./SideSecondPanel";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentTime, setCurrentTime] = useState("");
  const router = useRouter();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const mainClass = sidebarOpen ? "main-content-with-sidebar scrollbar" : "main-content scrollbar";

  return (
    <div>
      {/* Top Header */}
      <header className="header">
        <div className="logo" style={{ marginLeft: "8px" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 100 100">
            <mask id="mask">
              <rect width="100" height="100" fill="white"/>
              <path d="M 70,20 L 70,45 L 35,25 Z M 70,80 L 70,55 L 35,75 Z M 70,50 L 35,50 L 70,25 L 70,75 Z" fill="black"/>
            </mask>
            <rect width="100" height="100" rx="15" fill="#007acc" mask="url(#mask)"/>
            <path d="M 30,20 L 70,45 L 70,55 L 30,80 Z" fill="white" opacity="0.3"/>
          </svg>
        </div>
        <ul className="header-menu">
          <li className="header-menu-link">File</li>
          <li className="header-menu-link">Edit</li>
          <li className="header-menu-link">View</li>
          <li className="header-menu-link">Go</li>
          <li className="header-menu-link">Terminal</li>
          <li className="header-menu-link">Help</li>
        </ul>
        <div className={styles.windowControls}>
          <div
            className={`${styles.circle} ${styles.red}`}
            onClick={() => router.back()}
            title="Go Back"
          />
          <div className={`${styles.circle} ${styles.yellow}`} title="Minimize" />
          <div className={`${styles.circle} ${styles.green}`} title="Maximize" />
        </div>
      </header>

      {/* Left icon panel */}
      <SideMainPanel isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />

      {/* File explorer panel */}
      <SideSecondPanel isOpen={sidebarOpen} />

      {/* Main content */}
      <main className={mainClass}>
        {children}
      </main>

      {/* Bottom status bar */}
      <footer className="bottom-header">
        <ul>
          <li>⎇ main</li>
          <li>✓ No problems</li>
        </ul>
        <ul>
          <li>Mert Bagin</li>
          <li>{currentTime}</li>
          <li>TypeScript</li>
          <li>UTF-8</li>
        </ul>
      </footer>
    </div>
  );
}
