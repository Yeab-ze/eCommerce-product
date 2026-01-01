import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Products from './components/Products'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Products/>
      <Footer/>
    </div>

  )
}

export default App