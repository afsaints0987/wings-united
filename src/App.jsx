import { Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing/Landing"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Location from "./pages/Location"
import Testimonials from "./pages/Testimonials"
import Contact from "./pages/Contact"
import { AnimatePresence } from "framer-motion"
import Footer from "./components/Footer"

const AppRoute = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/location" element={<Location/>}/>
        <Route path="/testimonials" element={<Testimonials/>}/>
        <Route path="/contacts" element={<Contact/>}/>
      </Routes>
    </AnimatePresence>
  )
}



const App = () => {

  return (
    <div>
        <AppRoute/>
        <Footer/>
    </div>
  )
}

export default App
