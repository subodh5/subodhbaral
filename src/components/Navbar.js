import React from 'react'
import Account from './icons/Accounts'
import Explorer from './icons/Explorer'
import Settings from './icons/Settings'
import Sourcecontrol from './icons/Sourcecontrol'
import Debug from './icons/Debug'
import Extension from './icons/Extension'
import Search from './icons/Search'
import RemoteExp from './icons/RemoteExp'

export default function Navbar() {

  return (
    <div className="navbar">
        <ul className="upper">
            <li><Explorer /></li>
            <li><Search/></li>
            <li><Sourcecontrol/></li>
            <li><Debug/></li>
            <li><RemoteExp/></li>
            <li><Extension/></li>
        </ul>
        <ul className="lower">
            <li><Account/></li>
            <li><Settings/></li>
        </ul>
    </div>
  )
}
