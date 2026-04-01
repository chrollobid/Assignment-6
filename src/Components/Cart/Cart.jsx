import { Trash } from 'lucide';
import React from 'react';

const Cart = ({carts}) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className='p-10 shadow w-10/12 mx-auto rounded-2xl'>
      <h2>Your Cart</h2>

{
  carts.map( item => <div key={item.id} className='p-4 shadow-sm'>
    <div className="">
      <div className="">
    <div className="img"></div>
    <div className="flex flex-col">
    <h2 className="font-semibold">{item.name}</h2>
<p className=''>$  {item.price}</p>
    </div>

      </div>

    </div>
  </div>
    )
}
    <div className="flex justify-between mt-2 w-9/12 mx-auto">
      <div className="font-semibold ">Total:</div>
      <div className="">$ {totalPrice}</div>
    </div>


    </div>
  );
};

export default Cart;