import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Booking from './pages/Booking'
import Success from './pages/Success'

const MyRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/booking" element={<Booking />} />
    <Route path="/success" element={<Success />} />
  </Routes>
)

export default MyRoutes
