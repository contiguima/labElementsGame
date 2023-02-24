import { Route, Routes } from "react-router-dom";
import Aprender from "./pages/Aprender";
import Home from "./pages/Home";
import Jugar from "./pages/Jugar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aprender" element={<Aprender />} />
        <Route path="/jugar" element={<Jugar />} />
      </Routes>
    </div>
  );
}
