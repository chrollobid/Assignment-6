import React, { useState } from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

const DigitalTools = ( {productPromise}) => {
  const productsCard = use(productPromise)
    const [ selectedProducts, setSelectedProducts] = useState([])
      const [ selectedType , setSelectedType] = useState('available')
    return (
        <div>
            <div className="flex flex-col items-center justify-center mt-20">
                <h2 className='font-bold text-4xl'>Premium Digital Tools</h2><br />
                <p className='text-center text-[#627382]'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-7/12 mx-auto gap-6 mt-8 px-4">
    {productsCard.map((product) => (
  <Cards key={product.id} 
  product={product} 
  setSelectedType = {setSelectedProducts}
  selectedProducts ={selectedProducts}
  
  />
))}
</div>
            </div>
            
        </div>
    );
};

export default DigitalTools;