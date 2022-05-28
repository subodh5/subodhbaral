import { useState } from "react"

export default function Extension() {
  const [navstyle, setnavStyle]=useState({iconColor:"#6292A0",txtvisible:false});
  return (
    <div>
        <svg
            width="34"
            height="34"
            viewBox="0 0 24 24"
            onMouseOver={()=>setnavStyle({iconColor:"#FFF",txtvisible:true})}
            onMouseOut={()=>setnavStyle({iconColor:"#6292A0",txtvisible:false})}
            fill={navstyle.iconColor}
            >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13 3H21V11H13V3ZM15 5H19V9H15V5Z"
                
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 21V13H11V7H3V21H17ZM9 9H5V13H9V9ZM5 19L5 15H9V19H5ZM11 19V15H15V19H11Z"
                
            />
        </svg>
        <span className="navtext" style={navstyle.txtvisible?{visibility:"visible"}:{visibility:"hidden"}}>Extensions</span>
    </div>
  )
}
