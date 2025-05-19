import React, { useState, useEffect } from 'react'
import { ProductCard } from '../ProductCard/ProductCard'
import '../ProductCard/ProductCard.css'
import './ProductList.css'
import { getProducts } from '../../services/productService'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'

const ProductList = ({ addToCart, handleBuy, isSwiper }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getProductsList = async () => {
      setLoading(true)
      const product_list_response = await getProducts()
      setTimeout(() => {
        if (product_list_response) {
          setProducts(product_list_response)
        } else {
          setError('Error al cargar los productos')
        }
        setLoading(false)
      }, 1000)
    }
    getProductsList()
  }, [])

  const swiperConfig = {
    modules: [Navigation, Pagination],
    navigation: true,
    pagination: { clickable: true },
    slidesPerView: 1.8,
    spaceBetween: 16,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      900: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 16,
      }
    },
    loop: true,
    observer: true, // Hace que Swiper se actualice cuando cambian los children
    observeParents: true,
    watchOverflow: true, // Deshabilita navegación/loop cuando no hay suficientes slides
  }


    let content
  if (loading && isSwiper) {
    // Para el skeleton, usamos la misma config pero sin loop
    content = (
      <Swiper {...swiperConfig} loop={false}>
        {[...Array(4)].map((_, i) => (
          <SwiperSlide key={i}>
            <div className="product-card-skeleton product-card-container">
              <div className="skeleton-img product-card-img" />
              <div className="skeleton-title" />
              <div className="skeleton-price" />
              <div className="skeleton-btn" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    )
  } 
  else if (loading && !isSwiper) {
    content = (
      <>
        {[...Array(4)].map((_, i) => (
          <div className="product-card-skeleton product-card-container" key={i}>
            <div className="skeleton-img product-card-img" />
            <div className="skeleton-title" />
            <div className="skeleton-price" />
            <div className="skeleton-btn" />
          </div>
        ))}
      </>
    )
  }
  else if (isSwiper && products.length > 0) {
    content = (
      <Swiper {...swiperConfig}>
        {products.map(product => (
          <SwiperSlide key={product.id}>
            <ProductCard
                    {...product}
                    addToCart={() => addToCart(product)}
                    handleBuy={() => handleBuy(product)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    )
  } else {
    content = products.map(product => (
      <ProductCard
        {...product}
        discount={Math.round(100 - (product.price * 100) / product.oldprice) + '% OFF'}
        price={product.price.toLocaleString('es-AR')}
        oldprice={product.oldprice.toLocaleString('es-AR')}
        key={product.id}
        addToCart={() => addToCart(product)}
        handleBuy={() => handleBuy(product)}
      />
    ))
  }

  return (
    <div className='product-gallery-container'>
      <div className={`product-list-container ${!isSwiper ? 'product-list-flex' : ''}`}>
        {content}
      </div>
    </div>
  )
}

export default ProductList