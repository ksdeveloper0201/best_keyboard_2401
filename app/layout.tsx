import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { NavigationMenuDemo } from '@/components/NavigationHeader'

const notoSansJp = Noto_Sans_JP({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={notoSansJp.className}>
        <NavigationMenuDemo/>
        <Header/>
        {children}</body>
    </html>
  )
}
