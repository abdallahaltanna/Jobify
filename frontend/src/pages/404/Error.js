import { Link } from 'react-router-dom'
import error from '../../assets/images/not-found.svg'
import styles from './Error.module.css'

const Error = () => {
  return (
    <div className={`${styles.error} full-page`}>
      <div>
        <img src={error} alt='not found' />
        <h3>Ohh! Page Not Found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to='/'>back home</Link>
      </div>
    </div>
  )
}
export default Error
