import "../stylesheets/playcard.css";
import { useState, useEffect } from "react";
import questions from "../questions";
import images from "../images.js";

const PlayCard = (props) => {
  const [puntaje, setPuntaje] = useState(0);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  function handleAnswerSubmit(isCorrect, e) {
    // añadir puntuación
    if (isCorrect) {
      setPuntaje(puntaje + 1);
    }

    // cambiar a la siguiente pregunta

    setTimeout(() => {
      if (preguntaActual === questions.length - 1) {
        setIsFinished(true);
      } else {
        setPreguntaActual(preguntaActual + 1);
      }
    }, 1500);
  }
  if (isFinished) {
    return (
      <>
        <div className="endGameContainer">
          <h1>Juego terminado</h1>
          <h3>
            {" "}
            Tu puntaje fue de {puntaje} sobre {questions.length} preguntas
          </h3>
          <p>
            {" "}
            {puntaje > questions.length / 2
              ? "¡Excelente trabajo!"
              : "¡Sigue practicando!"}
          </p>
        </div>
      </>
    );
  }

  return (
    <div className="playContainer">
      <h1>Puntaje: {puntaje}</h1>

      <div className="playCard">
        <img
          src={images[questions[preguntaActual].image]}
          alt={questions[preguntaActual].image}
          className="cardImage"
        />
        <div className="playOptions">
          {questions[preguntaActual].opciones.map((respuesta) => (
            <button
              className="option"
              key={respuesta.textoRespuesta}
              onClick={(e) => handleAnswerSubmit(respuesta.isCorrect, e)}
            >
              {respuesta.textoRespuesta}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayCard;
