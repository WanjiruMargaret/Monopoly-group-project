import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Board from "./Board";
import StartScreen from "./StartScreen";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </Router>
  );
}

export default Routing;