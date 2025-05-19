import React from 'react'
import './MainBanner.css'
import { Link } from 'react-router-dom'

const MainBanner = () => {
  return (
    <div className="main-banner">
      <img
        src="https://i.ibb.co/wZhMBX9D/banner-desk-2.png"
        alt="banner desktop"
        className="banner-img banner-img-desktop"
      />
      <img
        src="https://i.ibb.co/yBWT8PYR/banner-mobile-2.png"
        alt="banner mobile"
        className="banner-img banner-img-mobile"
      />
      <div className="main-banner-title-overlay">
        <div className="main-banner-text">
          <span className="discount-message">HASTA 15% OFF</span>
          <h1 className="main-banner-title mt-2">
            Ternura en miniatura
          </h1>
          <h2 className="main-banner-description">
            Nuestros Pelusitos son pequeños peluches de lana, hechos a mano.
            La compañía que necesitabas. 
          </h2>
        </div>
        <Link to="/products">
        <button className="mt-2 btn-default btn-primary main-banner-button">
            Comprá ahora
        </button>
        </Link>
      </div>
    </div>
  )
}

export default MainBanner
