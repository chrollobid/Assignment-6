import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Stats from './Components/Stats/Stats'
import Cart from './Components/Cart/Cart'
import GetStarted from './Components/GetStarted/GetStarted'
import Pricing from './Components/Pricing/Pricing'
import WorkFlow from './Components/WorkFlow/WorkFlow'
import Footer from './Components/Footer/Footer'
import Products from './Components/Products/Products'


const getProducts = async () => {
  const res = await fetch('./ProductData.json')
  const data = await res.json()
  return data  
}
function App() {
  const productPromise = getProducts()
 
  const [activeTab, setActiveTab] = useState('product')
const [ carts, setCarts] = useState([])
console.log(carts)
  return (
    <>
   <Navbar carts={carts}/>
   <Banner/>
   <Stats/>



{
  activeTab === 'product' && <Suspense fallback= {<span className="loading loading-dots loading-xl"></span>}>

   <Products carts={carts} setCarts={setCarts} activeTab={activeTab} setActiveTab={setActiveTab}  productPromise={productPromise}/>
   </Suspense>
}
{
  activeTab === 'cart' && 
   <Suspense fallback= {<span className="loading loading-dots loading-xl "></span>}>
   <Cart carts={carts } setCarts={setCarts} activeTab={activeTab} setActiveTab={setActiveTab} ></Cart>

   </Suspense>
}
   
  <GetStarted/>
  <Pricing/>
  <WorkFlow/>
  <Footer/>
    </>
  )
}

export default App
