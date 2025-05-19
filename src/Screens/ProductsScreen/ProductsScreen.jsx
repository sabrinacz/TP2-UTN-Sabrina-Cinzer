import React from 'react'
import ProductList from '../../Components/ProductList/ProductList'

const ProductsScreen = ({addToCart, handleBuy}) => {
  return (
    <div className="site-container">
      <div className="page-title-container">
        <h1 className="page-title">Nuestros productos</h1>
        <p>Acá vas a encontrar todos nuestros Pelusitos.</p>
      </div>
      <ProductList 
        addToCart={addToCart}
        handleBuy={handleBuy}
      />
    </div>
  )
}

export default ProductsScreen
