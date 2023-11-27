import Image from "next/image"

const About = () => {

    return (
        <div className="flex flex-col items-start justify-end w-full h-full pt-4">
            <div className="flex flex-col">
                <Image src="/assets/icons/bubble.svg" width={400} height={400} alt="Kojimena" className="text-white" />
                <Image src="/assets/images/profilepic.png" alt="Jimena Ortega" width={400} height={400} className="" />
            </div>

        </div>
    )
}

export default About

