import React from 'react'
import '../../App.css'
import './ProductCard.css'
import BuyButton from '../BuyButton/BuyButton.jsx'
import { Link } from 'react-router-dom'
import ICONS from '../Icons/Icons.jsx'

const ProductCard = ({id,title,price,discount,oldprice,img,addToCart,handleBuy}) => {
  
  return (
    <div className='product-card-container'>
      <Link to={`/product/${id}`} className="product-card-link">
      <div className="product-card-img" > 
      <span className="discount-price">{discount}</span>  
      <img src={img} alt={title}/>
      </div>
      <div className="product-info-container">
        <h5 className="product-card-name mb-1">{title}</h5>
        <div className="product-price-container mb-1">
          <div className="product-discount-container text-small mb-1">
            <span className="before-price pr-1">${oldprice}</span> 
          </div>
          <span className="current-price">${price}</span>  
        </div>
      </div>
      </Link>
      <div className="product-card-button-container">
          <BuyButton handleBuy={handleBuy}/>
          <Link to={`/product/${id}`} className="product-card-link">
            <button className="product-card-detail-button btn-default btn-secondary">
              <i className="icon">
                <ICONS.eye />
              </i>
              Ver
            </button>
          </Link>
        </div>
    </div>
  )
}

export {ProductCard}