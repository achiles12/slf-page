import BlockInfo from "./components/BlockInfo";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

// className='bg-gradient-to-b from-amber-600 to-yellow-400'
function App() {
  return (
    <div className="App" >
      <div >
        <NavBar />
        <div className="items-end">
          <Home/>
          <SideBar/>
          <BlockInfo/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
