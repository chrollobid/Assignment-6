import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Stats from './Components/Stats/Stats'
import DigitalTools from './Components/DigitalTools/DigitalTools'
import Cart from './Components/Cart/Cart'
import GetStarted from './Components/GetStarted/GetStarted'
import Pricing from './Components/Pricing/Pricing'
import WorkFlow from './Components/WorkFlow/WorkFlow'
import Footer from './Components/Footer/Footer'


const getProducts = async () => {
  const res = await fetch('./ProductData.json')
  const data = await res.json()
  return data  
}
function App() {
  const productPromise = getProducts()
 
  

  return (
    <>
   <Navbar/>
   <Banner/>
   <Stats/>
   <Suspense fallback= {<span className="loading loading-dots loading-xl"></span>}>

   <DigitalTools productPromise={productPromise}/>
   </Suspense>
   <Cart></Cart>
  <GetStarted/>
  <Pricing/>
  <WorkFlow/>
  <Footer/>
    </>
  )
}

export default App
