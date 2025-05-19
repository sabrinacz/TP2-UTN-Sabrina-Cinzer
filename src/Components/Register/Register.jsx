import React, {useState} from 'react'
import ICONS from '../../Components/Icons/Icons.jsx'
import { Link } from 'react-router-dom'
import './Register.css'

const Register = () => {
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
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [form_values_state, setFormValuesState] = useState(initial_form_state)

  const [form_sent, setFormSent] = useState(false)

  // Si no está completo el form,
  const isFormComplete = Object.values(form_values_state).every(value => value.trim() !== '');

    const handleChangeInputValue = (event) => {
      const { name, value } = event.target;
      setFormValuesState((prev_state) => ({
        ...prev_state, // Esto es como una clonación del estado anterior
        [name]: value
      }));
      // Capturamos el valor del input y lo guardamos en el estado
    } 

    // Valido el Register
  const [errors, setErrors] = useState({});

  const validateRegister = (values) => {
    const errors = {};
    if (values.password && values.confirmpassword && values.password !== values.confirmpassword) {
      errors.confirmpassword = "Las contraseñas no coinciden";
    }
    return errors;
  };


    const handleSubmitContactForm = (event) => {
    event.preventDefault()
    const validationErrors = validateRegister(form_values_state); 
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
    setFormSent(true);
    }
    } 

  return (
    <div className='site-container fit-height'>
      {form_sent ? (
          <div>
            <div className='page-title-container'> 
            <h1 className="page-title">¡Gracias por registrarte!</h1>
            </div>
            <div className="section-content text-center">
              Hola <b>{form_values_state[fields.firstName]}</b>
              <p>
                ¡Comprá más rápido y llevá el control de tus pedidos desde tu cuenta!
              </p>
            </div>
          </div>
        ) : (
      <div>
      <div className='page-title-container'> 
        <h1 className="page-title">Registráte</h1>
      </div>
      <div className='form-container'>
            <form onSubmit={handleSubmitContactForm}>
              <div className="form-group">
                <label htmlFor="firstName" className='label'>
                  First Name
                </label>
                <input 
                    required
                    id="firstName" 
                    type="text" 
                    placeholder="Rocío" 
                    maxLength={50} 
                    name={fields.firstName} 
                    onChange={handleChangeInputValue}
                    value={form_values_state[fields.firstName]} 
                    />
              </div>
              <div className="form-group">
                <label htmlFor="lastName" className='label'>
                  Last Name
                </label>
                <input 
                    required
                    id="lastName" 
                    type="text" 
                    placeholder="Giménez" 
                    maxLength={50}
                    name={fields.lastName} 
                    onChange={handleChangeInputValue} 
                    value={form_values_state[fields.lastName]} 
                    />
              </div>
              <div className="form-group">
                <label htmlFor="email" className='label'>
                  Email
                </label>
                <input 
                    required
                    id="email"
                    type="email" 
                    placeholder="rociogimenez@gmail.com" 
                    maxLength={50} 
                    name={fields.email} 
                    onChange={handleChangeInputValue}
                    value={form_values_state[fields.email]}  
                    />
              </div>
              <div className="form-group">
                <label htmlFor="password" className='label'>
                  Crear contraseña 
                </label>
                <div className='input-password'>
                  <input 
                    required
                    type={showPassword ? "text" : "password"}
                    id="password" 
                    placeholder="************" 
                    maxLength={50} 
                    name={fields.password} 
                    onChange={handleChangeInputValue}
                    value={form_values_state[fields.password]} 
                    className={errors.confirmpassword ? 'input-error' : ''}
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
              <div className="form-group">
                <label htmlFor="confirmpassword" className='label'>
                  Confirmar contraseña 
                </label>
                <div className='input-password'>
                  <input 
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmpassword" 
                    placeholder="************" 
                    maxLength={50} 
                    name={fields.confirmpassword} 
                    onChange={handleChangeInputValue}
                    value={form_values_state[fields.confirmpassword]}
                    className={errors.confirmpassword ? 'input-error' : ''} />
                    <i
                    className='icon'
                    style={{ cursor: 'pointer' }}
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                  >
                    {showConfirmPassword ? <ICONS.eyeoff /> : <ICONS.eye />}
                  </i>
                </div>
              </div>
                {errors.confirmpassword && <div className="form-error pb-2">*{errors.confirmpassword}</div>}
              <button type="submit" className='btn-default btn-primary'>
                Crear cuenta
              </button>
            </form>

              <div className="login-link">
                <span>¿Ya tenés cuenta? </span>
                <Link className="text-link" to={'/login'}>
                Iniciá sesión
                </Link>
              </div>

      </div>
      </div>
        )}
    </div>
  )
}

export default Register
