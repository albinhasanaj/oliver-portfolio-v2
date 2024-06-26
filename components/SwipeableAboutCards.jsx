import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import AboutCards from './AboutCards';
import '../app/css/cardSwipe.css';

const SwipeableAboutCards = () => {
    const [index, setIndex] = useState(0);
    const maxIndex = AboutCards.length - 1;

    const handleSwipeLeft = () => {
        setIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0));
    };

    const handleSwipeRight = () => {
        setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : maxIndex));
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleSwipeLeft,
        onSwipedRight: handleSwipeRight,
    });

    return (
        <section className='sm:hidden flex flex-col w-full justify-center'>
            <h1 className='text-white text-5xl mt-20 ml-20 font-Monda'>About <span className='text-theme-blue'>Me</span></h1>
            <div className="flex items-center justify-center font-Aldrich">
                <div {...swipeHandlers} className="bg-white w-[90%] h-auto my-10 flex flex-col gap-16 bg-opacity-[0.01] justify-center items-center">
                    <div className='flex flex-col'>

                        <div className='h-auto py-10 px-10 flex flex-col gap-16 bg-opacity-[0.02]'>

                            <div >
                                <div className="flex justify-center">
                                    <div className="max-w-lg p-4 bg-white bg-opacity-[0.01] rounded-sm">
                                        <h2 className="text-xl font-bold text-theme-blue mb-4">{AboutCards[index].header}</h2>
                                        <p className="text-white">{AboutCards[index].text}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='w-full flex justify-center'>
                                <div className='bg-white h-[1px] w-[85%]' />
                            </div>

                            {/* Dots indicator */}
                            <div className='flex justify-center mt-4'>
                                {AboutCards.map((_, dotIndex) => (
                                    <div
                                        key={dotIndex}
                                        className={`h-2 w-2 rounded-full mx-1 ${dotIndex === index ? 'bg-theme-blue' : 'bg-gray-700'}`}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SwipeableAboutCards;
