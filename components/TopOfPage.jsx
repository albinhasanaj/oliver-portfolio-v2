// TopOfPage.jsx
'use client';

import SkillRain from "./SkillRain";

const TopOfPage = () => {
    return (
        <div>
            <section id="home" className="relative h-screen sm:flex hidden w-full justify-center items-center">
                <div className='w-[50%] h-full flex justify-center items-center gap-10 lg2:gap-16 font-Monda'>
                    <div className='w-[3px] h-[140px] lg2:h-[177px] bg-[#D9D9D9]' />
                    <div>
                        <h1 className="text-3xl lg2:text-5xl text-[#C5C6C7]">
                            OLIVER SÖDERLUND
                        </h1>
                        <h2 className="text-7xl lg2:text-8xl text-[#fff] lg2:leading-[0.9]">
                            I'm a Web <br /><span className='text-theme-blue'>Developer</span>
                        </h2>
                    </div>
                </div>
                <div className='w-[50%] h-full relative '>
                    <SkillRain />
                </div>
            </section>

            <section id="home" className="relative h-screen flex sm:hidden w-full justify-center items-center flex-col">
                <div className='w-full h-[50%] absolute top-[1px]'>
                    <SkillRain />
                </div>
                <div className='w-[50%] h-full flex justify-center items-center gap-10 lg2:gap-16 font-Monda'>
                    <div className="text-center">
                        <h1 className="text-xl xs:text-2xl text-[#C5C6C7] text-nowrap relative z-10">
                            OLIVER SÖDERLUND
                        </h1>
                        <h2 className="text-4xl xs:text-5xl lg2:text-8xl text-[#fff] lg2:leading-[0.9] relative z-10">
                            I'm a Web <br /><span className='text-theme-blue'>Developer</span>
                        </h2>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TopOfPage;
