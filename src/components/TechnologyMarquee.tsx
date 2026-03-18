import angularLogo from "../../logos/67c6daa2174583edf0c18285_angular_wordmark_gradient.png";
import dockerLogo from "../../logos/Docker.png";
import kubernetesLogo from "../../logos/Kubernetes_logo.svg";
import nginxLogo from "../../logos/Nginx.png";
import gunicornlogo from "../../logos/Gunicorn.png";


const techLogos = [
  { name: "Angular", src: angularLogo },
  { name: "Docker", src: dockerLogo },
  { name: "Kubernetes", src: kubernetesLogo },
  { name: "Nginx", src: nginxLogo },
  { name: "Gunicorn", src: gunicornlogo }
];

function TechnologyMarquee() {
  const loopingTechLogos = [...techLogos, ...techLogos];

  return (
    <div className="hero__experience">
      <p className="hero__experience-title">Erfahrung mit folgenden Technologien</p>
      <div className="tech-marquee" aria-label="Technologien Karussell">
        <div className="tech-marquee__track">
          {loopingTechLogos.map((logo, index) => (
            <div key={`${logo.name}-${index}`} className="tech-marquee__item">
              <img src={logo.src} alt={logo.name} className="tech-marquee__logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechnologyMarquee;
