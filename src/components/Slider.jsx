import React, { useState } from "react";
import "../stylesheets/slider.css";
import arrowPrev from "../assets/logos/arrowPrev.png";
import arrowNext from "../assets/logos/arrowNext.png";

function Slider(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = props.cards;

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? cards.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === cards.length - 1 ? 0 : currentIndex + 1);
  };

  return cards.length > 0 ? (
    <div className="slider">
      <button className="prev" onClick={handlePrev}>
        <img src={arrowPrev} alt="arrow" />
      </button>
      {cards[currentIndex]}
      <button className="next" onClick={handleNext}>
        <img src={arrowNext} alt="arrow" />
      </button>
    </div>
  ) : (
    <h2>No hay nada para mostrar... por ahora</h2>
  );
}

export default Slider;
