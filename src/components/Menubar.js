import React from 'react'
import logo from "./images/vscode.png"
export default function Menubar() {
  return (
    <div className='menubar'>
            <ul>
            <img src={logo} alt="logo"style={{height:"3vh", margin:"10px"}}/>
            <li>File</li>
            <li>Edit</li>
            <li>Selection</li>
            <li>View</li>
            <li>Go</li>
            <li>Run</li>
            <li>Terminal</li>
            <li>Help</li>
        </ul>
    </div>
  )
}
