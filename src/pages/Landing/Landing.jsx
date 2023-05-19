import Banner from "../../components/Banner/IntroBanner"
import Headline from "../../components/Headline/Headline"
import Header from "../../components/Navigation/Header"
const Landing = () => {
  return (
    <>
        <Header/>
        <div className="d-flex justify-content-around flex-lg-row flex-column">
            <Headline/>
            <Banner/>
        </div>
    </>
  )
}

export default Landing