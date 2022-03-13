import { Link } from 'react-router-dom'
import './Nav.scss'

const Nav = () => {
  return (
    <nav>
      <Link to='/'>home</Link>
      <Link to='/projects'>projects</Link>
    </nav>
  )
}

export default Nav
