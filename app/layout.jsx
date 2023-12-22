import "@/styles/globals.css";
import "@/public/assets/fonts/fonts.css";
import Nav from "@/components/Nav";

export const metadata = {
    title: 'Kojimena',
    description: 'Diseño y desarrollo de páginas web en Guatemala',
    url: 'https://kojimena.com',
    image: '/assets/images/kojimenaicon.png',
}

const RootLayout = ({children}) => {
  return (
    <html lang="es">
        <head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content={metadata.title} />
            <meta property="og:description" content={metadata.description} />
            <meta property="og:image" content={metadata.image} />
            <meta property="og:url" content={metadata.url} />
            <meta name="keywords" content="diseño web, desarrollo web, web en Guatemala, páginas web, "></meta>            
            <link rel="icon" href="/assets/images/logo.png" />
        </head>
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <main className='app'>
                <Nav/>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout