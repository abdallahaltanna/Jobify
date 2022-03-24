import { useState } from 'react'
import logo from '../../assets/images/logo.svg'
import { FormRow } from '../../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import styles from './Register.module.css'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: false,
}

const Register = () => {
  const [values, setValues] = useState(initialState)
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className={`${styles.register} full-page`}>
      <form className={`form ${styles.form}`}>
        <img src={logo} alt='logo' className={`${styles.logo} logo`} />
        <h3>{values.isMember ? 'sign in' : 'sign up'}</h3>
        {!values.isMember && (
          <FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        )}

        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={(e) =>
            setValues({ ...values, [e.target.name]: e.target.value })
          }
        />

        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            password
          </label>
          <div className={`${styles['form-input_pass']} form-input`}>
            <input
              className={styles['form-input-password']}
              type={showPassword ? 'text' : 'password'}
              name='password'
              value={values.password}
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
            {values.password.length > 0 && (
              <button
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                className={styles.toggle_password}
              >
                {showPassword ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} />
                )}
              </button>
            )}
          </div>
        </div>

        <button
          type='submit'
          className={`${styles.btn} btn btn-block`}
          onClick={() => {}}
        >
          {values.isMember ? 'Sign In' : 'Sign Up'}
        </button>

        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}{' '}
          <button
            type='button'
            className={styles['member-btn']}
            onClick={() => setValues({ ...values, isMember: !values.isMember })}
          >
            {values.isMember ? 'Create Account' : 'Sign In Instead'}
          </button>
        </p>
      </form>
    </div>
  )
}
export default Register
