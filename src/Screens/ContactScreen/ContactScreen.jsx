import React, {useState} from 'react'
import ICONS from '../../Components/Icons/Icons'

const ContactScreen = () => {
  const fields = {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    message: 'message'
   }

  // Definimos el estado inicial del formulario
  const initial_form_state = {
    [fields.firstName]: '',
    [fields.lastName]: '',
    [fields.email]: '',
    [fields.message]: ''
  }

  const [form_values_state, setFormValuesState] = useState(initial_form_state)
   
    const handleSubmitContactForm = (event) => {
    event.preventDefault()
    } 

    const handleChangeInputValue = (event) => {
      const { name, value } = event.target;
      setFormValuesState((prev_state) => ({
        ...prev_state, // Esto es como una clonación del estado anterior
        [name]: value
      }));
      // Capturamos el valor del input y lo guardamos en el estado
    }
 
  return (
    <div className='site-container'>
      <div className='page-title-container'> 
      <h1 className="page-title">Contactános</h1>
      </div>
          <div className='form-container'>
            <form onSubmit={handleSubmitContactForm}>
              <div className="form-group">
                <label htmlFor="firstName" className='label'>
                  First Name
                </label>
                <input id="firstName" type="text" placeholder="Rocío" maxLength={50} name={fields.firstName} onChange={handleChangeInputValue}
                value={form_values_state[fields.firstName]} />
              </div>
              <div className="form-group">
                <label htmlFor="lastName" className='label'>
                  Last Name
                </label>
                <input id="lastName" type="text" placeholder="Giménez" maxLength={50}name={fields.lastName} onChange={handleChangeInputValue} 
                value={form_values_state[fields.lastName]} />
              </div>
              <div className="form-group">
                <label htmlFor="email" className='label'>
                  Email
                </label>
                <input id="email" type="email" placeholder="rociogimenez@gmail.com" maxLength={50} name={fields.email} onChange={handleChangeInputValue}
                value={form_values_state[fields.email]}  />
              </div>
              <div className="form-group">
                <label htmlFor="message" className='label'>
                  Message
                </label>
                <textarea id="message" placeholder="Escribínos tu mensaje acá" name={fields.message} onChange={handleChangeInputValue} 
                value={form_values_state[fields.message]} />
              </div>
              {/* <div className="form-group">
                <label htmlFor="firstName" className='label'>
                  Password 
                </label>
                <div className='input-password'>
                  <input type="text" id="firstName" placeholder="John" />
                  <i className='icon'><ICONS.eye/></i>
                </div>
              </div> */}
              <button type="submit" className='btn-default btn-primary'>
                Enviar
              </button>
            </form>
          </div>
    </div>
  )
}

export default ContactScreen
