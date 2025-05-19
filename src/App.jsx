import React, {useState} from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen/HomeScreen.jsx'
import ContactScreen from './Screens/ContactScreen/ContactScreen.jsx'
import ProductsScreen from './Screens/ProductsScreen/ProductsScreen.jsx'
import AboutUsScreen from './Screens/AboutUsScreen/AboutUsScreen.jsx'
import LoginScreen from './Screens/LoginScreen/LoginScreen.jsx'
import RegisterScreen from './Screens/RegisterScreen/RegisterScreen.jsx'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import CartSidebar from './Components/CartSidebar/CartSidebar.jsx'
import ProductDetailScreen from './Screens/ProductDetailScreen/ProductDetailScreen.jsx'
import Notification from './Components/Notification/Notification.jsx'
import './Components/Notification/Notification.css'


function App() {
  // Estado para el notificación de éxito al agregar al carrito
  const [showSuccess, setShowSuccess] = useState(false)
  const [lastAddedProduct, setLastAddedProduct] = useState(null)

  // Estado para el carrito
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState([])

  // Función para agregar productos al carrito, la pongo acá en la app.jsx así puedo pasarla como prop a los componentes que la necesiten, ya que la pueden usar tanto el Cart como el ProductCard.
  const addToCart = (product) => {
    setCart(prevCart => {
      const found = prevCart.find(item => item.id === product.id)
      if (found) {
        // Si ya está, suma 1 a la cantidad
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      } else {
        // Si no está, lo agrega con cantidad 1
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })
  }

  // Funciones para sumar y restar la cantidad de productos en el carrito. Son globales porque las necesito tanto en el Cart como en el ProductCard.
  const addOne = (id) => {
  setCart(cart =>
    cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
  )
  } 

  const removeOne = (id) => {
    setCart(cart =>
      cart
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0) // elimina si la cantidad llega a 0
    )
  }

  // Función para eliminar todos los productos de un mismo tipo del carrito si se toca el icono del tacho de basura.
  const removeAll = (id) => {
    setCart(cart =>
      cart
        .filter(item => item.id !== id ) 
        // Si el id del item es distinto al id que le pasé, lo mantengo en el carrito. Si no, lo elimino.
    )
  }

  const setQuantity = (id, value) => {
  setCart(cart =>
    cart.map(item =>
      item.id === id ? { ...item, quantity: value } : item
    )
  )
  }

  // Mensaje de éxito al agregar al carrito
  const handleBuy = (product) => {
    addToCart(product)
    setLastAddedProduct(product)
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }
  

  return (
    <div>
    <Header onCartClick={() => setCartOpen(true)}/>
    <CartSidebar
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        addToCart={addToCart}
        handleBuy={handleBuy}
        addOne={addOne}
        removeOne={removeOne}
        removeAll={removeAll}
        setQuantity={setQuantity}
      />
    <Notification show={showSuccess} product={lastAddedProduct} message="Añadido al carrito exitosamente" />
    <Routes>
      <Route path="/" element={
        <HomeScreen 
        setShowSuccess={setShowSuccess} 
        setLastAddedProduct={setLastAddedProduct} 
        cart={cart}
        addToCart={addToCart}
        handleBuy={handleBuy}
        addOne={addOne}
        removeOne={removeOne}
        removeAll={removeAll}
        setQuantity={setQuantity}
        />} />
      <Route path="/products" element={
        <ProductsScreen
        addToCart={addToCart}
        handleBuy={handleBuy} 
        />} />
      <Route path="/product/:product_id" element={
        <ProductDetailScreen
        addToCart={addToCart}
        handleBuy={handleBuy} 
        />} />
      <Route path="/cart" element={<h1>Carrito</h1>} />
      <Route path="/about-us" element={<AboutUsScreen/>} />
      <Route path="/contact" element={<ContactScreen/>} />
      <Route path="/login" element={<LoginScreen/>} />
      <Route path="/register" element={<RegisterScreen/>} />
    </Routes>
    <Footer/>
    </div>
    )
}


export default App
