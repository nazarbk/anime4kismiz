import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <header className='header'>
        <a href="" className="logo">ANIME4KISMIZ</a>

        <nav className="navbar">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Login</a>
        </nav>
    </header>
  )
}

export default Navbar