// Components
import { Routes, Route} from "react-router-dom";

import Home from "./routes/Home/Home.route";
import Navigation from "./routes/Navigation/Navigation.route";
import SignIn from "./routes/Sign-in/Sign-in.component";

// Stylesheet
import "./App.css";

const Shop =()=>{
  return <h1>This is shop page.</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route path="/" index element={<Home />} />
        <Route path="shop" element={<Shop/>} />
        <Route path="sign-in" element={<SignIn/>}/>
      </Route>
    </Routes>
  );
};

export default App;
