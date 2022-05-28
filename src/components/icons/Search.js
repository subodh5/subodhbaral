import { useState } from "react"

export default function Search() {
  const [navstyle, setnavStyle]=useState({iconColor:"#6292A0",txtvisible:false});
  return (
    <div>
        <svg width="30px" height="30px" viewBox="0 0 24 24" 
        onMouseOver={()=>setnavStyle({iconColor:"#FFF",txtvisible:true})}
        onMouseOut={()=>setnavStyle({iconColor:"#6292A0",txtvisible:false})}
        fill={navstyle.iconColor}>
            <path d="M15.25 0a8.25 8.25 0 0 0-6.18 13.72L1 22.88l1.12 1 8.05-9.12A8.251 8.251 0 1 0 15.25.01V0zm0 15a6.75 6.75 0 1 1 0-13.5 6.75 6.75 0 0 1 0 13.5z"/></svg>
        <span className="navtext" style={navstyle.txtvisible?{visibility:"visible"}:{visibility:"hidden"}}>Search</span>
    </div>
  )
}
