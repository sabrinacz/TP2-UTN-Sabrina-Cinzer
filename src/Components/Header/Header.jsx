import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import ICONS from '../Icons/Icons.jsx'
import Navbar from '../Navbar/Navbar.jsx'

const Header = ({onCartClick}) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='sticky-header'>
      <header className="header site-container">
       <div className="header-background">
        <div className="header-container">
            <button
            className="hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú">
                <i className="icon">
                    <ICONS.menu />
                </i>
            </button>
            <Navbar setMenuOpen={setMenuOpen}/>
            <NavLink to={'/'}>
              <span className="logo">
                {/* Uso png por ahora, hasta que pueda ponerlo como svg luego */}
                <img src="https://i.ibb.co/PvcpHPc3/Casa-pelusa-logo.png" alt="Casa Pelusa"/>
                </span>
            </NavLink>
            <div className="header-links">
              <NavLink className="cart" onClick={onCartClick}>
                <i className="icon">
                  <ICONS.cart />
                </i>
              </NavLink>
              <NavLink to={'/login'} className="profile">
                <i className="icon">
                  <ICONS.user />
                </i>
              </NavLink>
            </div>
        </div>
      </div>
      {/* Overlay y Drawer solo en mobile */}
      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)} />}
      <nav className={`nav-drawer${menuOpen ? ' open' : ''}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)} aria-label="Cerrar menú">
            <i className="icon">
                <ICONS.close />
            </i>
        </button> 
        <Navbar setMenuOpen={setMenuOpen}/>
      </nav>
      </header>
    </div>
  )
}

export default Header