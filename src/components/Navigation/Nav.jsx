import { Link } from 'react-router-dom'
import './Nav.scss'

const Nav = () => {
  return (
    <nav>
      <Link to='/'>home</Link>
      <Link to='/projects'>projects</Link>
      <Link to='/contact'>contact</Link>
    </nav>
  )
}

export default Nav