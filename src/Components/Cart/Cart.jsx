import { Trash } from 'lucide';
import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({carts, setCarts, activeTab, setActiveTab }) => {
  const handlePayment = () => {
    setCarts([])
    toast.success('Payment Successful')
  }
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
  const handleClick = (item) => {
const filteredArray = carts.filter((c) => c.id !== item.id )
setCarts(filteredArray)
  toast.success('Item Deleted')
  }
  return (
    
    <div className='p-10 shadow w-9/12 mx-auto rounded-2xl space-y-2'>
      <div className="tabs tabs-box justify-center bg-white pt-10">
        <input type="radio" name="my_tabs_1"     className={`tab rounded-full font-bold w-40 ${activeTab === 'product' ? "bg-[linear-gradient(to_bottom,#4f39f6_0%,#9514fa_100%)] text-white" : ""}`}
 aria-label="Products" onClick={() => setActiveTab('product')} />
        <input type="radio" name="my_tabs_1"     className={`tab rounded-full font-bold w-40 ${activeTab === 'cart' ? "bg-[linear-gradient(to_bottom,#4f39f6_0%,#9514fa_100%)] text-white" : ""}`}
 aria-label={`Cart (${carts.length})`} onClick={() => setActiveTab('cart')} defaultChecked />
      </div>
      <h2 className='font-bold text-4xl mb-4'>Your Cart :</h2>

      {carts.length === 0 ? (
        <p className='font-bold text-center text-2xl'>Your Cart is Empty</p>
      ) : (
        <>
          <div className="">
            {carts.map(item => (
              <div key={item.id} className='p-4 shadow-sm'>
                <div className="flex justify-">
                  <div className="img"><img src={item.icon} className='mr-4' alt="" /></div>
                  <div className="flex flex-col grow">
                    <h2 className="font-bold">{item.name}</h2>
                    <p className='font-semibold'>$ {item.price}</p>
                  </div>
                  <button onClick={()=>handleClick(item)} className='btn btn-error btn-outline rounded-3xl'>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-2 w-9/12 mx-auto">
            <div className="font-semibold">Total:</div>
            <div className="font-semibold">$ {totalPrice}</div>
          </div>

          <button onClick={ handlePayment} className="btn bg-[linear-gradient(to_bottom,#4f39f6_0%,#9514fa_100%)] text-2xl text-white w-full rounded-3xl mt-5">
            Proceed To Checkout
          </button>
        </>
      )}

    </div>
  );
};

export default Cart;