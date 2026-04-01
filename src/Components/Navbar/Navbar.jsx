import React from 'react';

const Navbar = () => {
    return (
      <div>

  <div className="navbar p-4 w-11/12 mx-auto bg-base-100 flex justify-between items-center shadow-sm">
    
  
    <div className="flex-1 flex items-center">
    
      <div className="dropdown lg:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52">
          <li><a href="">Products</a></li>
          <li><a href="">Features</a></li>
          <li><a href="">Pricing</a></li>
          <li><a href="">Testimonials</a></li>
          <li><a href="">FAQ</a></li>
        </ul>
      </div>
      
     
      <a className="btn btn-ghost text-4xl text-transparent bg-clip-text bg-[linear-gradient(to_bottom,#4f39f6_0%,#9514fa_100%)] ">DigiTools</a>
    </div>

   
    <div className="hidden lg:flex flex-1 justify-center">
      <ul className="flex items-center gap-5">
        <li><a href="" className="hover:text-primary transition-colors">Products</a></li>
        <li><a href="" className="hover:text-primary transition-colors">Features</a></li>
        <li><a href="" className="hover:text-primary transition-colors">Pricing</a></li>
        <li><a href="" className="hover:text-primary transition-colors">Testimonials</a></li>
        <li><a href="" className="hover:text-primary transition-colors">FAQ</a></li>
      </ul>
    </div>

   
    <div className="flex-1 flex justify-end items-center gap-2">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="badge badge-sm indicator-item">8</span>
          </div>
        </div>
       
      </div>
      
     
      <button className="btn btn-sm md:btn-md rounded-2xl btn-ghost">Login</button>
      
      <button className="btn transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 btn-sm md:btn-md rounded-3xl bg-[linear-gradient(to_bottom,#4f39f6_0%,#9514fa_100%)] text-white border-none">
        Get Started
      </button>
    </div>

  </div>
</div>

    );
};

export default Navbar;