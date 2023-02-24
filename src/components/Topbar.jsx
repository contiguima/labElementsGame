import { useNavigate } from "react-router-dom";
import "../stylesheets/topbar.css";
import moonLogo from "../archivos/logos/moon.png";

const Topbar = (props) => {
  const navigate = useNavigate();

  if (props.backTo != null) {
    return (
      <div className="topbar">
        <button className="backBtn" onClick={() => navigate(props.backTo)}>
          {" "}
          Volver{" "}
        </button>
        <button className="darkMode">
          <img src={moonLogo} alt="moon,logo" />
        </button>
      </div>
    );
  } else {
    return (
      <div className="topbar">
        <button className="darkMode">
          {" "}
          <img src={moonLogo} alt="moon,logo" />{" "}
        </button>
      </div>
    );
  }
};

export default Topbar;
