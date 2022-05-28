import { useState } from "react";

export default function Explorer(props) {
  const [navstyle, setnavStyle]=useState({iconColor:"#6292A0",txtvisible:false});
    return (
      <div>
      <svg
        width={30}
        height={30}
        viewBox="0 0 24 24"
        onMouseOver={()=>setnavStyle({iconColor:"#FFF",txtvisible:true})}
        onMouseOut={()=>setnavStyle({iconColor:"#6292A0",txtvisible:false})}
        fill={navstyle.iconColor}
      >
        <path d="M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38h-12v-15H7v9.07L8.5 18h6v4.5zm6-6h-12v-15H16V6h4.5v10.5z" />
      </svg>
      <span className="navtext" style={navstyle.txtvisible?{visibility:"visible"}:{visibility:"hidden"}}>Explorer</span>
      </div>
    );
  };
  