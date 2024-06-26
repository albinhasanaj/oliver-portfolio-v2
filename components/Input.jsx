import React from 'react'

const Input = ({ placeholder, label, type, name }) => {
    return (
        <div className='flex flex-col gap-2'>
            <label htmlFor={label} className='text-white font-Monda text-xl xs:text-2xl cursor-none HoverCursor ml-2'>{label}</label>
            <input type={type} name={name} placeholder={placeholder} id={label} className='w-[300px] xs2:w-[500px] h-[67px] rounded-md border-[1px] border-[#ffffff] bg-[rgba(7,7,7,0.2)] cursor-none HoverCursor pl-4 text-white text-[16px] xs:text-[20px] placeholder:text-[rgba(255,255,255,0.20)] focus:border-theme-blue outline-none' />
        </div>
    )
}

export default Input