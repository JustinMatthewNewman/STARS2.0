import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './providers'

import TabsNavbar from './components/navbar/TabsNavbar'
import dynamic from 'next/dynamic'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'STARS',
  description: 'Statistical team athletic rendering software'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const Background = dynamic(() => import('./components/background/BackgroundImage'), { ssr: false })

  return (
    <html lang='en'>
      <body className={inter.className} style={{height: "100%"}}>
        <Providers>
        <Background/>
          <header>
            <TabsNavbar session={null}/>
            {/* <NextNavbar/> */}
          </header>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
