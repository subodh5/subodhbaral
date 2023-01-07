import "../styles/textarea.css"
import { useTheme } from "../ThemeProvider";
import Home from "./Home";
import About from "./About"
import Connect from "./Connect"
import { Routes, Route, Outlet} from "react-router-dom"


export default function Textarea(){

    const currentTheme= useTheme()
    const themeStyle = document.documentElement.style
    if(currentTheme==="white"){
        themeStyle.setProperty("--textarea-bg","#FFFFFF");
    }
    else if (currentTheme==="blue"){
        themeStyle.setProperty("--textarea-bg","#002B36");
    }
    else if (currentTheme==="dark"){
        themeStyle.setProperty("--textarea-bg","#1E1E1E");
    }
    
    return(
        <main className="textarea">
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/subodhbaral" element={<Home/>}/>
                <Route exact path="/Home.html" element={<Home/>}/>
                <Route exact path="/About.css" element={<About/>}/>
                <Route exact path="/Connect.js" element={<Connect/>}/>
                <Route exact path="/blank" element={<Outlet/>}/>
          </Routes>
        </main>
    )
}