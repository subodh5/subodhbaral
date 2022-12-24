import React from 'react'
import "../styles/About.css"
import { useTheme } from "../ThemeProvider"

export default function About() {

  const currentTheme= useTheme()
  const themeStyle = document.documentElement.style
  if(currentTheme==="white"){
      themeStyle.setProperty("--about-keycolor","#E50000");
      themeStyle.setProperty("--about-valuecolor","#098658");
  }
  else if (currentTheme==="blue"){
      themeStyle.setProperty("--about-keycolor","#7dd373");
      themeStyle.setProperty("--about-valuecolor","#bfe2f0");
  }
  else if (currentTheme==="dark"){
      themeStyle.setProperty("--about-keycolor","#7BDCFE");
      themeStyle.setProperty("--about-valuecolor","#B5C077");
  }

  return (
    <div className='aboutpage'>
      <p className='about-p'> .about &#123; </p>
      <p className='style-line'><span className="key">about-me</span>: "computer-engineering-student &nbsp;&nbsp; chess-enthusiast" ;</p>
      <p className='style-line'><span className="key">programming-languages</span>: "python javascript"</p>
      <p className='style-line'><span className="key">frameworks and libraries</span>: "reactJS &nbsp;&nbsp;ExpressJS&nbsp;&nbsp; jQuery"</p>
      <p className='style-line'><span className="key">database</span>: "mySQL mongoDB"</p>
      <p className='style-line'><span className="key">other interests</span>: "data-science &nbsp;&nbsp; data-visualization"</p>
      <p></p>
      <p className='about-p'>&#125;</p>
    </div>
  )
}