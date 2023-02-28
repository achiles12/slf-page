
import BlockInfo from "./components/BlockInfo";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Insurance from "./components/Insurance";
import Investments from "./components/Investments";
import LifeGoals from "./components/LifeGoals";
import SideBar from "./components/SideBar";

import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="ui fitted divider"></div>
      <SideBar />
      <Routes>
        <Route path="/" element={ <Home/> } />
		<Route path="/slf-page" element={ <Home/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="insurance" element={ <Insurance/> } />
        <Route path="investments" element={ <Investments/> } />
        <Route path="lifegoals" element={ <LifeGoals/> } />
      </Routes>

      <BlockInfo/>
      
      
    </div>
  );
}

export default App;
