import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({setMenuOpen}) => {

  // Definí el menú como un array de objetos
  const menu = [
    { name: 'Inicio', path: '/' },
    { name: 'Productos', path: '/products' },
    { name: 'Sobre nosotros', path: '/about-us' },
    { name: 'Contactános', path: '/contact' },
  ]

  // Hice una función para generar el menú, ya que se repite en dos lugares, en desktop y mobile
  const generateMenu = () => {
    return menu.map((item, index) => (
      <li key={index}>
        <NavLink 
        to={item.path}
        className={({ isActive }) => (isActive ? 'active' : '')}
        onClick={() => setMenuOpen && setMenuOpen(false)}
        >
        {item.name}
        </NavLink>
      </li>
    ))
  }

  return (
    <nav className="navbar">
        <ul>
            {generateMenu()}
        </ul>
    </nav>
  )
}

export default Navbar
