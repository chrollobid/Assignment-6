import React from 'react';

const WorkFlow = () => {
    return (
       <div className="py-20 px-5 text-center" style={{background: "linear-gradient(to right, #7C3AED, #9333EA)"}}>

      <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">Ready To Transform Your Workflow?</h2>

      <p className="text-purple-200 text-sm mb-8">
        Join thousands of professionals who are already using Digitools to work smarter. <br />
        Start your free trial today.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-4 mb-5">
        <button className="px-6 py-3 transition delay-15 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  rounded-full bg-white text-purple-700 font-semibold">
          Explore Products
        </button>
        <button className="px-6 py-3 transition delay-15 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  rounded-full border border-white text-white font-semibold">
          View Pricing
        </button>
      </div>

      <p className="text-purple-200 text-xs">
        14-day free trial • No credit card required • Cancel anytime
      </p>

    </div>
    );
};

export default WorkFlow;