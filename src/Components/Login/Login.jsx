import React, {useState} from 'react'
import ICONS from '../../Components/Icons/Icons'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  const fields = {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    confirmpassword: 'confirmpassword'
   }

  // Definimos el estado inicial del formulario
  const initial_form_state = {
    [fields.firstName]: '',
    [fields.lastName]: '',
    [fields.email]: '',
    [fields.password]: '',
    [fields.confirmpassword]: ''
  }

  // Ocultamos el password mientras se escribe
  const [showPassword, setShowPassword] = useState(false);

  const [form_values_state, setFormValuesState] = useState(initial_form_state)

  const [form_sent, setFormSent] = useState(false)


    const handleChangeInputValue = (event) => {
      const { name, value } = event.target;
      setFormValuesState((prev_state) => ({
        ...prev_state, // Esto es como una clonación del estado anterior
        [name]: value
      }));
      // Capturamos el valor del input y lo guardamos en el estado
    } 

    const handleSubmitContactForm = (event) => {
    event.preventDefault()
    setFormSent(true)
    }

  return (
    <div className='site-container fit-height'>
        {form_sent ? (
          <div>
            <div className='page-title-container'> 
            <h1 className="page-title">¡Hola!</h1>
            </div>
            <div className="section-content text-center">
              Iniciaste sesión como <b>{form_values_state[fields.email]}</b>
              <p>
                ¡Comprá más rápido y llevá el control de tus pedidos desde tu cuenta!
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className='page-title-container'> 
            <h1 className="page-title">Iniciá sesión</h1>
            </div>
            <div className='form-container'>
              <form onSubmit={handleSubmitContactForm}>
                <div className="form-group">
                  <label htmlFor="email" className='label'>
                    Email
                  </label>
                  <input 
                      required
                      id="email"
                      type="email" 
                      placeholder="Ingresá tu email" 
                      maxLength={50} 
                      name={fields.email} 
                      onChange={handleChangeInputValue}
                      value={form_values_state[fields.email]}  
                      />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className='label'>
                    Contraseña 
                  </label>
                  <div className='input-password'>
                    <input 
                      required
                      type={showPassword ? "text" : "password"}
                      id="password" 
                      placeholder="Ingresá tu contraseña" 
                      maxLength={50} 
                      name={fields.password} 
                      onChange={handleChangeInputValue}
                      value={form_values_state[fields.password]} 
                      />
                    <i
                    className='icon'
                    style={{ cursor: 'pointer' }}
                    onClick={() => setShowPassword((prev) => !prev)}
                    >
                    {showPassword ? <ICONS.eyeoff /> : <ICONS.eye />}
                  </i>
                  </div>
                </div>
                
                <button type="submit" className='btn-default btn-primary'>
                  Iniciar sesión
                </button>
              </form>

              <div className="login-link">
                <span>¿No tenés cuenta? </span>
                <Link className="text-link" to={'/register'}>
                Registráte
                </Link>
              </div>

            </div>
          </div>
        )}
    </div>
  )
}

export default Login
