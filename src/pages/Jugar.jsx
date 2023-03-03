import Topbar from "../components/Topbar";
import PlayCard from "../components/PlayCard";
import erlenmeyerEj from "../assets/images/erlenmeyerLight.png";
import Slider from "../components/Slider";

const Jugar = () => {
  const playCardsArr = [
    <PlayCard title="Prueba" imageLight={erlenmeyerEj} />,
    <PlayCard title="Prueba" imageLight={erlenmeyerEj} />
  ];
  return (
    <>
      {" "}
      <Topbar backTo="/" />
      <div className="sliderCarr">
        <Slider cards={playCardsArr} />
      </div>
    </>
  );
};

export default Jugar;
