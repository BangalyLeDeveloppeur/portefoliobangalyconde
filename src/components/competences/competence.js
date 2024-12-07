import React from "react";
import imageOrdinateurAvecCode from "../../assets/images/image ordinateur avec code.webp";
import logoHtml from "../../assets/images/html.webp";
import logoCSS from "../../assets/images/css.webp";
import logosass from "../../assets/images/sass.webp";
import logoReact from "../../assets/images/atomic-energy_9037099.webp"
import logoGithub from "../../assets/images/github.webp";
import logojavascript from "../../assets/images/javascript.webp";
import logoWordpress from "../../assets//images/wordpress.webp";
const competence = () => {
  return (
    <div>
      <h1 className="title">COMPÉTENCES</h1>
      <div className="competence">
        <img src={imageOrdinateurAvecCode} alt="Ordinateur affichant du code sur l'ecran "></img>

        <section className="sect-progres-bar">
          <div className="progress-bar">
            <div className="progress">
              <div className="progre-title">
                <img src={logoHtml} alt="Logo html "></img>
                <span>html</span>
              </div>
              
            </div>
          </div>
          
          <div className="progress-bar">
            <div className="progress-css">
              <div className="progre-title">
                <img src={logoCSS} alt="Logo css"></img>
                <span>CSS</span>
              </div>
        
            </div>
          </div>
          <div className="progress-bar">
            <div className="progress-sas">
              <div className="progre-title">
                <img src={logosass} alt="Logo sass "></img>
                <span>SASS</span>
              </div>
              
            </div>
          </div>
          
          <div className="progress-bar">
            <div className="progress-javascript">
              <div className="progre-title">
                <img src={logojavascript} alt="Logo javascript"></img>
                <span>JAVASCRIPT</span>
              </div>
             
            </div>
          </div>
          <div className="progress-bar">
            <div className="progress-react">
              <div className="progre-title">
                <img src={logoReact} alt="Logo react "></img>
                <span>REACT/REDUX</span>
              </div>
              
            </div>
          </div>
          <div className="progress-bar">
            <div className="progress-github">
              <div className="progre-title">
                <img src={logoGithub} alt="Logo github"></img>
                <span>GITHUB/GIT</span>
              </div>
             
            </div>
          </div>
          <div className="progress-bar">
            <div className="progress-wordpress">
              <div className="progre-title">
                <img src={logoWordpress} alt="Logo wordpress"></img>
                <span>WORDPRESS</span>
              </div>
            </div>
          </div>
          <div className="progress-bar">
            <div className="progress-wordpress">
              <div className="progre-title">
                <span>FIGMA</span>
              </div>
            </div>
          </div>
          <div className="progress-bar">
            <div className="progress-wordpress">
              <div className="progre-title">
                <span>ILLUSTRATOR</span>
              </div>
            </div>
          </div>
          <div className="progress-bar">
            <div className="progress-wordpress">
              <div className="progre-title">
                <span>MONGO DB</span>
              </div>
            </div>
          </div>
          
        </section>
      </div>
    </div>
  );
};

export default competence;
