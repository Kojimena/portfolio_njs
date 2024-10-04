"use client";
import Cube from "@/components/Cube";
import Image from "next/image";

const Home = () => {

  return (
    <section className="w-full h-full flex flex-col justify-end items-center h-full ">
        <h1 className="flex flex-col text-center">
          <span className="font-strech head_text">I&apos;M JIMENA ORTEGA</span>
          <br className="" />
          <span className="font-hoey text-gray-300 text-center xs:text-xl md:text-2xl font-weight-800">
            Front-end <span className="font-bold white-text">web developer,</span>
            UX/UI
            <span className="font-bold white-text"> designer,</span>
            <span className="font-bold white-text"> freelancer </span> 
            and sometimes I do 
            <span className="font-bold white-text"> poetry</span>.
          </span>
        </h1>
        <span className="font-hoey text-gray-400 text-center xs:text-xl md:text-2xl font-bold ">(made in Guatemala)</span>
        <div className="flex flex-row justify-center items-center gap-2 pt-8 md:pt-6 w-full gap-8">
          <a href='/projects' className="bg-transparent flex justify-center items-center uppercase text-white hover:shadow-lg hover:rounded-full hover:transform hover:scale-110 hover:bg-black hover:text-white hover:p-2 font-hoey font-weight-800">
            Projects
          </a>
          <a href='/about' className="bg-transparent flex justify-center items-center uppercase text-white hover:shadow-lg hover:rounded-full hover:transform hover:scale-110 hover:bg-black hover:text-white hover:p-2 font-hoey font-weight-800">
            About me
          </a>
        </div>
          <Image src="/assets/images/profilepic.png" alt="Jimena Ortega" width={350} height={350} className="relative bottom-0 justify-end" />
    </section>
  )
}

export default Home