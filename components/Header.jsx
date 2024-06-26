import React from 'react';
import Navbar from './Navbar';
import BrightnessSlider from './BrightnessSlider';

const Header = ({ onBrightnessChange }) => {
    return (
        <div className='w-full flex sm:justify-center pt-5 no-cursor fixed z-[100]'>
            <div className='flex justify-center max-w-[1440px]'>
                <div className='flex'>
                    <BrightnessSlider onChange={onBrightnessChange} />
                </div>
                <div className='flex'>
                    <Navbar />
                </div>
            </div>
        </div>
    );
};

export default Header;
