import React from 'react';

const Stats = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row w-11/12 md:w-full mx-auto bg-[linear-gradient(to_bottom,rgba(79,57,246,1)_0%,rgba(149,20,250,1)_100%)] p-10 text-white justify-center items-center mt-10 md:mt-30 rounded-xl gap-8 md:gap-0">
                
                <div className="border-b-2 md:border-b-0 md:border-r-2 pb-6 md:pb-0 md:pr-20 lg:pr-40 text-center">
                    <p className="font-bold text-5xl lg:text-6xl">50K+</p>
                    <p className="text-xl">Active Users</p>
                </div>

                <div className="border-b-2 md:border-b-0 md:border-r-2 pb-6 md:pb-0 md:px-20 lg:px-40 text-center">
                    <p className="font-bold text-5xl lg:text-6xl">200+</p>
                    <p className="text-xl">Premium Tools</p>
                </div>

                <div className="md:pl-20 lg:pl-40 text-center">
                    <p className="font-bold text-5xl lg:text-6xl">4.9</p>
                    <p className="text-xl">Rating</p>
                </div>

            </div>
        </div>
    );
};

export default Stats;