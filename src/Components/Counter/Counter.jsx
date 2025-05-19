import React from 'react'
import './Counter.css'

const Counter = ({ quantity, onAdd, onSubstract, onChange, stock }) => {
  return (
    <div className='counter-container-and-warning'>
      <div className='counter-container'>
        <button onClick={onSubstract} disabled={quantity <= 1} className='counter-button'>-</button>
        <input
          className='counter-input'
          type="number"
          min={0}
          value={quantity === '' ? '' : quantity}
          onChange={e => {
            const value = e.target.value
            if (onChange) {
              if (value === '') {
                onChange('')
              } else {
                onChange(Number(value))
              }
            }
          }}
        />
        <button onClick={onAdd} className='counter-button'>+</button>
      </div>
        {quantity === 0 && (
          <div className="counter-warning warning-message text-small">
          Añadí al menos un producto al carrito
          </div>
        )}
    </div>
  )
}

export default Counter