import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'


function Header() {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-24'>
        <div>
            <h3 className='text-2xl sm:text-4xl lg:text-[56px] '>
            Who am I?
            </h3>
        </div>
        <h4 className='flex items-end gap-2 text-xl md:text-2xl mb-3'>
            If AI is Katana <Image src={assets.katana} alt='' className='rounded-full w-8' /> 
            Then I&apos;m a Samurai <Image src={assets.samurai} alt='' className='rounded-full w-8' />
        </h4>
        
        <h1 className='text-2xl sm:text-4xl lg:text-[56px] '>
            FullStack web Developer based in Mumbai.
        </h1>
        <p className='max-w-4xl mx-auto'>
            Software Engineering Enthusiast with 5 years of corporate experience including 2 years of of developing high-performance, scalable web solutions end-to-end and scalable production-grade web applications. Proficient in designing robust backend services using Java and Spring Boot, and crafting responsive, user-centric interfaces with JavaScript, React, and Next.js. Known for translating complex requirements into clean, maintainable code and delivering reliable solutions in fast-paced environments.
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href="#contact"
            className='px-10 py-3 border border-white rounded-full bg-black text-white flex items center gap-2'>
            View my CV <Image src={assets.right_arrow_white} alt='' className='w-4' />
            </a>

            <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
            Download My CV <Image src={assets.download_icon} alt='' className='w-4' />
            </a>
        </div>
    </div>
  )
}

export default Header