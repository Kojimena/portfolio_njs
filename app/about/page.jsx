import Image from "next/image"

const About = () => {

    return (
        <div className="flex flex-col items-start justify-center w-full h-full">
            <span className="text-4xl font-strech text-left text-white font-bold mt-6 md:mt-8 uppercase">Abbout me</span>
            <div className="flex flex-col items-start justify-center gap-2 pt-8 md:pt-4">
                <span className="md:text-2xl font-hoey text-left text-white ">You can call me Jime</span>
                <span className="md:text-2xl font-hoey text-left text-white ">Im a Computer science Student</span>
                <span className="md:text-2xl font-hoey text-left text-white ">Im 19 years old</span>
                <span className="md:text-2xl font-hoey text-left text-white ">I love coffee</span>
            </div>
            <div className="flex flex-col items-start justify-end w-full h-full relative">
                <Image src="/assets/images/mushroom.png" alt="Hoey" width={400} height={400} className="absolute md:bottom-0 md:right-0 xs:right-24" />
                <Image src="/assets/images/profilepic.png" alt="Jimena Ortega" width={400} height={400} className="absolute xs:left-4" />
            </div>
        </div>
    )
}

export default About

