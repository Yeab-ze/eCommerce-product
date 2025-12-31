import React from 'react'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import Hero from './components/Hero'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ProductCard/>
      <Footer/>
    </div>

  )
}

export default App