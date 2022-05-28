import React from 'react'
import photo from "../images/photo.png"
import "./home.css"

export default function Home() {
  return (
    <div id='homepage' className='textarea'>
      <h1>&#x3C;h2&#x3E; <span>HomePage</span> &#x3C;/h2&#x3E;</h1>
      <div className="photo"><img src={photo} alt="myphoto"/></div>
      <div className="name">&#x3C;h1&#x3E; <span>Subodh Baral</span> &#x3C;/h1&#x3E;</div>
      <div className='desc'>&#x3C;p&#x3E; <span>Computer Engineering Student at IOE, Pulchowk Campus</span> &#x3C;/p&#x3E;</div>
    </div>
  )
}
