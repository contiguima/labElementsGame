import { useNavigate } from "react-router-dom";
import "../stylesheets/topbar.scss";
import moonLogo from "../assets/logos/moon.png";
import arrowLogo from "../assets/logos/arrowBackBtn.png";
import { ThemeContext } from "../context/themeContext";
import { useContext } from "react";

const Topbar = (props) => {
  const { mode, toggleMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  if (props.backTo != null) {
    return (
      <div className="topbar">
        <button
          className={mode === "light" ? "backBtnLight" : "backBtnDark"}
          onClick={() => navigate(props.backTo)}
        >
          {" "}
          <img src={arrowLogo} alt="arrow" />
        </button>
        <button
          className={mode === "light" ? "darkModeLight" : "darkModeDark"}
          onClick={toggleMode}
        >
          <img src={moonLogo} alt="moon,logo" />
        </button>
      </div>
    );
  } else {
    return (
      <div className="topbar">
        <button
          className={mode === "light" ? "darkModeLight" : "darkModeDark"}
          onClick={toggleMode}
        >
          <img src={moonLogo} alt="moon,logo" />
        </button>
      </div>
    );
  }
};

export default Topbar;
