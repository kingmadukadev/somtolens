import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import About from './links/About'
import Features from './links/Features'
import HowIWork from './links/HowIWork'
import Pricing from './links/Pricing'
import { useState } from 'react'
import Loader from './Loader'

function App() {

  const [loading, setLoading] = useState(true);
  return (
    <div>
      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ): (
        <BrowserRouter basename='/somtolens'>
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
      )}
    </div>
  )
}

export default App