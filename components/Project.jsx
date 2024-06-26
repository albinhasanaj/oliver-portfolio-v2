import Image from 'next/image'
import React from 'react'

const Project = ({ image }) => {
    return (
        <div className='w-[300px] h-[220px] xs2:w-[500px] xs2:h-[312px] md2:w-[624px] md2:h-[390px] rounded-[35px] md2:rounded-[44px] border-[2px] border-solid border-[#1B1D25] flex-shrink-0 flex items-center justify-center'>
            <div className='w-[240px] h-[170px] xs2:w-[432px] xs2:h-[260px] md2:w-[540px] md2:h-[324px] flex-shrink-0 bg-[#141414] flex items-center justify-center HoverCursor hover:scale-[1.02] transition-all duration-300 hover:bg-[#222222]'>
                {image ? (
                    <Image src={image} width={540} height={324} className='md2:w-[540px] md2:h-[324px] w-[90%] h-[90%]' />
                ) : (
                    <div className='text-white xs2:text-5xl font-Monda'>EXAMPLE</div>
                )}
            </div>
        </div>
    )
}

export default Project
