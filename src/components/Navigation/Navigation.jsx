import logo from '../../assets/wings-logo.png'
import {Link} from 'react-router-dom'
import './navigation.scss'

const Navigation = () => {
  return (
    <header className="container-flex my-4 header">
        <Link to="/home"><img src={logo} width="100px" height="100px"/></Link>
        <nav className="navbar navbar-expand-lg">
            <Link to='/home' className="nav-link mx-3">Home</Link>
            <Link to='/menu' className="nav-link">Menu</Link>
            <Link to='/location' className="nav-link mx-3">Location</Link>
            <Link to='/testimonials' className="nav-link">Testimonials</Link>
            <Link to='/contacts' className="nav-link mx-3">Contact Us</Link>
        </nav>
    </header>
  )
}

export default Navigation