import { useState } from "react";
import { VscChevronRight,VscChevronDown } from "react-icons/vsc";
import '../styles/fileexplorer.css'
import { useTheme } from "../ThemeProvider";
import {useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";


export default function FileExplorer(){
    const currentTheme= useTheme()
    const themeStyle = document.documentElement.style
    if(currentTheme==="white"){
        themeStyle.setProperty("--file-bg","#F3F3F3");
        themeStyle.setProperty("--file-color","#906178");
        themeStyle.setProperty("--file-hover","#E4E6F1");
        themeStyle.setProperty("--file-select","#E4E6F1");
    }
    else if (currentTheme==="blue"){
        themeStyle.setProperty("--file-bg","#00212B");
        themeStyle.setProperty("--file-color","#ccc");
        themeStyle.setProperty("--file-hover","#003440");
        themeStyle.setProperty("--file-select","#003440");
    }
    else if (currentTheme==="dark"){
        themeStyle.setProperty("--file-bg","#252526");
        themeStyle.setProperty("--file-color","#C2CCAC");
        themeStyle.setProperty("--file-hover","#2A2D2E");
        themeStyle.setProperty("--file-select","#37373D");
    }

    const [srcClick, setsrcClick] = useState(true)
    const dispatch = useDispatch()
    const activeList = useSelector((state) => state.activeTab.active)
    
    function selectFile(file){
        dispatch({type:"SELECT",payload:file})
        dispatch({type:"ADD",payload:file})
    }

    const files=["Home.html","About.css","Connect.js"]
    const fileList = files.map((file,index)=>{
        return (<li key={index} onClick={()=>selectFile(file)} className={activeList===file? "list-select":""}>
            <Link to={file}>{file}</Link>
        </li>)
    })

    return(
        <div className="file-explorer">
            <div><VscChevronDown/> VSCODE</div>
            <ul className="explorer-list">
                <li><VscChevronRight/> node_modules</li>
                <li><VscChevronRight/> public</li>
                <li onClick={()=>setsrcClick(prev=>!prev)}> {srcClick?<VscChevronDown/>:<VscChevronRight/>} 
                    src
                </li>
                
                {srcClick && 
                    <ul className="src-list">
                        {fileList}
                    </ul>
                }
            </ul>
        </div>
    )
}