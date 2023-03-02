import "../stylesheets/learncard.css";

const LearnCard = (props) => {
  return (
    <div className="learnCard">
      <img src={props.imageLight} alt={props.title} className="cardImage" />
      <div className="learnText">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default LearnCard;
