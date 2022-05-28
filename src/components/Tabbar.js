import React,{useState} from 'react'
import { Link } from "react-router-dom";

export default function Tabbar() {
  const [selected, setSelected]=useState("home");

  return (
    <div className="tabbar">

        <Link to="/" onClick={()=>setSelected("home")} className={selected==="home"?"tabselected":"tab"}>
          <span style={{color:"red"}}>&lt;/&gt;</span> home.html
        </Link>

        <Link to="/about" onClick={()=>setSelected("about")}  className={selected==="about"?"tabselected":"tab"}>
          <span style={{color:"blue"}}>#</span> about.css
        </Link>

        <Link to="/connect" onClick={()=>setSelected("connect")} className={selected==="connect"?"tabselected":"tab"}>
          <span style={{color:"yellow"}}>JS</span> connect.js
        </Link>
    </div>
)
}
