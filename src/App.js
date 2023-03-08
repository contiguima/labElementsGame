import { Route, Routes } from "react-router-dom";
import Aprender from "./pages/Aprender";
import Home from "./pages/Home";
import Jugar from "./pages/Jugar";
import "./styles.scss";
import { ThemeContext } from "./context/themeContext";
import { useContext } from "react";

export default function App() {
  const { mode} = useContext(ThemeContext);
  return (
    <div className={mode === "light" ? "AppLight" : "AppDark"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aprender" element={<Aprender />} />
        <Route path="/jugar" element={<Jugar />} />
      </Routes>
    </div>
  );
}
 