import Image from 'next/image'

const Home = () => {
  return (
    <section className="w-full flex flex-col justify-end items-center h-full">
        <h1 className="flex flex-col text-center">
          <span className="font-strech head_text white-text">I&apos;M JIMENA ORTEGA</span>
          <br className="" />
          <span className="text-gray-300 text-center text-2xl font-inter">
            Front-end web developer, UX/UI designer and sometimes I do poetry.
          </span>
          <span className="text-gray-400 text-center text-xl font-bold uppercase">(made in Guatemala)</span>
        </h1>
        <Image src="/assets/images/profilepic.png" alt="Jimena Ortega" width={400} height={400} className="" />
    </section>
  )
}

export default Home