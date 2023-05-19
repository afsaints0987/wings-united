import PromoBanner from "../components/Banner/PromoBanner"
import Motion from "../components/Motion"
import Navigation from "../components/Navigation/Navigation"


const Home = () => {
  return (
    <>
    <Navigation/>
    <Motion>     
        <PromoBanner/>
    </Motion>
    </>
  )
}

export default Home