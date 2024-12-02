import React from "react";
import Description from "../components/description/Description";
import Competence from "../components/competences/competence";
import Travaux from "../components/travaux/Travaux";
import Formulaire from "../components/form/Forme";


const Home = () => {
  return (
    <div>
     
      <h1 className="acro">
        Former des interfaces responsives et optimales, engager les utilisateurs
        grâce la navigation intuitive et design interactif.
      </h1>
      <section id="accueil">
        <section id="presentation">
          <Description />
        </section>
        <section id="realisations">
          <Travaux />
        </section>
        <section id="competences">
          <Competence />
        </section>
        <section id="contact">
          <Formulaire />
        </section>
      </section>
    </div>
  );
};

export default Home;
