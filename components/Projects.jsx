import React from 'react'
import Project from './Project'
import Link from 'next/link'

const Projects = () => {
    return (
        <section className='w-full flex justify-center items-center mt-[10rem] flex-col'>
            <h1 className="text-white font-Monda text-3xl xs2:text-5xl lg2:text-6xl text-center">Small Examples of recent <span className='text-theme-blue'>Projects</span></h1>
            <div className='flex flex-col items-center gap-7 mt-10'>
                <div className='flex xl:flex-row flex-col gap-7'>
                    <Project />
                    <Project />
                </div>
                <div className='flex xl:flex-row flex-col gap-7'>
                    <Project />
                    <Project />
                </div>
            </div>
            <Link href={"https://www.youtube.com/watch?v=BmXihA_P3EE"} className='font-Monda text-2xl md2:text-3xl underline HoverCursor mt-5'>View More</Link>
        </section>
    )
}

export default Projects