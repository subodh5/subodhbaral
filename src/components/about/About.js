import React from 'react'
import "./about.css"

export default function About() {
  return (
    <div id='aboutpage' className='textarea'>
      <p > .about &#123; </p>
      <p style={{paddingLeft:"5%"}}><span className="key">about-me</span>: "computer-engineering-student &nbsp;&nbsp; chess-enthusiast" ;</p>
      <p style={{paddingLeft:"5%"}}><span className="key">programming-languages</span>: "c c++ python javascript"</p>
      <p style={{paddingLeft:"5%"}}><span className="key">interests</span>: "data-science &nbsp;&nbsp; data-visualization"</p>
      <p></p>
      <p>&#125;</p>
    </div>
  )
}
