import React from 'react'
import photo from "../images/photo.png"
import "../styles/Home.css"
import { useTheme } from "../ThemeProvider"

export default function Home() {
  const currentTheme= useTheme()
  const themeStyle = document.documentElement.style
  if(currentTheme==="white"){
      themeStyle.setProperty("--home-tagcolor","#800000");
      themeStyle.setProperty("--home-txtcolor","#000000");
  }
  else if (currentTheme==="blue"){
      themeStyle.setProperty("--home-tagcolor","#3084DA");
      themeStyle.setProperty("--home-txtcolor","#bfe2f0");
  }
  else if (currentTheme==="dark"){
      themeStyle.setProperty("--home-tagcolor","#3E9CCA");
      themeStyle.setProperty("--home-txtcolor","#B1D4D4");
  }
  return (
    <div className='homepage'>
      <h1>&#x3C;h2&#x3E; <span>HomePage</span> &#x3C;/h2&#x3E;</h1>
      <div className="photo"><img src={photo} alt="myphoto"/></div>
      <div className="name">&#x3C;h1&#x3E; <span>Subodh Baral</span> &#x3C;/h1&#x3E;</div>
      <div className='desc'>&#x3C;p&#x3E; <span>Computer Engineering Student at IOE, Pulchowk Campus</span> &#x3C;/p&#x3E;</div>
    </div>
  )
}