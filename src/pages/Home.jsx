import { useNavigate } from "react-router-dom";
import Topbar from "../components/Topbar";
import "../stylesheets/home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Topbar />
      <div className="homeComponent">
        <h1>LabElements</h1>
        <p>
          {" "}
          Aprendé los elementos más comunes en un laboratorio y poné a prueba tu
          conocimiento
        </p>
        <div className="btnContainer">
          <button className="btnHome" onClick={() => navigate("/aprender")}>
            APRENDER
          </button>
          <button className="btnHome" onClick={() => navigate("/jugar")}>
            JUGAR
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
