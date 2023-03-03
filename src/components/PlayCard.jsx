import "../stylesheets/playcard.css";
import { useState, useEffect } from "react";

const PlayCard = (props) => {
  const [puntaje, setPuntaje] = useState(0);
  return (
    <div className="playContainer">
      <h1>Puntaje: </h1>
      <p>Estado de respuesta</p>
      <div className="playCard">
        <img src={props.imageLight} alt={props.title} className="cardImage" />
        <div className="playOptions">
          <button className="option"> Opción 1</button>
          <button className="option"> Opción 2 </button>
          <button className="option"> Opción 3 </button>
        </div>
      </div>
    </div>
  );
};

export default PlayCard;
