import LearnCard from "../components/LearnCard";
import Topbar from "../components/Topbar";
import erlenmeyerLight from "../assets/images/erlermenyerLight.png";
import Slider from "../components/Slider";
import "../stylesheets/aprender.css";
import probetaLight from "../assets/images/probetaLight.png";
import tuboEnsayoLight from "../assets/images/tuboEnsayoLight.png";

//Arreglar variaciones de ancho y largo. Ver imagenes de igual tamaño 1:1
const Aprender = () => {
  const learnCardsArr = [
    <LearnCard
      title="Erlenmeyer"
      description=" Es un recipiente de vidrio que se utiliza en los laboratorios, tiene forma de cono y tiene un cuello cilíndrico, es plano por la base. Se utiliza para calentar líquidos cuando hay peligro de pérdida por evaporación."
      image={erlenmeyerLight}
    />,
    <LearnCard
      title="Probeta"
      description="Este pequeño tubo transparente, el cual cuenta con una base que permite apoyarlo, y tiene como principal función el de medir el volumen de un líquido o de un sólido (por el principio de Arquímedes)."
      image={probetaLight}
    />,
    <LearnCard
      title="Tubo de ensayo"
      description="Un tipo de tubo, semejante a la probeta pero sin base, en el cual por lo general se vierten líquidos, soluciones o muestras que analizar o con las que experimentar. El tubo de ensayo tiende a ser más pequeño que la probeta promedio, y es más fácil de transportar y almacenar."
      image={tuboEnsayoLight}
    />
  ];

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
