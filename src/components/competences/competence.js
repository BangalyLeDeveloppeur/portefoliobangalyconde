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
      <h1 className="title">COMPETENCES</h1>
      <div className="competence">
        <img src={imageOrdinateurAvecCode} alt="Ordinateur affichant du code sur l'ecran "></img>

        <section className="sect-progres-bar">
          <div class="progress-bar">
            <div class="progress">
              <div className="progre-title">
                <img src={logoHtml} alt="Logo html "></img>
                <h1>html</h1>
              </div>
              
            </div>
          </div>
          
          <div class="progress-bar">
            <div class="progress-css">
              <div className="progre-title">
                <img src={logoCSS} alt="Logo css"></img>
                <h1>CSS</h1>
              </div>
        
            </div>
          </div>
          <div class="progress-bar">
            <div class="progress-sas">
              <div className="progre-title">
                <img src={logosass} alt="Logo sass "></img>
                <h1>SASS</h1>
              </div>
              
            </div>
          </div>
          
          <div class="progress-bar">
            <div class="progress-javascript">
              <div className="progre-title">
                <img src={logojavascript} alt="Logo javascript"></img>
                <h1>JAVASCRIPT</h1>
              </div>
             
            </div>
          </div>
          <div class="progress-bar">
            <div class="progress-react">
              <div className="progre-title">
                <img src={logoReact} alt="Logo react "></img>
                <h1>REACT/REDUX</h1>
              </div>
              
            </div>
          </div>
          <div class="progress-bar">
            <div class="progress-github">
              <div className="progre-title">
                <img src={logoGithub} alt="Logo github"></img>
                <h1>GITHUB/GIT</h1>
              </div>
             
            </div>
          </div>
          <div class="progress-bar">
            <div class="progress-wordpress">
              <div className="progre-title">
                <img src={logoWordpress} alt="Logo wordpress"></img>
                <h1>WORDPRESS</h1>
              </div>
            </div>
          </div>
          <div class="progress-bar">
            <div class="progress-wordpress">
              <div className="progre-title">
                <h1>FIGMA</h1>
              </div>
            </div>
          </div>
          <div class="progress-bar">
            <div class="progress-wordpress">
              <div className="progre-title">
                <h1>ILlUSTRATOR</h1>
              </div>
            </div>
          </div>
          <div class="progress-bar">
            <div class="progress-wordpress">
              <div className="progre-title">
                <h1>MONGO DB</h1>
              </div>
            </div>
          </div>
          
        </section>
      </div>
    </div>
  );
};

export default competence;
