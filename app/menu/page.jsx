import Link from "next/link"
const Menu = () => {

    const menu = [
        {
            name: "Abbout",
            url: "/about"
        },
        {
            name: "Proojects",
            url: "/projects"
        },
        {
            name: "Sstack",
            url: "/stack"
        },
        {
            name: "Conntact",
            url: "/contact"
        },
        ]
  
    return (
        <section className="flex justify-center items-center w-full h-full">
          <div className="flex flex-col justify-center items-center">
            <ul className="flex flex-col justify-center items-center gap-16">
                {menu.map((item, index) => (
                    <li key={index} className="mb-4 font-strech text-white text-2xl md:text-4xl uppercase hover:text-gray-400">
                        <Link href={item.url}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
          </div>
        </section>
    )
  }
  
  export default Menu
  