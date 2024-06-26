import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import Contact from './Contact'



const Footer = () => {
    return (
        <div className='w-full mt-64'>
            <h1 className="text-white font-Monda text-5xl lg2:text-6xl text-center my-20">Let's work <span className='text-theme-blue'>Together</span></h1>

            {/* ALL CONTENT */}
            <div className='w-full flex flex-col lg:flex-row'>
                {/* CONTACT FORM */}
                <Contact />
                {/* FOOTER */}
                <footer className='w-full lg:w-[50%] h-[850px] bg-[#181818] px-10 sm:px-20 pt-32 pb-16 flex flex-col justify-between'>
                    <p className='font-Monda text-white opacity-90 text-xl 2xl:text-2xl leading-[1.5] mb-10 text-center'>If you like what you're seeing, you can reach out to me through email, instagram dm's, or just through this website.</p>
                    <div className='w-full flex justify-center lg:hidden'>
                        <div className='w-[90%] h-[1px] bg-white' />
                    </div>
                    <div className='flex flex-col mb-12 lg:mb-28'>
                        <div className='flex flex-col gap-10'>
                            <Link href="mailto:lexrudolf06@gmail.com" className='items-center gap-5 hidden lg:flex cursor-none HoverCursor opacity-50 hover:opacity-100'>
                                <Image src='/icons/footer-email.svg' width={36} height={36} alt='Logo' className='cursor-none HoverCursor  ' />
                                <p className='font-Monda cursor-none HoverCursor'>lexrudolf06@gmail.com</p>
                            </Link>

                            <div className='flex gap-3 justify-center lg:justify-start'>
                                <Link href="https://github.com/Oliversoder06">
                                    <Image src='/icons/footer-github.svg' width={36} height={36} alt='Logo' className='HoverCursor hover:scale-[1.1] transition-all duration-300 opacity-50 hover:opacity-100' />
                                </Link>
                                <Link href="https://www.linkedin.com/in/oliver-s%C3%B6derlund-granzer/">
                                    <Image src='/icons/footer-linkedin.svg' width={36} height={36} alt='Logo' className='HoverCursor hover:scale-[1.1] transition-all duration-300 opacity-50 hover:opacity-100' />
                                </Link>
                                <Link href="https://www.instagram.com/oliver.soder06/">
                                    <Image src='/icons/footer-instagram.svg' width={36} height={36} alt='Logo' className='HoverCursor hover:scale-[1.1] transition-all duration-300 opacity-50 hover:opacity-100' />
                                </Link>
                                <Link href="https://www.instagram.com/oliver.soder06/">
                                    <Image src='/icons/footer-email.svg' width={36} height={36} alt='Logo' className='HoverCursor hover:scale-[1.1] transition-all duration-300 opacity-50 hover:opacity-100 lg:hidden' />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-full justify-center'>
                        <p className='text-xl xl:text-2xl font-Monda text-white text-center'>©2024 Oliver’s Portfolio, All right reserved.</p>
                    </div>
                </footer>
            </div >
        </div >
    )
}

export default Footer