import "@/styles/globals.css";
import "@/public/assets/fonts/fonts.css";
import Nav from "@/components/Nav";

export const metadata = {
    title: 'Kojimena',
    description: 'Diseño y desarrollo de páginas web en Guatemala',
}

const RootLayout = ({children}) => {
  return (
    <html lang="es">
        <head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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