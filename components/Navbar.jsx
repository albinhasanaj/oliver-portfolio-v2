'use client';
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {


    return (
        <div>
            <nav className="sm:flex hidden justify-between items-center p-4 w-[20rem] md2:w-[30rem] xl:w-[38rem] z-10 bg-[#13141A] rounded-[40px] px-8 md2:px-16 no-cursor font-Chathura gap-5">
                <Link href="#home" className='text-theme-blue text-2xl md2:text-4xl xl:text-5xl no-cursor HoverCursor'>HOME</Link>
                <Link href="#about" className='text-white text-2xl md2:text-4xl xl:text-5xl no-cursor HoverCursor'>ABOUT</Link>
                <Link href="#projects" className='text-white text-2xl md2:text-4xl xl:text-5xl no-cursor HoverCursor'> PROJECTS</Link>
                <Link href="#contact" className='text-white text-2xl md2:text-4xl xl:text-5xl no-cursor HoverCursor'>CONTACT</Link>
            </nav>

            <nav className='sm:hidden flex pl-5'>
                <Image src='/icons/burger-menu.svg' width={40} height={40} className='cursor-pointer' />
            </nav>
        </div>
    );
};
export default Navbar;