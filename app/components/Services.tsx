
import { serviceData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

function Services() {
  return (
    <div id="services" className='w-full px-[12%] py-10 scroll-mt-20'>
        <h2 className='text-center text-5xl font-Ovo'>
            What I do?
        </h2>
        <p>
            I design and develop scalable, secure, and high-performance web
            applications from concept to deployment. From backend systems to
            dynamic frontend interfaces and cloud-native microservices — I build
            production-ready solutions engineered for growth.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
            {serviceData.map(({icon, title, description, link}, index) => (
            <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500"
            >
            <Image src={icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
            {/* <a href={link} className="flex items-center gap-2 text-sm mt-5">
                Read more <Image src={assets.right_arrow} alt="" className="w-4" />
            </a> */}
            </div>
            ))}
        </div>

    </div>
  )
}

export default Services