import React from 'react';
import SwipeableAboutCards from './SwipeableAboutCards';

const About = () => {
    return (
        <div>
            <section className='w-full h-auto bg-[rgba(7,7,7,0.6)] sm:flex hidden flex-col gap-10 about-font'>
                <h1 className='text-white text-6xl pt-40 pl-40 font-Monda'>About <span className='text-theme-blue'>Me</span></h1>
                <div className="flex justify-center w-full font-Aldrich">
                    <div className="bg-white h-auto py-10 px-10 mx-20 flex flex-col gap-16 bg-opacity-[0.01] rounded-sm">
                        <div className='flex flex-col gap-10 '>
                            <div>
                                <h3 className='text-theme-blue text-2xl lg2:text-3xl'>Who am I?</h3>
                                <p className='text-white text lg2:text-xl pt-5'>
                                    Hi there! I'm Oliver, a passionate and dedicated front-end web developer.I'm always striving to push the boundaries of what's possible. My journey has been shaped by my curiosity and a relentless drive to learn and grow, allowing me to tackle challenges head-on and deliver exceptional results.
                                </p>
                            </div>
                            <div>
                                <h3 className='text-theme-blue text-2xl lg2:text-3xl'>What's my goal?</h3>
                                <p className='text-white lg2:text-xl pt-5'>
                                    My goal is to make a meaningful impact through my work, leveraging my skills to create solutions that not only meet but exceed expectations. I aim to continuously evolve and adapt, staying at the forefront of industry trends and technologies. Whether it's [Your Specific Area of Focus], my mission is to blend creativity and technical prowess to bring innovative ideas to life, enhancing experiences and driving success for my clients and collaborators.
                                </p>
                            </div>
                            <div>
                                <h3 className='text-theme-blue text-2xl lg2:text-3xl'>Why choose me?</h3>
                                <p className='text-white lg2:text-xl pt-5'>
                                    Choosing me means partnering with someone who is not only skilled and experienced but also deeply committed to your success. I bring a unique blend of creativity, technical expertise, and a proactive approach to every project. My attention to detail, dedication, and passion for excellence ensure that I deliver high-quality work that stands out. By working with me, you're choosing a collaborator who listens, understands, and works tirelessly to achieve your vision. Let's create something extraordinary together!
                                </p>
                            </div>
                        </div>
                        <div className='w-full flex justify-center'>
                            <div className='bg-white h-[1px] w-[85%]' />
                        </div>
                    </div>
                </div>
            </section>

            <SwipeableAboutCards />
        </div>
    );
};

export default About;
