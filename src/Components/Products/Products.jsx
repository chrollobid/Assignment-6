import React, { use, useState } from 'react';
import Cards from '../Cards/Cards';

const Products = ({productPromise , carts, setCarts}) => {

      const products = use(productPromise)
        
    return (
        <div>
             <div className="flex flex-col items-center justify-center mt-20">
                <h2 className='font-bold text-4xl'>Premium Digital Tools</h2><br />
                <p className='text-center text-[#627382]'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
            
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-7/12 mx-auto gap-6 mt-8 px-4">
    {products.map((product) => (
  <Cards product={product} key={product.id}
  carts={carts} setCarts={setCarts}
  />
))}
</div>
</div>
        </div>
    );
};

export default Products;