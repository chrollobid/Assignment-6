import { Trash, User } from 'lucide';
import React from 'react';

const Cart = ({ selectedProducts =[], setSelectedProducts  }) => {
  
  const handleSelectedCard = (product) => {
    const filteredCard = selectedProducts.filter((item) => item.name !== product.name);
    setSelectedProducts(filteredCard);
  };

  return (
    <div>
      <div className="">
        
        {selectedProducts.length === 0 ? (
          <div className="flex justify-center items-center flex-col h-100">
            <h2 className="font-bold text-4xl">No Selected Product</h2>
            <p>Go to Selected Product</p>
          </div>
        ) :  selectedProducts.map((product , ind ) => {
            return (
               <div key={ind} className=' flex items-center gap-6 justify-between p-5 rounded-2xl border '>
                            <div>
                            {/* <img src= alt="" className='h-[70px] w-[5-px]' /> */}

                            <div className='flex mt-4 justify-start items-center gap-2'>
                             <User></User>   <h2 className='font-bold'>{product.name}</h2>
                            <p className='ml-10 font-semibold'>{product.price}</p>
                            
                            </div>
                            </div>
                            <button className='btn text-red-400' onClick={() => handleSelectedCard(product)}>
                                <Trash/>
                            </button>
                        </div>
            )

        }
          
        )}
      </div>
    </div>
  );
};

export default Cart;