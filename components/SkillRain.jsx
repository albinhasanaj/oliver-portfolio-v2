import React, { useMemo } from 'react';
import Skills from './Skills';
import Image from 'next/image';
import '../app/css/cursor.css';
import '../app/css/iconRain.css';

const SkillRain = () => {
    const skillEntries = useMemo(() => {
        return Object.entries(Skills).map(([skill, src]) => {
            const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
            const delay = getRandomInt(0, 5000) / 500; // Random delay between 0 to 15 seconds
            const left = getRandomInt(0, 100); // Random horizontal position between 0% to 100%

            return { skill, src, delay, left };
        });
    }, []);

    return (
        <div className='rain'>
            {skillEntries.map(({ skill, src, delay, left }) => (
                <div
                    key={skill}
                    className='icon-overlay'
                    style={{
                        left: `${left}%`,
                        animationDuration: '10s', // Duration of the falling animation
                        animationDelay: `${delay}s`,
                    }}
                >
                    <Image src={src} alt={`${skill} Logo`} width={48} height={48} />
                </div>
            ))}
        </div>
    );
}

export default SkillRain;
