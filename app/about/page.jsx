import Image from "next/image"

const About = () => {

    return (
        <section className="flex flex-col items-start justify-center w-full h-full">
            <span className="text-4xl font-strech text-left text-white font-bold mt-6 md:mt-8 uppercase">Abbout me</span>
            <div className="flex flex-col items-start justify-center gap-2 pt-8 md:pt-4">
                <span className="md:text-2xl font-hoey text-left text-white ">You can call me <span className="font-bold">Jime</span></span>
                <span className="md:text-2xl font-hoey text-left text-white ">I am a <span className="font-bold">fourth-year</span> student in Computing Engineering, recognized for my high academic performance and passion for technology. I have skills in <span className="font-bold">programming</span> and web design, actively engaging in both academic and professional projects. My experience includes working with Garoo Inc and as a freelance developer, focusing on innovative <span className="font-bold">digital solutions</span>. Committed to continuous learning and community service, I also devote my time as a teaching assistant and active member of <span className="font-bold">Rotaract</span>.</span>
            </div>
            <div className="flex flex-col items-start justify-end w-full h-full relative">
                <Image src="/assets/images/profilepic.png" alt="Jimena Ortega" width={400} height={400} className="absolute xs:left-0" />
            </div>
        </section>
    )
}

export default About

