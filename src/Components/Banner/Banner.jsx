import { LocateFixed } from 'lucide';
import React from 'react';
import locationImg from "../../assets/assets/products/Rectangle 4.png"
import play from "../../assets/assets/products/Play.png"
import bannerImg from "../../assets/assets/products/banner.png"
const Banner = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-2 grid-cols-1 w-8/12 justify-center items-center mt-35 mx-auto">
                <div className="banner-text space-y-6">
                    <button className='flex items-center gao-4  bg-[linear-gradient(to_bottom,rgba(79,57,246,0.1)_0%,rgba(149,20,250,0.1)_100%)] rounded-2xl p-2 font-semibold '> <img src={locationImg} alt="" className='mr-1 h-2.5'/> <span className='text-transparent bg-clip-text bg-[linear-gradient(to_bottom,#4f39f6_0%,#9514fa_100%)]'> New: AI-Powered Tools Available</span> </button>
                    <h2 className="text-6xl font-bold">Supercharge Your <br />Digital Workflow</h2>
               <p className='text-[#627382]'>Access premium AI tools, design assets, templates, and productivity <br />
software—all in one place. Start creating faster today. <br /> 

Explore Products
</p>
<div className="">
    <button className="btn btn-sm md:btn-md rounded-3xl bg-[linear-gradient(to_bottom,#4f39f6_0%,#9514fa_100%)] text-white border-none transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 "> Explore Products</button>
    <button className="btn btn-outline btn-primary rounded-3xl ml-3  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"><img src={play} alt="" />Watch Demo</button>
</div>
                </div>
                <div className="banner-img">
                    <img src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;