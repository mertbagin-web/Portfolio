import { Mail } from "lucide-react";
import { profile } from "../data/portfolio";
import profileImage from "../../logos/profilbild.jpeg";

function ProfileCard() {
  return (
    <aside className="profile-card">
      <div className="profile-card__image-wrap">
        <img src={profileImage} alt={profile.name} className="profile-card__image" />
      </div>
      <div className="profile-card__body">
        <p className="profile-card__eyebrow">Steckbrief</p>
        <h2 className="profile-card__name">{profile.name}</h2>
        <p className="profile-card__role">{profile.role}</p>
        <p className="profile-card__location">{profile.location}</p>
        <p className="profile-card__availability">{profile.availability}</p>
        <a href={`mailto:${profile.email}`} className="btn btn--primary profile-card__cta">
          <Mail size={18} />
          <span>Kontakt aufnehmen</span>
        </a>
      </div>
    </aside>
  );
}

export default ProfileCard;
