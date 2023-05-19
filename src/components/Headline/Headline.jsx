import './headline.scss'
import * as FaIcons from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Headline = () => {
  return (
    <div className="headline">
        <h2>Eat</h2>
        <h1>Wi<span id="star" >
                <FaIcons.FaStar/>
            </span>ngs
            
        </h1>
        <h2>Everyday!</h2>
        <Link to="/home"><p>Proceed to Website &rarr;</p></Link>

        <div id="socials">
            <p className="text-light mx-2">Follow Us:</p>
            <span className="icons">
                <FaIcons.FaInstagram/>
                <FaIcons.FaFacebookSquare className="mx-4"/>
                <FaIcons.FaTiktok/>
            </span>
        </div>
    </div>
  )
}

export default Headline