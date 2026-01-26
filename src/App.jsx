import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./layouts/Layout"
import Landingpage from './Pages/Landingpage'
import Services from './Pages/Services'
import About from './Pages/About'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Landingpage />} />
          <Route path='services' element={<Services />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
