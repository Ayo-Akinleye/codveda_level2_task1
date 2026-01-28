import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./layouts/Layout"
import Landingpage from './Pages/Landingpage'
import Services from './Pages/Services'
import About from './Pages/About'
import Projects from "./Pages/Projects";
import Contact from './Pages/Contact';
import NoPage from './Pages/NoPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Landingpage />} />
          <Route path='services' element={<Services />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
