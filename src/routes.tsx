import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Booking from './pages/Booking'

const MyRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/booking" element={<Booking />} />
  </Routes>
)

export default MyRoutes
