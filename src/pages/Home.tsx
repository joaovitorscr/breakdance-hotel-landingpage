import Header from '../components/Header'
import Services from '../components/Services'

import banner from '../assets/image/heroBanner.png'
import Room from '../components/Room'
import About from '../components/About'
import NavBar from '../components/NavBar'

const Home = () => (
  <>
    <NavBar />
    <Header />
    <img className="w-full" src={banner} alt="" />
    <Services />
    <Room />
    <About />
  </>
)

export default Home
