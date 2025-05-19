import React, {useState, useEffect} from 'react'
import './HomeScreen.css'
import ProductList from '../../Components/ProductList/ProductList.jsx'   
import MainBanner from '../../Components/MainBanner/MainBanner.jsx'
import InformativeSection from '../../Components/InformativeSection/InformativeSection.jsx'
import '../../Components/MainBanner/MainBanner.css'
import '../../Components/Header/Header.css'

const HomeScreen = ({
  setShowSuccess, 
  setLastAddedProduct, 
  cart,
  addToCart,
  handleBuy,
  addOne,
  removeOne,
  removeAll,
  setQuantity,
  }) => {

 
  return (
    <div>
      <div className="home-banner">
        <MainBanner />
      </div>
      <div className="home-info">
        <InformativeSection />
      </div>
      <div className='site-container'>
        <main className='main-container'>
          <div>
            <div className='page-title-container'> 
              <h2 className='section-title'>Empezá a comprar</h2> 
            </div>
            <ProductList addToCart={addToCart} handleBuy={handleBuy} isSwiper={true} />
          </div>
        </main>  
      </div>
    </div>
  )
}

export default HomeScreen
