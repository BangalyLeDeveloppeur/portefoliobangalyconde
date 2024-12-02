import React, { useState } from "react";

import {slides} from "../../assets/data/data.js"

const Travaux = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="travaux">
      <h1 className="description-title-travaux">REALISATIONS</h1>
      <div className="gallery">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <img src={slide.Image} alt={`Slide ${index + 1}`} />

            {hoverIndex === index && (
              <div className="tagline"
                dangerouslySetInnerHTML={{ __html: slide.taglen }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Travaux;
