import Image from 'next/image'

const Home = () => {

  return (
    <section className="w-full flex flex-col justify-end items-center h-full homecursor">
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
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 15L16 12M16 12L13 9M16 12H8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            Projects
          </a>
          <a href='/about' className="bg-transparent flex justify-center items-center uppercase text-white hover:shadow-lg hover:rounded-full hover:transform hover:scale-110 hover:bg-black hover:text-white hover:p-2 font-hoey font-weight-800">
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 15L16 12M16 12L13 9M16 12H8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            About me
          </a>
        </div>
        <Image src="/assets/images/profilepic.png" alt="Jimena Ortega" width={400} height={400} className="" />
    </section>
  )
}

export default Home