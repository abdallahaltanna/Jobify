import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import MainLanding from '../../assets/images/main-alternative.svg'
import './Landing.css'

const Landing = () => {
  return (
    <>
      <nav>
        <img src={logo} alt='logo' />
      </nav>
      <div className='page container'>
        <div>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.
          </p>
          <Link to='/register' className='btn btn-hero'>
            login / register
          </Link>
        </div>
        <img src={MainLanding} alt='' className='img main_img' />
      </div>
    </>
  )
}
export default Landing
