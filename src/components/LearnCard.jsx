import "../stylesheets/learncard.scss";
import { ThemeContext } from "../context/themeContext";
import { useContext } from "react";
const LearnCard = (props) => {
  const { mode, toggleMode } = useContext(ThemeContext);

  return (
    <div className={mode === "light" ? "learnCardLight" : "learnCardDark"}>
      <img src={props.imageLight} alt={props.title} className="cardImage" />
      <div className="learnText">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default LearnCard;
