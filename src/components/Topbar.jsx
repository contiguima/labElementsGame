import { Navigate } from "react-router-dom";
import "../stylesheets/topbar.css";
import moonLogo from "../archivos/logos/moon.png";

const Topbar = (props) => {
  if (props.backTo != null) {
    return (
      <div className="topbar">
        <button className="backBtn" /*onClick Navigate to props.backTo*/>
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
