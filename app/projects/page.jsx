"use client"
import React from 'react'
import ProjectItem from '@/components/ProjectItem'
import { FaRegEye } from "react-icons/fa6";

const Projects = () => {
    const arrayProjects = [
        {
          name: "Whapay",
          image: "/assets/projectImages/whapay.png",
          url: "https://www.figma.com/proto/20wdWCAaeyTwJZTuuRIwps/whatsapp.ut-(Community)?page-id=0%3A1&type=design&node-id=105-231&viewport=510%2C182%2C0.2&t=20PAb6Jzt5vncuzG-1&scaling=scale-down&starting-point-node-id=2%3A180&mode=design",
          desc: "Integrando opciones de pago a Whatsapp",
        },
        {
          name: "Steam for moms",
          image: "/assets/projectImages/steam.png",
          url: "https://www.figma.com/proto/0Hm4NfpNN7W0rnHoOQnr7z/Steam-UI-(Community)?page-id=0%3A1&type=design&node-id=1-2&viewport=393%2C49%2C0.12&t=bscTc3pCC6t2cSRb-1&scaling=scale-down&starting-point-node-id=220%3A4&mode=design",
          desc: "Rediseño de la plataforma Steam para madres",
        },
        {
          name: "Coffee machine",
          image: "/assets/projectImages/coffee.png",
          url: "https://github.com/Kojimena/WEB-L4",
          desc: "Maquina de café usando únicamente HTML y CSS",
        },
        {
          name: "Memory Game",
          image: "/assets/projectImages/memorygame.png",
          url: "https://uvgenios.online/21199/WEB-L6/index.html",
          desc: "Juego de memoria usando React",
        },
        {
          name: "Github in React",
          image: "/assets/projectImages/github.png",
          url: "https://incredible-lollipop-630aec.netlify.app",
          desc: "Página principal de Github usando componentes de React",
        },
        {
          name: "Calculator",
          image: "/assets/projectImages/calculator.png",
          url: "https://fabulous-crostata-9abe88.netlify.app",
          desc: "Calculadora con implementación de vitest",
        },
        {
          name: "Uniempleos",
          image: "/assets/projectImages/uniempleos.png",
          url: "https://sage-palmier-936be2.netlify.app/",
          desc: "Página de empleos usando React",
        },
        {
          name: "Diseño de portafolio",
          image: "/assets/projectImages/portfolio1.png",
          url: "https://www.figma.com/file/GEO4qG5W3g8GNyMXVvRcrP/ANGELCAS-PORTFOLIO?type=design&node-id=0%3A1&mode=design&t=hfuRm3MNtqZLRbw9-1",
          desc: "Diseño de portafolio",
        },
      ]

    const arrayWork = [
        {
          name : "Banky",
          image : "/assets/projectImages/banky.png",
          id: "item1",
          url:"https://bankychat.com/"
        },
        {
          name : "Luka",
          image : "/assets/projectImages/luka.png",
          id: "item2",
          url:"https://luka.gt/"
        },
        {
          name : "La Pista",
          image : "/assets/projectImages/lapista.png",
          id: "item3",
          url:"https://lapista.gt/"
        },
        {
            name : "Diseño de portafolio",
            image : "/assets/projectImages/portfolio1.png",
            id: "item4",
            url: "https://www.figma.com/file/GEO4qG5W3g8GNyMXVvRcrP/ANGELCAS-PORTFOLIO?type=design&node-id=0%3A1&mode=design&t=hfuRm3MNtqZLRbw9-1",
        },
        {
            name : "Paez",
            image : "/assets/projectImages/paez.png",
            id: "item5",
            url:"https://paez.com/"
        },
        {
            name : "YVM",
            image : "/assets/projectImages/yvm.png",
            id: "item6",
            url:"https://yovotomejor.com/"
        },
        {
            name: "La Tavola",
            image: "/assets/projectImages/tavola.png",
            id: "item7",
            url:"https://shop.latavolabistro.com/"
        },
        {
            name: "Nacion Sushi",
            image: "/assets/projectImages/nc.png",
            id: "item8",
            url:"https://nacion.delivery/"
        },
        {
            name: "MCN",
            image: "/assets/projectImages/mcn.png",
            id: "item9",
            url:"https://mcn.org.gt/"
        },
        {
            name: "Novo",
            image: "/assets/projectImages/novo.png",
            id: "item10",
            url:"https://grupo-novo.com/"
        },
        {
          name: "Proinmo",
          image: "/assets/projectImages/proinmo.png",
          id: "item11",
          url:"https://www.proinmo502.com/"
        },
        {
          name: "GarooInc",
          image: "/assets/projectImages/garooinc.png",
          id: "item12",
          url:"https://garooinc.com/"
        },
        {
          name: "CritiqStars",
          image: "/assets/projectImages/critiqstars.png",
          id: "item13",
          url:"https://critiqstars.com/"
        },
        {
          name: "Boquiteo",
          image: "/assets/projectImages/boquiteo.png",
          id: "item14",
          url:"https://boquiteo.com/"
        }
        ]
  return (
    <div className="flex flex-col items-start justify-center w-full">
        <span className="text-4xl font-strech text-left text-white font-bold mt-6 md:mt-8 uppercase">Projects</span>
        <div className="carousel w-full">
            {
                arrayWork.map((work) => (
                    <div key={work.id} id={work.id} className="carousel-item w-full relative">
                        <img src={work.image} className="w-full h-62 md:h-[600px] object-cover rounded-md my-4" alt={work.name} />
                        <button className="absolute top-8 right-2 rounded-full p-1 bg-white text-black hover:bg-black hover:text-white" onClick={() => window.open(work.url, "_blank")}>
                            <FaRegEye />
                        </button>
                    </div>
                ))
            }
            </div> 
            <div className="flex justify-center w-full py-2 gap-2 xs:flex-wrap">
                {
                    arrayWork.map((work) => (
                        <a key={work.id} href={`#${work.id}`} className="font-hoey flex justify-center items-center btn-xs glassmorphism text-white hover:bg-black hover:text-white hover:shadow-lg">{work.name}</a>
                    ))
                }
            </div>
            <div className="flex flex-col items-center justify-center gap-4 md:gap-8 pt-8 md:pt-4">
                {arrayProjects.map((project) => (
                    <ProjectItem key={project.name} name={project.name} img={project.image} link={project.url} desc={project.desc} />
                ))}
            </div>
    </div>
  )
}

export default Projects