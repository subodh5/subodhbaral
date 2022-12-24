import vsLogo from '../images/vscode.png'
import '../styles/menubar.css'
import {VscChromeMinimize,VscChromeRestore,VscChromeClose} from "react-icons/vsc";
import { useTheme } from "../ThemeProvider";
export default function Menubar({changeTheme}){

    const currentTheme= useTheme()
    const themeStyle = document.documentElement.style
    if(currentTheme==="white"){
        themeStyle.setProperty("--menubar-bg","#DDDDDD");
        themeStyle.setProperty("--menubar-color","#616161");
        themeStyle.setProperty("--menubar-hover","#D2D2D2");
        themeStyle.setProperty("--menubar-winhover","#C0C0C0");
    }
    else if (currentTheme==="blue"){
        themeStyle.setProperty("--menubar-bg","#0E2931");
        themeStyle.setProperty("--menubar-color","#668891");
        themeStyle.setProperty("--menubar-hover","#26393F");
        themeStyle.setProperty("--menubar-winhover","#224853");
    }
    else if (currentTheme==="dark"){
        themeStyle.setProperty("--menubar-bg","#3C3C3C");
        themeStyle.setProperty("--menubar-color","#A3A3A3");
        themeStyle.setProperty("--menubar-hover","#454646");
        themeStyle.setProperty("--menubar-winhover","#565656");
    }
    
    return(
        <div className="menubar">
            <ul className="menu-list">
                <li><img src={vsLogo} alt="vsCode" /></li>
                <li>File</li>
                <li>Edit</li>
                <li>Selection</li>
                <li>View</li>
                <li>Go</li>
                <li>Run</li>
                <li>Terminal</li>
                <li>Help</li>
            </ul>
            <ul className="window-option">
                <li style={{fontSize:"16px", margin:"4px"}}>Color Theme:</li>
                <li className='theme-color light' onClick={()=>changeTheme("white")}></li>
                <li className='theme-color blue' onClick={()=>changeTheme("blue")}></li>
                <li className='theme-color dark' onClick={()=>changeTheme("dark")}></li>
                <li className='minimize'><VscChromeMinimize/></li>
                <li className='maximize'><VscChromeRestore/></li>
                <li className='close'><VscChromeClose/></li>
            
            </ul>
        </div>
    )
}