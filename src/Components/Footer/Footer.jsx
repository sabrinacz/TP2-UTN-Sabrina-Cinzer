import React from 'react'
import { NavLink } from 'react-router-dom'
import ICONS from '../Icons/Icons.jsx'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='site-container'>
        <div className="footer-content">
          {/* Logo Section */}
          <div className="footer-logo-section">
            <NavLink to={'/'}>
              <span className="footer-logo">
                <img src="https://i.ibb.co/PvcpHPc3/Casa-pelusa-logo.png" alt="Casa Pelusa"/>
              </span>
            </NavLink>
            <p className="footer-description">
              Ternura en miniatura
            </p>
          </div>

          {/* Navigation Section */}
          <div className="footer-nav-section">
            <h4>Navegación</h4>
            <nav className="footer-nav">
              <NavLink to="/">Inicio</NavLink>
              <NavLink to="/products">Productos</NavLink>
              <NavLink to="/about">Nosotros</NavLink>
              <NavLink to="/contact">Contacto</NavLink>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="footer-contact-section">
            <h4>Contacto</h4>
            <div className="footer-contact-info">
              <a href="mailto:info@casapelusa.com">
                <i><ICONS.mail /></i>
                info@casapelusa.com
              </a>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="footer-social-section">
            <h4>Seguinos</h4>
            <div className="footer-social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i><ICONS.instagram /></i>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Casa Pelusa. Todos los derechos reservados.</p> 
          <a href="https://linkedin.com/in/sabrinacinzer" target="_blank" rel="noopener noreferrer">Diseño y desarrollo por Sabrina Cinzer.</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer