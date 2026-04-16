import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import background from '../src/images/grid-layer (1).svg'
import About from './links/About'
import Features from './links/Features'
import HowIWork from './links/HowIWork'
import Pricing from './links/Pricing'

function App() {
  return (
    <BrowserRouter>
      <section>
        

        
        
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/featured-work" element ={<Features />} />
          <Route path="/how-i-work" element ={<HowIWork />} />
          <Route path="/pricing" element ={<Pricing />} />
        </Routes>
      </section>
    </BrowserRouter>
  )
}

export default App