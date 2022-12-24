import "../styles/tabbar.css"
import {VscClose} from "react-icons/vsc";
import { useTheme } from "../ThemeProvider";
import {useSelector, useDispatch } from 'react-redux'
import { Link,useNavigate } from "react-router-dom";
export default function Tabbar(){

    const currentTheme= useTheme()
    const themeStyle= document.documentElement.style
    if(currentTheme==="white"){
        themeStyle.setProperty("--tabbar-bg","#ECECEC");
        themeStyle.setProperty("--tabbar-color","#96557C");
        themeStyle.setProperty("--tabbar-select","#ffffff");
        themeStyle.setProperty("--tabbar-close","#E9E9E9");

    }
    else if (currentTheme==="blue"){
        themeStyle.setProperty("--tabbar-bg","#004052");
        themeStyle.setProperty("--tabbar-color","#E2C085");
        themeStyle.setProperty("--tabbar-select","#002B37");
        themeStyle.setProperty("--tabbar-close","#1C3B43");
    }
    else if (currentTheme==="dark"){
        themeStyle.setProperty("--tabbar-bg","#2D2D2D");
        themeStyle.setProperty("--tabbar-color","#E2C085");
        themeStyle.setProperty("--tabbar-select","#1E1E1E");
        themeStyle.setProperty("--tabbar-close","#313232");
    }

    const tabListArr = useSelector((state) => state.tabList)
    const activeTab = useSelector((state) => state.activeTab.active)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    function closeTab(e,file){
        e.stopPropagation()
        dispatch({type:"REMOVE",payload:file})
        if(activeTab===file){
            navigate("/blank");
        }
    }
    
    const tabList = tabListArr.map((file,index)=>{
        return (<li key={index} onClick={()=>dispatch({type:"SELECT", payload:file})} className={activeTab===file? "tab-active":""}>
                    <Link to={file}>{file}</Link>
                    <VscClose className="tab-close" onClick={(e)=>closeTab(e,file)}/>
                </li>)
    })
    
    return(
        <div className="tabbar">
            <ul className="tab-list">
                {tabList}
            </ul>
        </div>
    )
}