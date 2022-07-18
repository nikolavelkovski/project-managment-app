import React from 'react'
import './NavBar.css'
import siteLogo from './../assets/temple.svg'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className='navbar'>
        <ul>
            <li className='logo'>
                <img src={siteLogo} alt="dojo logo" />
                <span>The Dojo</span>
            </li>
           
            <li>
                <Link to = '/login'>Login</Link>
            </li>
            <li >
            <Link to = '/signup'>Signup</Link>
            </li>
            <li >
                <button className='btn'>Logout</button>
            </li>
        </ul>
    </nav>
  )
}
