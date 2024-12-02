import React from "react";
import logoblan from "../../assets/images/logo.webp";
import logoinsta from "../../assets/images/Instagram-Icon.webp";
import logolink from "../../assets/images/LinkedIn_logo_initials.png.webp";
import logofacebook from "../../assets/images/logo facebook.webp";

const Footer = () => {
  return (
    <div>
      <div className="footerstyles">
        <img src={logoblan} alt="logo blan de kasa" />

        <p>Adresse: Fuchsenstrasse 6, 9016 Saint.Gallen</p>
        <p>Téléphone : +41 78 67 317 86 20</p>

        {/* Lien vers Instagram */}
        <a
          href="https://www.instagram.com/votre_compte"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logoinsta} alt="Instagram" />
        </a>

        {/* Lien vers LinkedIn */}
        <a
          href="https://www.linkedin.com/in/bangaly-conde-6b0ab5261/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logolink} alt="LinkedIn" />
        </a>
        <a
          href="https://www.facebook.com/people/Bangaly-Cond%C3%A9-Developpement/100089536332806/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="facebook" src={logofacebook} alt="facebook" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
