import { useNavigate } from "react-router-dom";
import Topbar from "../components/Topbar";
import "../stylesheets/home.scss";
import { ThemeContext } from "../context/themeContext";
import { useContext } from "react";
const Home = () => {
  const { mode } = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <>
      <Topbar />
      <div
        className={
          mode === "light" ? "homeComponentLight" : "homeComponentDark"
        }
      >
        <h1>LabElements</h1>
        <p>
          {" "}
          Aprendé los elementos más comunes en un laboratorio y poné a prueba tu
          conocimiento
        </p>
        <div className="btnContainer">
          <button
            className={mode === "light" ? "btnHomeLight" : "btnHomeDark"}
            onClick={() => navigate("/aprender")}
          >
            APRENDER
          </button>
          <button
            className={mode === "light" ? "btnHomeLight" : "btnHomeDark"}
            onClick={() => navigate("/jugar")}
          >
            JUGAR
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
