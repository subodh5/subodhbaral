import "../styles/sidebar.css"
import { VscFiles,VscSearch,VscDebugAlt,VscRemoteExplorer,VscExtensions,VscSourceControl,VscAccount,VscSettingsGear} from "react-icons/vsc";
import { useTheme } from "../ThemeProvider";
export default function Sidebar(){
    
    const currentTheme= useTheme()
    const themeStyle = document.documentElement.style
    if(currentTheme==="white"){
        themeStyle.setProperty("--sidebar-bg","#333333");
        themeStyle.setProperty("--sidebar-color","#858585");
        themeStyle.setProperty("--sidebar-namebg","#F3F3F3");
    }
    else if (currentTheme==="blue"){
        themeStyle.setProperty("--sidebar-bg","#003847");
        themeStyle.setProperty("--sidebar-color","#668891");
        themeStyle.setProperty("--sidebar-namebg","#003847");
    }
    else if (currentTheme==="dark"){
        themeStyle.setProperty("--sidebar-bg","#333333");
        themeStyle.setProperty("--sidebar-color","#858585");
        themeStyle.setProperty("--sidebar-namebg","#333333");
    }

    return(
        <aside className="sidebar">
            <ul className="icon-list">
                <li><VscFiles/><span className="icon-name">Explorer</span></li>
                <li><VscSearch/><span className="icon-name">Search</span></li>
                <li><VscDebugAlt/><span className="icon-name">Run and Debug</span></li>
                <li><VscSourceControl/><span className="icon-name">Source Control</span></li>
                <li><VscRemoteExplorer/><span className="icon-name">Remote Explorer</span></li>
                <li><VscExtensions/><span className="icon-name">Extensions</span></li>
            </ul>
            <ul className="icon-list">
                <li><VscAccount/><span className="icon-name">Accounts</span></li>
                <li><VscSettingsGear/><span className="icon-name">Manage</span></li>
            </ul>
        </aside>
    )
}