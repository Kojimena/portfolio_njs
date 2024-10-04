"use client"
import React, { useState } from 'react'
import ProjectItem from '@/components/ProjectItem'
import { FaRegEye } from "react-icons/fa6";

const Projects = () => {
    const arrayProjects = [
        {
          name: "Whapay",
          image: "/assets/projectImages/whapay.png",
          url: "https://www.figma.com/proto/20wdWCAaeyTwJZTuuRIwps/whatsapp.ut-(Community)?page-id=0%3A1&type=design&node-id=105-231&viewport=510%2C182%2C0.2&t=20PAb6Jzt5vncuzG-1&scaling=scale-down&starting-point-node-id=2%3A180&mode=design",
          desc: "Integrando opciones de pago a Whatsapp",
          tags : ["Figma", "UI/UX"]
        },
        {
          name: "Steam for moms",
          image: "/assets/projectImages/steam.png",
          url: "https://www.figma.com/proto/0Hm4NfpNN7W0rnHoOQnr7z/Steam-UI-(Community)?page-id=0%3A1&type=design&node-id=1-2&viewport=393%2C49%2C0.12&t=bscTc3pCC6t2cSRb-1&scaling=scale-down&starting-point-node-id=220%3A4&mode=design",
          desc: "Rediseño de la plataforma Steam para madres",
          tags : ["Figma", "UI/UX"]
        },
        {
          name: "Coffee machine",
          image: "/assets/projectImages/coffee.png",
          url: "https://github.com/Kojimena/WEB-L4",
          desc: "Maquina de café usando únicamente HTML y CSS",
          tags : ["HTML", "CSS"]
        },
        {
          name: "Github in React",
          image: "/assets/projectImages/github.png",
          url: "https://incredible-lollipop-630aec.netlify.app",
          desc: "Página principal de Github usando componentes de React",
          tags : ["React"]
        },
        {
          name: "Calculator",
          image: "/assets/projectImages/calculator.png",
          url: "https://fabulous-crostata-9abe88.netlify.app",
          desc: "Calculadora con implementación de vitest",
          tags : ["React", "Vitest"]
        },
        {
          name: "Uniempleos",
          image: "/assets/projectImages/uniempleos.png",
          url: "https://uniempleos.netlify.app/",
          desc: "Página de empleos usando React",
          tags : ["React", "UI/UX"]
        }
      ]

    const arrayWork = [
        {
          name : "Banky",
          image : "/assets/projectImages/banky.png",
          id: "item1",
          url:"https://bankychat.com/",
          tags : ["React", "NodeJS"]

        },
        {
          name : "Luka",
          image : "/assets/projectImages/luka.png",
          id: "item2",
          url:"https://luka.gt/",
          tags : ["React", "NodeJS"]
        },
        {
          name : "La Pista",
          image : "/assets/projectImages/lapista.png",
          id: "item3",
          url:"https://lapista.gt/",
          tags : ["React", "NodeJS"]
        },
        {
            name : "Diseño de portafolio",
            image : "/assets/projectImages/portfolio1.png",
            id: "item4",
            url: "https://www.figma.com/file/GEO4qG5W3g8GNyMXVvRcrP/ANGELCAS-PORTFOLIO?type=design&node-id=0%3A1&mode=design&t=hfuRm3MNtqZLRbw9-1",
            tags : ["Figma", "UI/UX"]
        },
        {
            name : "Paez",
            image : "/assets/projectImages/paez.png",
            id: "item5",
            url:"https://paez.com/",
            tags : ["Shopify", "Liquid", "E-commerce"]
        },
        {
            name : "YVM",
            image : "/assets/projectImages/yvm.png",
            id: "item6",
            url:"https://yovotomejor.com/",
            tags : ["Shopify", "Liquid"]
        },
        {
            name: "La Tavola",
            image : "/assets/projectImages/tavola.png",
            id: "item7",
            url:"https://shop.latavolabistro.com/",
            tags : ["Shopify", "Liquid"]
        },
        {
            name: "Nacion Sushi",
            image : "/assets/projectImages/nc.png",
            id: "item8",
            url:"https://nacion.delivery/",
            tags : ["Shopify", "Liquid"]
        },
        {
            name: "MCN",
            image : "/assets/projectImages/mcn.png",
            id: "item9",
            url:"https://mcn.org.gt/",
            tags : ["Shopify", "Liquid"]
        },
        {
            name: "Novo",
            image : "/assets/projectImages/novo.png",
            id: "item10",
            url:"https://grupo-novo.com/",
            tags : ["Shopify", "Liquid"]
        },
        {
          name: "Paliare",
          image: "/assets/projectImages/paliare.png",
          id: "item11",
          url:"https://paliarestudio.com/",
          tags : ["NextJS", "React"]
        },
        {
          name: "GarooInc",
          image: "/assets/projectImages/garooinc.png",
          id: "item12",
          url:"https://garooinc.com/",
          tags : ["NextJS", "React"]
        },
        {
          name: "CritiqStars",
          image : "/assets/projectImages/critiqstars.png",
          id: "item13",
          url:"https://critiqstars.com/",
          tags : ["NextJS", "React", , "UI/UX"]
        },
        {
          name: "Boquiteo",
          image : "/assets/projectImages/boquiteo.png",
          id: "item14",
          url:"https://boquiteo.com/",
          tags : ["Shopify", "Liquid"]
        },
        {
          name: "Lacoste",
          image : "/assets/projectImages/lacoste.png",
          id: "item15",
          url:"https://riposto.com.gt/",
          tags : ["Shopify", "Liquid"]
        },
        {
          name: "Volviendo a Latir",
          image : "/assets/projectImages/aldo.png",
          id: "item16",
          url:"https://volviendoalatir.com/",
          tags : ["Shopify", "Liquid"]
        },
        {
          name: "Bloque",
          image : "/assets/projectImages/bloque.png",
          id: "item17",
          url:"https://bloque.gt/",
          tags : ["Shopify", "Liquid"]
        },
        {
          name: "Prodisa",
          image : "/assets/projectImages/prodisa.png",
          id: "item18",
          url:"https://prodisa.com.gt/",
          tags : ["NextJS", "React", "UI/UX"]
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