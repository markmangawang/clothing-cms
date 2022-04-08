// Stylesheet
import "./App.css";

// Components
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home.route";

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  );
};

export default App;
