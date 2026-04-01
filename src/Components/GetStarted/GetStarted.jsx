import React from 'react';
import packageImg from '../../assets/assets/products/package.png'
import user from '../../assets/assets/products/user.png'
import rocket from '../../assets/assets/products/rocket.png'

const GetStarted = () => {
    return (
     <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Get Started In 3 Steps</h2>
        <p className="text-gray-500 mb-12">Start using premium digital tools in minutes, not hours.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

         
          <div className="relative bg-white rounded-2xl p-8 border border-gray-100 flex flex-col items-center text-center">
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
              style={{background: "linear-gradient(to bottom, #7C3AED, #9333EA)"}}>
              01
            </div>
            <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6" style={{backgroundColor: "#EDE9FE"}}>
              <img src={user} alt="user" className="w-8 h-8 object-contain" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Create Account</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Sign up for free in seconds. No credit card required to get started.</p>
          </div>

       
          <div className="relative bg-white rounded-2xl p-8 border border-gray-100 flex flex-col items-center text-center">
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
              style={{background: "linear-gradient(to bottom, #7C3AED, #9333EA)"}}>
              02
            </div>
            <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6" style={{backgroundColor: "#EDE9FE"}}>
              <img src={packageImg} alt="package" className="w-8 h-8 object-contain" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Choose Products</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Browse our catalog and select the tools that fit your needs.</p>
          </div>

          
          <div className="relative bg-white rounded-2xl p-8 border border-gray-100 flex flex-col items-center text-center">
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
              style={{background: "linear-gradient(to bottom, #7C3AED, #9333EA)"}}>
              03
            </div>
            <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6" style={{backgroundColor: "#EDE9FE"}}>
              <img src={rocket} alt="rocket" className="w-8 h-8 object-contain" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Start Creating</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Download and start using your premium tools immediately.</p>
          </div>

        </div>
      </div>
    </section>
    );
};

export default GetStarted;