# Portfolio Starter (React + TypeScript + Node.js)

Das ist ein Startpunkt fuer dein Portfolio mit:
- React + TypeScript (Frontend)
- Vite (Build Tool)
- Node.js (API-Startpunkt unter `server/`)
- GitHub Pages Deployment per GitHub Actions

## 1) Voraussetzungen

- Node.js LTS installieren: https://nodejs.org
- Git installiert
- GitHub Account

## 2) Lokal starten

```bash
npm install
npm run server:install
npm run dev
```

Frontend: `http://localhost:5173`

Optionaler Node-Server in zweitem Terminal:

```bash
npm run server:dev
```

API: `http://localhost:4000/api/health`

## 3) Platzhalter anpassen

- Hauptinhalt: `src/data/portfolio.ts`
- Layout: `src/App.tsx`
- Design: `src/styles.css`

## 4) GitHub Pages aktivieren

1. Repo nach GitHub pushen.
2. Unter GitHub: **Settings > Pages**
3. Bei Build source: **GitHub Actions** waehlen.
4. In `vite.config.ts` den Fallback `DEIN-REPO-NAME` durch deinen Repo-Namen ersetzen (falls noetig).

Workflow-Datei liegt bereits in `.github/workflows/deploy.yml`.

## 5) Hinweis zu Node.js + GitHub Pages

GitHub Pages hostet nur statische Dateien (dein React-Build). Dein Node.js-Server wird dort **nicht** ausgefuehrt.
Wenn du spaeter Backend online willst, nutze z. B. Render, Railway oder Fly.io.

## 6) Schnellstart fuer GitHub

```bash
git init
git add .
git commit -m "Initial portfolio starter"
git branch -M main
git remote add origin https://github.com/DEIN-USERNAME/DEIN-REPO.git
git push -u origin main
```
