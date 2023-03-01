import LearnCard from "../components/LearnCard";
import Topbar from "../components/Topbar";
import erlenmeyerLight from "../assets/images/erlenmeyerLight.png";
import Slider from "../components/Slider";
import "../stylesheets/aprender.css";
import probetaLight from "../assets/images/probetaLight.png";
import tuboEnsayoLight from "../assets/images/tuboEnsayoLight.png";
import microscopioLight from "../assets/images/microscopioLight.png";
import placaPetriLight from "../assets/images/placaPetriLight.png";
import buretaLight from "../assets/images/buretaLight.png";
import embudoLight from "../assets/images/embudoLight.png";
import termometroLight from "../assets/images/termometroLight.png";
import cardsData from "../data.json";

//Arreglar variaciones de ancho y largo. Ver imagenes de igual tamaño 1:1
const Aprender = () => {
  const learnCardsArr = cardsData.map((cardData) => (
    <LearnCard
      key={cardData.title}
      title={cardData.title}
      description={cardData.description}
      image={
        "../assets/images/" +
        cardData.title.toLowerCase().replace(/\s+/g, "") +
        "Light.png"
      }
    />
  ));

  return (
    <>
      <Topbar backTo="/" />
      <div className="sliderCarr">
        <Slider cards={learnCardsArr} />
      </div>
    </>
  );
};

export default Aprender;
