// Cards.jsx
import React, { useState } from 'react';

const Cards = ({ product, selectedProducts , setSelectedProducts }) => {
    const [isSelected, setIsSelected ] = useState(false)
const handleAddCart = () => {
    setIsSelected(true)
    setSelectedProducts(...selectedProducts, product)
}

    
  const tagColors = {
    "best seller": "bg-yellow-100 text-yellow-700",
    "popular": "bg-purple-100 text-purple-700",
    "new": "bg-green-100 text-green-700",
  };

  const periodLabel = {
    "monthly": "Mo",
    "one-time": "One-Time",
  };

  return (
    <div className="card bg-base-100 shadow-sm border  container border-base-200 rounded-2xl">
      <div className="card-body p-6">

       
        <div className="flex justify-between items-start">
          <div className="text-4xl mb-2">
          
            <div className="w-12 h-12 bg-base-200 rounded-xl flex items-center justify-center text-2xl">
           
            </div>
          </div>
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${tagColors[product.tagType] || "bg-gray-100 text-gray-600"}`}>
            {product.tag}
          </span>
        </div>

        
        <h2 className="text-xl font-bold mt-2">{product.name}</h2>

        
        <p className="text-sm text-gray-500 mt-1">{product.description}</p>

       
        <div className="mt-3">
          <span className="text-2xl font-bold">${product.price}</span>
          <span className="text-sm text-gray-400">/{periodLabel[product.period]}</span>
        </div>

      
        <ul className="mt-4 flex flex-col gap-2">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-success shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

      
        <div className="mt-6">
          <button disabled={isSelected ? true : false}  onClick={handleAddCart} className="btn btn-primary btn-block rounded-full">{isSelected === false ? 'Buy Now' : 'Add To Cart' }</button>
        </div>

      </div>
    </div>
  );
};

export default Cards;