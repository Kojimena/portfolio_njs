"use client"
import React, { useState } from 'react'
import ProjectItem from '@/components/ProjectItem'
import { FaRegEye } from "react-icons/fa6";

const Projects = () => {
    const arrayProjects = [
        {
          id: "project1",
          name: "Whapay",
          image: "/assets/projectImages/whapay.png",
          url: "https://www.figma.com/proto/20wdWCAaeyTwJZTuuRIwps/whatsapp.ut-(Community)?page-id=0%3A1&type=design&node-id=105-231&viewport=510%2C182%2C0.2&t=20PAb6Jzt5vncuzG-1&scaling=scale-down&starting-point-node-id=2%3A180&mode=design",
          desc: "Integrando opciones de pago a Whatsapp",
          tags : ["Figma", "UI/UX"]
        },
        {
          id: "project2",
          name: "Steam for moms",
          image: "/assets/projectImages/steam.png",
          url: "https://www.figma.com/proto/0Hm4NfpNN7W0rnHoOQnr7z/Steam-UI-(Community)?page-id=0%3A1&type=design&node-id=1-2&viewport=393%2C49%2C0.12&t=bscTc3pCC6t2cSRb-1&scaling=scale-down&starting-point-node-id=220%3A4&mode=design",
          desc: "Rediseño de la plataforma Steam para madres",
          tags : ["Figma", "UI/UX"]
        },
        {
          id: "project3",
          name: "Coffee machine",
          image: "/assets/projectImages/coffee.png",
          url: "https://github.com/Kojimena/WEB-L4",
          desc: "Maquina de café usando únicamente HTML y CSS",
          tags : ["HTML", "CSS"]
        },
        {
          id: "project4",
          name: "Github in React",
          image: "/assets/projectImages/github.png",
          url: "https://incredible-lollipop-630aec.netlify.app",
          desc: "Página principal de Github usando componentes de React",
          tags : ["React"]
        },
        {
          id: "project5",
          name: "Calculator",
          image: "/assets/projectImages/calculator.png",
          url: "https://fabulous-crostata-9abe88.netlify.app",
          desc: "Calculadora con implementación de vitest",
          tags : ["React", "Vitest"]
        },
        {
          id: "project6",
          name: "Uniempleos",
          image: "/assets/projectImages/uniempleos.png",
          url: "https://uniempleos.netlify.app/",
          desc: "Página de empleos usando React",
          tags : ["React", "UI/UX"]
        }
      ]

    const arrayWork = [
        {
          id: "work1",
          name : "Banky",
          image : "/assets/projectImages/banky.png",
          url:"https://bankychat.com/",
          tags : ["React", "NodeJS"]

        },
        {
          id: "work2",
          name : "Luka",
          image : "/assets/projectImages/luka.png",
          url:"https://luka.gt/",
          tags : ["React", "NodeJS"]
        },
        {
          id: "work3",
          name : "La Pista",
          image : "/assets/projectImages/lapista.png",
          url:"https://lapista.gt/",
          tags : ["React", "NodeJS"]
        },
        {
          id: "work4",
          name : "Diseño de portafolio",
          image : "/assets/projectImages/portfolio1.png",
          url: "https://www.figma.com/file/GEO4qG5W3g8GNyMXVvRcrP/ANGELCAS-PORTFOLIO?type=design&node-id=0%3A1&mode=design&t=hfuRm3MNtqZLRbw9-1",
          tags : ["Figma", "UI/UX"]
        },
        {
          id: "work5",
          name : "Paez",
          image : "/assets/projectImages/paez.png",
          url:"https://paez.com/",
          tags : ["Shopify", "Liquid", "E-commerce"]
        },
        {
          id: "work6",
          name : "YVM",
          image : "/assets/projectImages/yvm.png",
          url:"https://yovotomejor.com/",
          tags : ["Shopify", "Liquid"]
        },
        {
          id: "work7",
          name: "La Tavola",
          image : "/assets/projectImages/tavola.png",
          url:"https://shop.latavolabistro.com/",
          tags : ["Shopify", "Liquid"]
        },
        {
          id: "work8",
          name: "Nacion Sushi",
          image : "/assets/projectImages/nc.png",
          url:"https://nacion.delivery/",
          tags : ["Shopify", "Liquid"]
        },
        {
          id: "work9",
          name: "MCN",
          image : "/assets/projectImages/mcn.png",
          url:"https://mcn.org.gt/",
          tags : ["Shopify", "Liquid"]
        },
        {
          id: "work10",
          name: "Novo",
          image : "/assets/projectImages/novo.png",
          url:"https://grupo-novo.com/",
          tags : ["Shopify", "Liquid"]
        },
        {
          id: "work11",
          name: "Paliare",
          image: "/assets/projectImages/paliare.png",
          url:"https://paliarestudio.com/",
          tags : ["NextJS", "React"]
        },
        {
          id: "work12",
          name: "GarooInc",
          image: "/assets/projectImages/garooinc.png",
          url:"https://garooinc.com/",
          tags : ["NextJS", "React"]
        },
        {
          id: "work13",
          name: "CritiqStars",
          image: "/assets/projectImages/critiqstars.png",
          url:"https://critiqstars.com/",
          tags : ["NextJS", "React", "UI/UX"]
        },
        {
          id: "work14",
          name: "Boquiteo",
          image : "/assets/projectImages/boquiteo.png",
          url:"https://boquiteo.com/",
          tags : ["Shopify", "Liquid"]
        },
        {
          id: "work15",
          name: "Lacoste",
          image : "/assets/projectImages/lacoste.png",
          url:"https://riposto.com.gt/",
          tags : ["Shopify", "Liquid"]
        },
        {
          id: "work16",
          name: "Volviendo a Latir",
          image : "/assets/projectImages/aldo.png",
          url:"https://volviendoalatir.com/",
          tags : ["Shopify", "Liquid"]
        },
        {
          id: "work17",
          name: "Bloque",
          image : "/assets/projectImages/bloque.png",
          url:"https://bloque.gt/",
          tags : ["Shopify", "Liquid"]
        },
        {
          id: "work18",
          name: "Prodisa",
          image : "/assets/projectImages/prodisa.png",
          url:"https://prodisa.com.gt/",
          tags : ["NextJS", "React", "UI/UX"]
        },
        {
          id: "work19",
          name: "Itzana Room Directory",
          image : "/assets/projectImages/itzana.png",
          url:"https://itzana.room-directory.com/en",
          tags : ["NextJS", "React"]
        },
        {
          id: "work20",
          name: "Kaana Room Directory",
          image : "/assets/projectImages/kaana.png",
          url:"https://kaana.room-directory.com/en",
          tags : ["NextJS", "React"]
        },
        {
          id: "work21",
          name: "Rock n Rolla",
          image : "/assets/projectImages/rocknrolla.png",
          url:"https://rocknrolla23.com/",
          tags : ["NextJS", "React"]
        }
        ]

  const complete = [...arrayProjects, ...arrayWork].reverse();

  const [filteredProjects, setFilteredProjects] = useState(complete);
  const [activeButton, setActiveButton] = useState("all");

  const filterProjects = (tag) => {
    if (tag === "all") {
      setFilteredProjects(complete);
      setActiveButton("all");
    } else if (tag === "ux") {
      setFilteredProjects(complete.filter(project => project.tags.includes("UI/UX")));
      setActiveButton("ux");
    } else if (tag === "dev") {
      setFilteredProjects(complete.filter(project => project.tags.some(t => ["React", "NodeJS", "HTML", "CSS", "NextJS", "Shopify", "Liquid", "E-commerce", "Vitest"].includes(t))));
      setActiveButton("dev");
    }
  };

  return (
    <div className="flex flex-col items-start justify-center w-full px-10 md:px-0">
        <span className="text-4xl font-strech text-left text-white font-bold mt-6 md:mt-8 uppercase">Projects</span>
        <div className="flex gap-4 my-4 w-full justify-center items-center">
        <button 
        className={`secondary_button ${activeButton === "all" ? "btn_active" : ""}`} 
        onClick={() => filterProjects("all")}
      >
        All
      </button>
      <button 
        className={`secondary_button ${activeButton === "ux" ? "btn_active" : ""}`} 
        onClick={() => filterProjects("ux")}
      >
        UX
      </button>
      <button 
        className={`secondary_button ${activeButton === "dev" ? "btn_active" : ""}`} 
        onClick={() => filterProjects("dev")}
      >
        DEV
      </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full h-full py-10 "> 
            {
                filteredProjects.map((work) => (
                    <div key={work.id} id={work.id} className="flex flex-col items-center justify-center relative animation glassmorphism rounded-md cursor-pointer" onClick={() => window.open(work.url, "_blank")}>
                        <img src={work.image} className="w-full h-40 md:h-[200px] object-cover rounded-t-md" alt={work.name} />
                        <span className="md:text-2xl text-xl font-hoey text-left text-white py-4 ">{work.name}</span>
                        <button className="absolute top-8 right-2 rounded-full p-1 bg-white text-black hover:bg-black hover:text-white" onClick={() => window.open(work.url, "_blank")}>
                            <FaRegEye />
                        </button>
                        <div className="flex flex-row items-start justify-start gap-2 w-full p-2">
                            {
                                work.tags.map((tag) => (
                                    <span key={tag} className="text-black font-hoey bg-white p-1 rounded-md">{tag}</span>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
            </div> 
            
    </div>
  )
}

export default Projects