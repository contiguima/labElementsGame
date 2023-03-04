import Topbar from "../components/Topbar";
import PlayCard from "../components/PlayCard";
import erlenmeyerEj from "../assets/images/erlenmeyerLight.png";
import "../stylesheets/jugar.css";
const Jugar = () => {
  return (
    <>
      {" "}
      <Topbar backTo="/" />
      <div className="game">
        <PlayCard title="Prueba" imageLight={erlenmeyerEj} />,
      </div>
    </>
  );
};

export default Jugar;
