import LearnCard from "../components/LearnCard";
import Topbar from "../components/Topbar";
import Slider from "../components/Slider";
import "../stylesheets/aprender.css";
import cardsData from "../data.json";
import images from "../images.js";
const Aprender = () => {
  const learnCardsArr = cardsData.map((cardData) => (
    <LearnCard
      key={cardData.title}
      title={cardData.title}
      description={cardData.description}
      imageLight={images[cardData.image]}
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
