import React, { useState } from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

const DigitalTools = ( {productPromise}) => {
    const [ selectedProducts, setSelectedProducts] = useState([])
      const [ selectedType , setSelectedType] = useState('available')
    return (
        <div>
            <div className="flex flex-col items-center justify-center mt-20">
                <h2 className='font-bold text-4xl'>Premium Digital Tools</h2><br />
                <p className='text-center text-[#627382]'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
                <div className='mt-10 flex justify-center'>
          <button
            onClick={() => setSelectedType("available")}
            className={`btn ${selectedType === "available" ? "bg-[linear-gradient(to_bottom,#4f39f6_0%,#9514fa_100%)]" : ""}  rounded-3xl btn-ghost `}
          >
            Products
          </button>
          <button
            onClick={() => setSelectedType("selected")}
            className={`btn ${selectedType === "selected" ? "bg-[linear-gradient(to_bottom,#4f39f6_0%,#9514fa_100%)]" : ""}  rounded-3xl btn-ghost `}
          >
            Cart(0) 
          </button>
        </div>
                <div className="">
                    {
                        selectedType === 'available' ? <Products 
                        productPromise={productPromise} 
                        selectedProducts = {selectedProducts}
                        setSelectedProducts ={setSelectedProducts}
                        
                        /> : <Cart 
                        selectedProducts = {selectedProducts}
                        setSelectedProducts ={setSelectedProducts} />
                    }
                    
                </div>
            </div>
            
        </div>
    );
};

export default DigitalTools;