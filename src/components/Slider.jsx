import React, { useState } from "react";
import "../stylesheets/slider.scss";
import arrowPrev from "../assets/logos/arrowPrev.png";
import arrowNext from "../assets/logos/arrowNext.png";
import { ThemeContext } from "../context/themeContext";
import { useContext } from "react";
function Slider(props) {
  const { mode } = useContext(ThemeContext);
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
      <button
        className={mode === "light" ? "arrowBtnLight" : "arrowBtnDark"}
        onClick={handlePrev}
      >
        <img src={arrowPrev} alt="arrow" />
      </button>
      {cards[currentIndex]}
      <button
        className={mode === "light" ? "arrowBtnLight" : "arrowBtnDark"}
        onClick={handleNext}
      >
        <img src={arrowNext} alt="arrow" />
      </button>
    </div>
  ) : (
    <h2>No hay nada para mostrar... por ahora</h2>
  );
}

export default Slider;
