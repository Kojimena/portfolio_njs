"use client";
import React from 'react'
import Image from 'next/image'
import { FaRegEye } from "react-icons/fa6";

const ProjectItem = ({img, link, name, desc}) => {
  return (
    <div className='glassmorphism flex w-full hover:scale-105 transform transition-all duration-500'>
        <Image src={img} alt={name} width={400} height={400} className='rounded-xl w-1/2 object-cover' />
        <div className='relative flex flex-col items-start xs:justify-center md:justify-start gap-2 pt-2 md:p-4 w-full'>
            <span className="md:text-2xl font-hoey text-left text-white font-extrabold uppercase fontstrech">{name}</span>
            <span className="md:text-2xl font-hoey text-left text-white ">{desc}</span>
            <button className="md:absolute md:bottom-0 md:right-0 rounded-full p-2 bg-white text-black hover:bg-black hover:text-white" onClick={() => window.open(link, "_blank")}>
                <FaRegEye />
            </button>
        </div>
    </div>
  )
}

export default ProjectItem