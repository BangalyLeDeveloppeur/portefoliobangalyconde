import React from "react";
import imBangaly from "../../assets/images/photo Bangaly.webp";

const Description = () => {
  return (
    <div className="description">
      
      <h1 className="description-title">PRESENTATION</h1>
      <div className="description-conteneur">
        <img src={imBangaly} alt="Portrait de Bangaly dans la section description"></img>
        <div className="description-paragraphe">
          <div className="description-ligne"></div>
          <p>
            Pendant mes études de comptabilité, j'ai été attiré par le métier de
            développeur web. C'est la raison pour laquelle j'ai décidé de me
            réorienter dans ce domaine après mes études universitaires.<br></br>{" "}
            Après avoir suivi une année scolaire à <strong>MyDigitalSchool Annecy</strong>dans le domaine du
            développement multimédia web. J’ai pris la décision de continuer
            d’apprendre le développement web sur OpenClassRom voir mon CV.
            <br></br> J’apprenais, une sorte de prétexte pour coder beaucoup de
            choses par moi-même. Par la suite, en parallèle de mes premières
            missions freelance, j'ai réalisé pleines de projets avec de nombres
            défis que votre trouverez quelques-uns en dessus de cette partie.
            Doté d'une grande persévérance et d'une personnalité engagée,
            curieuse et optimiste, je suis la personne idéale pour la
            réalisation de vos projets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
