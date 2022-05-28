import { Routes, Route } from "react-router-dom"
import Menubar from "./components/Menubar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Tabbar from "./components/Tabbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Connect from "./components/connect/Connect";
import "./App.css"

function App() {
  return (
    <div>
      <Menubar/>

      <div className="clientarea">
        <Navbar/>
        <div className="mainbody">
          <Tabbar/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/subodhbaral" element={<Home/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/connect" element={<Connect/>}/>
          </Routes>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
