import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../services/productService'
import ProductDetail from '../../Components/ProductDetail/ProductDetail.jsx'
import './ProductDetailScreen.css'

const ProductDetailScreen = ({addToCart, handleBuy}) => {
    const [product, setProduct] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(false)

    const { product_id } = useParams()
    const id = Number(product_id)

    const getProductDetail = async () => { 
        setLoading(true)
        setTimeout(
            async () => {
                const product_detail_response = await getProductById({product_id})
                if (product_detail_response) {
                    setProduct(product_detail_response)
                } else {
                    setError('Error al obtener el producto')
                }
                setLoading(false)           
            }, 
            1000
        )
    }

    useEffect(() => {
        getProductDetail()
    }, [])

    let content

    if(loading) {  
        content = <div className="site-container fit-height"><div className="loading-screen"><h1 className="loading-item"><img src="https://i.gifer.com/ZKZg.gif" alt="loading gif"/></h1></div></div>
    }
    else if (!loading && !product) {
        content = <div className="site-container"><h1>No se encontró el producto</h1></div>
    }
    else { 
        content = <div><ProductDetail product={product} addToCart={addToCart} handleBuy={handleBuy}/></div>
    }

  return (
    <div>
      {content}
    </div>
  )
}

export default ProductDetailScreen
