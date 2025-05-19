import React, {useEffect, useState} from 'react'
import ICONS from '../Icons/Icons.jsx'
import './Notification.css'

const Notification = ({ show, message, product }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (show) {
      setVisible(true)
    } else if (visible) {
      // Espera el tiempo del fadeOut antes de desmontar
      const timeout = setTimeout(() => setVisible(false), 300) // 300ms = duración del fadeOut
      return () => clearTimeout(timeout)
    }
  }, [show, visible])

  if (!visible) return null
  return (
    <div className={`notification-container${show ? '' : ' fade-out'}`}>
      <div className="notification-product">
      {product && (
          <div className="notification-product">
            <img src={product.img} alt={product.name} className="notification-product-img cart-item-thumbnail mr-1" />
            <span className="notification-product-name">{product.name || product.title}</span>
            <span className="pl-1">(1 x <b>${product.price})</b></span>
          </div>
        )}
      </div>
      <div className="notification-message">
        <i className='icon'>
        <ICONS.check/>
        </i>
        {message}
      </div>
    </div>
  )
}

export default Notification
