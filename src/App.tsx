import { BrowserRouter } from 'react-router-dom'

import Footer from './components/Footer'

import MyRoutes from './routes'

function App() {
  return (
    <BrowserRouter>
      <div id="home" className="bg-neutral-200">
        <MyRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
