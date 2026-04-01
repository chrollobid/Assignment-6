import React from 'react';

const Stats = () => {
    return (
        <div>
            <div className="flex w-full bg-[linear-gradient(to_bottom,rgba(79,57,246,1)_0%,rgba(149,20,250,1)_100%)] p-10 text-white justify-center  mt-30 ">
                <div className="border-r-2 pr-40">
                    <p className="font-bold text-6xl">50K+</p>
                    <p className="text-xl"> Active Users</p>
                </div>
                <div className="border-r-2 pl-40 pr-40">
                    <p className="font-bold text-6xl">200+</p>
                    <p className="text-xl">Premium Tools</p>
                </div>
                <div className="pl-40 ">
                    <p className="font-bold text-6xl">4.9</p>
                    <p className="text-xl">Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;