import './globals.css'
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const ninitoSans = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lista de países',
  description: 'Uma lista de países criada com o Next 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ninitoSans.className}>
      <main className="bg-gray-100 min-h-screen flex flex-col items-center">
        <nav className='w-full bg-white h-16 flex items-center justify-center'>
          <section className='container flex items-center gap-3'>
            <Image width={48} height={48} src="/logo.svg" alt="Logo da aplicação - emoji de globo"/>
            <Link href="/">
            <h1 className='font-bold text-2xl'>Lista de países</h1>
           </Link>
          </section>
        </nav>
        {children}
      </main> 
      </body>
    </html>
  )
}
