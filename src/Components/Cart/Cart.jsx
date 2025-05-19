import React, {useState} from 'react'
import './Cart.css'
import Counter from '../Counter/Counter'
import ICONS from '../Icons/Icons.jsx'

const Cart = ({ cart = [], addOne, removeOne, removeAll, setQuantity }) => {

  // Verifica si hay algún producto fuera de stock
  const anyOutOfStock = cart.some(item => item.quantity > item.stock)

  return (
    <div className='cart-container'>
      <h4 className='cart-title'>Carrito de compras</h4>
      {cart.length === 0 ? (
        <p>El carrito está vacío. ¡Empezá a comprar ahora!</p>
      ) : (
        <ul>
          {cart.map(item => {
            const isOutOfStock = item.quantity > item.stock

            return (
            <li key={item.id} className="cart-item">
              <div className="cart-item-content">
                <img className="cart-item-thumbnail mr-1" src={item.img}/>
                <span className="cart-item-name mr-1">
                  {item.title}
                </span>
                <span className="cart-item-quantity">
                  <Counter
                    quantity={item.quantity}
                    onAdd={() => addOne(item.id)}
                    onSubstract={() => removeOne(item.id)}
                    onChange={value => setQuantity(item.id, value)}
                    stock={item.stock}
                  />
                </span>
                <button onClick={() => removeAll(item.id)} className="btn-default cart-item-remove">
                  <i className='icon'>
                    <ICONS.trash/>
                  </i>
                </button>
              </div>
              {isOutOfStock && (
              <div className="outofstock-warning">
                <div className="counter-warning warning-message text-small">
                  ¡Ups! No tenemos tanto stock de <b>{item.title}</b>, nos quedan <b>{item.stock} unidades</b>.
                </div>
              </div>
              )}
            </li>
            )
          })}
          <button
            className="btn-default btn-primary cart-checkout"
            disabled={anyOutOfStock}
          >
            Finalizar compra
          </button>
        </ul>
      )}
    </div>
  )
}

export default Cart
