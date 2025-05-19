import React from 'react'
import { Link } from 'react-router-dom'
import './ProductDetail.css'
import BuyButton from '../BuyButton/BuyButton.jsx'

const ProductDetail = ({product, addToCart, handleBuy}) => {
  return (
    <div className="site-container fit-height">
        <div className='product-detail-container'>
        <div className="product-image">
            <img src={product.img} alt={product.name} className="product-detail-img" />
        </div>
        <div className="product-detail-info">
            <div className="breadcrumbs text-small">
                <Link to="/">
                <span className="breadcrumb">Inicio</span>
                </Link>
                <span className="breadcrumb"> / </span>
                 <Link to="/products">
                <span className="breadcrumb">Productos</span>
                </Link>
                <span className="breadcrumb"> / </span>
                <Link to={`/product/${product.id}`}>
                <span className="breadcrumb">{product.title}</span>
                </Link>
            </div>
            <h1>{product.title}</h1>
            <span className="before-price">${product.formattedOldPrice}</span>
            <br></br>
            <div className="current-price-container">
                <span className="current-price">${product.formattedPrice}</span>
                <span className="discount-price">{product.discount}</span>
            </div>
            <div 
                className="product-detail-description"
                dangerouslySetInnerHTML={{ __html: product.description }}
            />
            <div className="product-detail-button-container">
            <BuyButton handleBuy={() => handleBuy(product)}/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ProductDetail