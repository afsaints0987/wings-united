import {useState, useEffect} from 'react'
import image from '../../assets/banner-image.png'
import image2 from '../../assets/banner-image-2.png'
import image3 from '../../assets/banner-image-3.png'
import './banner.scss'

const Banner = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [image, image2, image3]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => {
            clearInterval(interval)
        }
    },[])


  return (
    <div className="banner-container">
        {images.map((image, index)=> (
            <img key={index} src={image} className={`foreground ${index === currentImageIndex ? 'active' : ''}`} alt="banner-image"/>
        ))}
    </div>
  )
}

export default Banner