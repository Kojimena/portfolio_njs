import React from 'react'
import Image from 'next/image'
import Map from '@/components/Map';
import { FaInstagram, FaLinkedin } from "react-icons/fa";


const Contact = () => {
  return (
    <div className='flex flex-col items-start justify-center w-full'>
        <h1 className='text-4xl font-strech text-left text-white font-bold mt-6 md:mt-8 uppercase'>Contact</h1>
        <span className='md:text-2xl font-hoey text-left text-white font-weight-800'>
            Do you need a website?
          </span>
        <div className='flex md:flex-row xs:flex-col md:items-center justify-evenly xs:h-full md:gap-2 xs:gap-10 pt-8 md:pt-4 w-full h-46'>
            <div className='flex flex-col  items-center justify-center gap-2 '>
                <span className='md:text-2xl font-hoey text-left text-white font-bold '>Mail
                </span>
                <a href="mailto:her21199@uvg.edu.g" className="md:text-xl text-white hover:text-gray-400 p-4">
                    her21199@uvg.edu.gt
                </a>
            </div>
            <div className='flex flex-col items-center justify-center gap-2 '>
                <span className='md:text-2xl font-hoey text-left text-white font-bold'>Socials
                </span>
                <div className='flex flex-row items-center justify-center gap-2 w-full'>
                    <a href="https://www.instagram.com/kojimena/" target="_blank" rel="noopener noreferrer" className="text-xl text-white p-4 hover:bg-black hover:shadow-lg hover:rounded-full">
                        <FaInstagram className='text-2xl'/>
                    </a>
                    <a href="https://www.linkedin.com/in/jimena-ortega-202606204/" target="_blank" rel="noopener noreferrer" className="text-xl text-white p-4 hover:bg-black hover:shadow-lg hover:rounded-full">
                        <FaLinkedin className='text-2xl'/>
                    </a>
                </div>
            </div>
        </div>
        <a
        href="https://wa.me/41303712"
        className="fixed bottom-0 right-0 m-4 md:m-8 z-50 bg-[#A0CA68] rounded-full shadow-lg p-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/assets/icons/whatsapp.svg"
          alt="Whatsapp"
          width={30}
          height={30}
        />
      </a>
      <div className='flex flex-col items-center justify-center w-full h-full'>
        <Map/>
      </div>
    </div>
  )
}

export default Contact