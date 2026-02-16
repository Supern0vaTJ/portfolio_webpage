import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'


function Header() {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-6 py-24
'>
        <div>
            <h3 className='text-2xl sm:text-4xl lg:text-[56px] '>
            Who am I?
            </h3>
        </div>
        <h4 className='flex items-end gap-2 text-xl md:text-2xl mb-3'>
            If AI is Katana <Image src={assets.katana_icon} alt='' className='rounded-full w-20' /> 
            Then I&apos;m a Samurai <Image src={assets.samurai_icon} alt='' className='rounded-full w-20' />
        </h4>
        
        <h1 className='text-2xl sm:text-3xl lg:text-[46px] '>
            FullStack web Developer based in Mumbai.
        </h1>
        <p className='max-w-4xl mx-auto'>
            Software Engineering Enthusiast with 5 years of corporate experience including 2 years of of developing high-performance, scalable web solutions end-to-end and scalable production-grade web applications. 
        </p>
        <h1 className='text-xl sm:text-2xl lg:text-[36px] '>
            Do I use AI Tools?
        </h1>
        <p className='max-w-6xl mx-auto'>
            Probably more than I should admit in public. 
            AI is my coding partner — pair programming with me at 2 AM, refactoring my messy thoughts into elegant functions, whispering better regex into my ears, and occasionally judging my variable names.
            I leverage AI for architecture brainstorming, code scaffolding, test case generation, debugging edge cases, writing optimized SQL queries, generating API documentation, performance tuning strategies, DevOps scripting, Docker/Kubernetes setup guidance, CI/CD workflows, security best practices, refactoring legacy code, improving frontend UX patterns, writing clean commit messages, and even reviewing my pull requests.
            
            But make no mistake — AI is the katana. I’m still the samurai. 
            I decide where it swings.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
  
  
        <a
            href="https://docs.google.com/document/d/1IoGlHucKiB5nsOo1TFacnIMS0QpiEwnkWG-XukQRovI/view"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-5 py-3 rounded-full bg-black text-white flex items-center gap-2 transition-all duration-300 hover:bg-white hover:text-black border border-black"
        >
            View My CV
            <Image
            src={assets.right_arrow_white}
            alt="View CV"
            className="w-4 transition-transform duration-300 group-hover:translate-x-1"
            />
        </a>

        <a
            href="https://docs.google.com/document/d/1IoGlHucKiB5nsOo1TFacnIMS0QpiEwnkWG-XukQRovI/export?format=pdf"
            className="group px-8 py-3 rounded-full border border-gray-400 flex items-center gap-2 transition-all duration-300 hover:bg-gray-100"
        >
            Download My CV
            <Image
            src={assets.download_icon}
            alt="Download CV"
            className="w-4 transition-transform duration-300 group-hover:-translate-y-1"
            />
        </a>

        </div>

    </div>
  )
}

export default Header