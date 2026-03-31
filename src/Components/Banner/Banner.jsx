import { LocateFixed } from 'lucide';
import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-2 grid-cols-1">
                <div className="banner-text">
                    <button>  New: AI-Powered Tools Available</button>
                </div>
                <div className="banner-img"></div>
            </div>
        </div>
    );
};

export default Banner;