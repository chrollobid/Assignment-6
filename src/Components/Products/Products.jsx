import React, { use, useState } from 'react';
import Cards from '../Cards/Cards';

const Products = ({productPromise , selectedProducts , setSelectedProducts}) => {

      
        const productsCard = use(productPromise)
    return (
        <div>
            
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
    );
};

export default Products;