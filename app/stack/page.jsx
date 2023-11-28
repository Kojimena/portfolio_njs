"use client";
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

const Stack = () => {
    const frameworksList = [
        {
          name: "React",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "NextJs",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
      ]
    
      const toolsList = [
        {
          name: "Git",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "Github",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
          name: "VSCode",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        },
        {
          name: "Figma",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
        {
          name: "Android Studio",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
        },
        {
          name: "Canva",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
        },
        {
          name: "Firebase",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
        {
          name: "Eslint",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg",
        },
      ]
    
      const languagesList = [
        {
          name: "HTML",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "JavaScript",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "Java",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          name: "Python",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "C++",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        },
      ]
    
      // Estado para la lista de íconos actual
      const [currentIcons, setCurrentIcons] = useState(frameworksList)
    
      // Funciones para actualizar la lista de íconos
      const showFrameworks = () => setCurrentIcons(frameworksList)
      const showTools = () => setCurrentIcons(toolsList)
      const showLanguages = () => setCurrentIcons(languagesList)

  return (
    <div className='flex flex-col items-start justify-start w-full h-full'>
        <span className='text-4xl font-strech text-left text-white font-bold mt-6 md:mt-8 uppercase'>Stack</span>
        <div className='flex xs:items-start md:items-center justify-center gap-2 pt-8 md:pt-4 w-full'>
            <button onClick={showFrameworks} className='btn bg-white text-black hover:bg-black hover:text-white uppercase'>Frameworks</button>
            <button onClick={showTools} className='btn bg-white text-black hover:bg-black hover:text-white uppercase'>Tools</button>
            <button onClick={showLanguages} className='btn bg-white text-black hover:bg-black hover:text-white uppercase'>Languages</button>
        </div>
        <div className='flex xs:flex-col md:flex-wrap md:flex-row items-start justify-center gap-2 mt-8 md:mt-8 glassmorphism p-4 xs:w-full'>
            {
                currentIcons.map((icon) => (
                    <div key={icon.name} className='flex xs:flex-wrap gap-2 flex-center'>
                        <Image src={icon.image} alt={icon.name} width={60} height={60} className='object-contain'/>
                        <span className='text-xl font-hoey text-left text-white'>{icon.name}</span>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Stack