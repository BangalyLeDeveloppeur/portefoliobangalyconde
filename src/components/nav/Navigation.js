import React from "react";
import { Link } from "react-scroll"; // Utilisation de Link de react-scroll pour les autres sections
import logo from "../../assets/images/logom.webp";
import cv from "../../assets/images/CV_Conde Bangaly.jpeg";

const Navigation = () => {
  return (
    <div className="navigation">
      {/* Image du logo */}
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <Link to="accueil" smooth={true} duration={500} className="nav-link">
            ACCUEIL
          </Link>
        </li>
        <li>
          <Link
            to="presentation"
            smooth={true}
            duration={500}
            className="nav-link"
          >
            PRESENTATION
          </Link>
        </li>
        <li>
          <Link
            to="realisations"
            smooth={true}
            duration={500}
            className="nav-link"
          >
            REALISATIONS
          </Link>
        </li>
        <li>
          <Link
            to="competences"
            smooth={true}
            duration={500}
            className="nav-link"
          >
            COMPETENCES
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} className="nav-link">
            CONTACT
          </Link>
        </li>
        <li>
          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            CV
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
