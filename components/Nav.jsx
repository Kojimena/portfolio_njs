"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Nav = () => {
  return (
    <nav className='flex-between w-full pt-4'>
        <Link href='/' className='flex gap-2 flex-center'>
            <Image src='/assets/images/logo.png'alt='logo' width={40} height={40} className='object-contain'/>
        </Link>
       <button className='flex gap-2 flex-end' >
        <Link href='/menu'>
            <Image src='/assets/icons/menuwhite.svg'alt='burger' width={40} height={40} className='object-contain'/>
        </Link>
         </button>
    </nav>
  )
}

export default Nav