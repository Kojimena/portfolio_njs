import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className='flex flex-col items-start justify-center w-full'>
        <h1 className='text-4xl font-strech text-left text-white font-bold mt-6 md:mt-8 uppercase'>Contact</h1>
        <div className='flex md:flex-row xs:flex-col md:items-center justify-evenly xs:h-full md:gap-2 xs:gap-10 pt-8 md:pt-4 w-full h-46'>
            <div className='flex flex-col  items-center justify-center gap-2 '>
                <span className='md:text-2xl font-hoey text-left text-white '>Mail
                </span>
                <a href="mailto:her21199@uvg.edu.g" className="md:text-xl text-white hover:text-gray-400 p-4">
                    her21199@uvg.edu.gt
                </a>
            </div>
            <div className='flex flex-col items-center justify-center gap-2 '>
                <span className='md:text-2xl font-hoey text-left text-white '>Social
                </span>
                <div className='flex flex-row items-center justify-center gap-2 w-full'>
                    <a href="https://www.instagram.com/kojimena/" target="_blank" rel="noopener noreferrer" className="md:text-xl text-white p-4 hover:bg-black hover:shadow-lg hover:rounded-full">
                        <svg fill="#ffffff" width="42px" height="42px" viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" class="jam jam-instagram"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z"></path><path d="M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31z"></path><circle cx="15.156" cy="4.858" r="1.237"></circle></g></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/jimena-ortega-202606204/" target="_blank" rel="noopener noreferrer" className="md:text-xl text-white p-4 hover:bg-black hover:shadow-lg hover:rounded-full">
                        <svg width="42px" height="42px" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="132" height="132" x="30" y="30" stroke="#ffffff" stroke-width="12" rx="16"></rect><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M66 86v44"></path><circle cx="66" cy="64" r="8" fill="#ffffff"></circle><path stroke="#ffffff" stroke-linecap="round" stroke-width="12" d="M126 130v-26c0-9.941-8.059-18-18-18v0c-9.941 0-18 8.059-18 18v26"></path></g></svg>
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
    </div>
  )
}

export default Contact