import React, {useEffect, useState} from 'react'
import Cart from '../Cart/Cart.jsx'
import './CartSidebar.css'

const CartSidebar = ({
    open,
    onClose,
    cart,
    addOne,
    removeOne,
    removeAll,
    setQuantity,
    }) => {


   const [showOverlay, setShowOverlay] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

    useEffect(() => {
    if (open) {
      setShowOverlay(true)
      setFadeOut(false)
    } else if (showOverlay) {
      setFadeOut(true)
      const timeout = setTimeout(() => {
        setShowOverlay(false)
        setFadeOut(false)
      }, 300)
      return () => clearTimeout(timeout)
    }
  }, [open])

  const handleOverlayClose = () => {
    if (onClose) onClose()
  }

  return (
    <>
      <div className={`cart-sidebar${open ? ' open' : ''}`}>
        <button className="close-cart" onClick={handleOverlayClose}>×</button>
        <Cart
          cart={cart}
          addOne={addOne}
          removeOne={removeOne}
          removeAll={removeAll}
          setQuantity={setQuantity}
        />
      </div>
      {showOverlay && (
        <div
          className={`cart-overlay${fadeOut ? ' fade-out' : ''}`}
          onClick={handleOverlayClose}
        />
      )}
    </>  
  )
}

export default CartSidebar
