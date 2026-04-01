import React from 'react';

const Pricing = () => {
  return (
    <div className="py-10 px-5">

      <h2 className="text-center text-3xl md:text-4xl font-bold">Simple, Transparent Pricing</h2>
      <p className="text-center text-gray-400 mt-2">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

      <div className="flex flex-col md:flex-row justify-center gap-5 mt-10 items-stretch">

      
        <div className="border transition delay-15 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  border-gray-200 rounded-2xl p-8 w-full md:w-72 flex flex-col bg-gray-50">
          <h3 className="text-xl font-bold">Starter</h3>
          <p className="text-gray-400 text-sm">Perfect for getting started</p>
          <div className="mt-5 mb-5">
            <span className="text-4xl font-bold">$0</span>
            <span className="text-gray-400 text-sm">/Month</span>
          </div>
          <ul className="flex flex-col gap-3 flex-1">
            <li className="text-sm text-gray-600">✓ Access to 10 free tools</li>
            <li className="text-sm text-gray-600">✓ Basic templates</li>
            <li className="text-sm text-gray-600">✓ Community support</li>
            <li className="text-sm text-gray-600">✓ 1 project per month</li>
          </ul>
          <button className="mt-8 py-3 rounded-full text-white font-semibold w-full" style={{background: "linear-gradient(to right, #7C3AED, #9333EA)"}}>
            Get Started Free
          </button>
        </div>

      
        <div className="rounded-2xl transition delay-15 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  p-8 w-full md:w-72 flex flex-col relative" style={{background: "linear-gradient(to bottom, #7C3AED, #9333EA)"}}>
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-100 text-yellow-700 text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">
            Most Popular
          </div>
          <h3 className="text-xl font-bold text-white">Pro</h3>
          <p className="text-purple-200 text-sm">Best for professionals</p>
          <div className="mt-5 mb-5">
            <span className="text-4xl font-bold text-white">$29</span>
            <span className="text-purple-200 text-sm">/Month</span>
          </div>
          <ul className="flex flex-col gap-3 flex-1">
            <li className="text-sm text-white">✓ Access to all premium tools</li>
            <li className="text-sm text-white">✓ Unlimited templates</li>
            <li className="text-sm text-white">✓ Priority support</li>
            <li className="text-sm text-white">✓ Unlimited projects</li>
            <li className="text-sm text-white">✓ Cloud sync</li>
            <li className="text-sm text-white">✓ Advanced analytics</li>
          </ul>
          <button className="mt-8 py-3 rounded-full bg-white text-purple-700 font-semibold w-full">
            Start Pro Trial
          </button>
        </div>

     
        <div className="border transition delay-15 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  border-gray-200 rounded-2xl p-8 w-full md:w-72 flex flex-col bg-gray-50">
          <h3 className="text-xl font-bold">Enterprise</h3>
          <p className="text-gray-400 text-sm">For teams and businesses</p>
          <div className="mt-5 mb-5">
            <span className="text-4xl font-bold">$99</span>
            <span className="text-gray-400 text-sm">/Month</span>
          </div>
          <ul className="flex flex-col gap-3 flex-1">
            <li className="text-sm text-gray-600">✓ Everything in Pro</li>
            <li className="text-sm text-gray-600">✓ Team collaboration</li>
            <li className="text-sm text-gray-600">✓ Custom integrations</li>
            <li className="text-sm text-gray-600">✓ Dedicated support</li>
            <li className="text-sm text-gray-600">✓ SLA guarantee</li>
            <li className="text-sm text-gray-600">✓ Custom branding</li>
          </ul>
          <button className="mt-8 py-3 rounded-full text-white font-semibold w-full" style={{background: "linear-gradient(to right, #7C3AED, #9333EA)"}}>
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  )
}

export default Pricing