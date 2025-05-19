import React, { useState } from 'react'
import '../../App.css'
import ICONS from '../Icons/Icons.jsx'

const buyButtonStates = Object.freeze ({ 
    notAddedToCart: 'notAddedToCart',
    addedToCart: 'addedToCart',
    loading: 'loading',
})

const BuyButton = ({handleBuy}) => {
    const [buyButtonState, setbuyButtonState] = useState(buyButtonStates.notAddedToCart)

    // Fijo el estado que se va a usar cuando toque el botón y se ejecute la acción buy
    const buy = () => {
    setbuyButtonState(buyButtonStates.loading)
    setTimeout(() => {
      if (handleBuy) {
        handleBuy() // Ejecutamos el handleBuy que viene como prop
        setbuyButtonState(buyButtonStates.addedToCart)
      }
    }, 1000)
    }

    const isLoading = buyButtonState === buyButtonStates.loading
    const isAdded = buyButtonState === buyButtonStates.addedToCart

  return (
    <div>
        <button 
        className="btn-default btn-primary" 
        onClick={buy} 
        disabled={isLoading}>
            {isLoading ? 'Añadiendo al carrito' : 'Comprar'}
        </button>
            {isAdded}
    </div>
  )
}

export default BuyButton