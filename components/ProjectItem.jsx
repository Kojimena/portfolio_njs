"use client";
import React from 'react'
import Image from 'next/image'

const ProjectItem = ({img, link, name, desc}) => {
  return (
    <div className='glassmorphism flex w-full md:flex-row xs:flex-col hover:scale-105 transform transition-all duration-500'>
        <Image src={img} alt={name} width={400} height={400} className='rounded-xl' />
        <div className='relative flex flex-col items-start xs:justify-center md:justify-start gap-2 pt-2 md:p-4 w-full'>
            <span className="md:text-2xl font-hoey text-left text-white font-extrabold uppercase fontstrech">{name}</span>
            <span className="md:text-2xl font-hoey text-left text-white ">{desc}</span>
            <button className="md:absolute md:bottom-0 md:right-0 rounded-full p-2 bg-white text-black hover:bg-black hover:text-white" onClick={() => window.open(link, "_blank")}>
              <svg width="24px" height="24px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#ffffff" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 4.45962C9.91153 4.16968 10.9104 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C3.75612 8.07914 4.32973 7.43025 5 6.82137" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#000000" stroke-width="1.5"></path> </g></svg>
            </button>
        </div>
    </div>
  )
}

export default ProjectItem