import { useState } from "react"
const Settings = (props) => {
  const [navstyle, setnavStyle]=useState({iconColor:"#6292A0",txtvisible:false});
    return (
      <div>
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        onMouseOver={()=>setnavStyle({iconColor:"#FFF",txtvisible:true})}
        onMouseOut={()=>setnavStyle({iconColor:"#6292A0",txtvisible:false})}
        fill={navstyle.iconColor}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.85 8.75l4.15.83v4.84l-4.15.83 2.35 3.52-3.43 3.43-3.52-2.35-.83 4.15H9.58l-.83-4.15-3.52 2.35-3.43-3.43 2.35-3.52L0 14.42V9.58l4.15-.83L1.8 5.23 5.23 1.8l3.52 2.35L9.58 0h4.84l.83 4.15 3.52-2.35 3.43 3.43-2.35 3.52zm-1.57 5.07l4-.81v-2l-4-.81-.54-1.3 2.29-3.43-1.43-1.43-3.43 2.29-1.3-.54-.81-4h-2l-.81 4-1.3.54-3.43-2.29-1.43 1.43L6.38 8.9l-.54 1.3-4 .81v2l4 .81.54 1.3-2.29 3.43 1.43 1.43 3.43-2.29 1.3.54.81 4h2l.81-4 1.3-.54 3.43 2.29 1.43-1.43-2.29-3.43.54-1.3zm-8.186-4.672A3.43 3.43 0 0112 8.57 3.44 3.44 0 0115.43 12a3.43 3.43 0 11-5.336-2.852zm.956 4.274c.281.188.612.288.95.288A1.7 1.7 0 0013.71 12a1.71 1.71 0 10-2.66 1.422z"
        />
      </svg>
      <span className="navtext" style={navstyle.txtvisible?{visibility:"visible"}:{visibility:"hidden"}}>Manage</span>
      </div>
    );
  };
  
  export default Settings;