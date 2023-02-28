import LearnCard from "../components/LearnCard";
import Topbar from "../components/Topbar";
import erlenmeyerLight from "../archivos/imagenes/erlermenyerLight.png";

const Aprender = () => {
  return (
    <>
      <Topbar backTo="/" />
      <LearnCard
        title="Erlenmeyer"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl nunc mi ipsum faucibus vitae aliquet. Libero justo laoreet sit amet. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing."
        image={erlenmeyerLight}
      />
    </>
  );
};

export default Aprender;
