import Motion from "../components/Motion"
import Navigation from "../components/Navigation/Navigation"

const Location = () => {
  return (
    <>
   <Navigation/> 
   <div className="container-flex" id="location">
      <Motion>
        <div className="container pt-3">
          <h5 className="text-dark mb-3">Locate Us</h5>
          <div id="address" className="p-3">
              <p className="text-dark">Quirino Hi-way, Palmera <br/>
              San Jose Del Monte, Philippines 3023<br/>
              Store Hours: 9:00AM - 10:00PM
              </p>
              <p className="text-dark">Sto. Cristo Classica,<br/>
              San Jose Del Monte, Philippines 3023<br/>
              Store Hours: 9:00AM - 10:00PM
              </p>
          </div>
        </div>
      </Motion>
   </div>
    </>
  )
}

export default Location