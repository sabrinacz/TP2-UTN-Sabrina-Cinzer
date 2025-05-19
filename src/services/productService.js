import { ProductCard } from "../Components/ProductCard/ProductCard"

// Helper function para calcular y formatear precios
const formatProductData = (product) => ({
    ...product,
    discount: Math.round(100 - (product.price * 100) / product.oldprice) + '% OFF',
    formattedPrice: product.price.toLocaleString('es-AR'),
    formattedOldPrice: product.oldprice.toLocaleString('es-AR')
})

export const getProducts = async () => {   
    try {
        const response = await fetch('/api/productsdata.json', { method: 'GET', })
        if (!response.ok) {
            throw new Error('Error de conexión')
        }
        const data = await response.json()
        // Aplicamos el formato a todos los productos
        return data.map(product => formatProductData(product))
    } catch (error) {
        console.error('No pudimos cargar los productos', error)
        return null
    }
}

export const getProductById = async ({product_id}) => {
    const products = await getProducts()
    const product = products.find(product => product.id == product_id)
    // El producto ya viene con el descuento calculado de getProducts()
    return product
}