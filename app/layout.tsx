import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({weight: "400", subsets: ['latin'] })



export const metadata: Metadata = {
  title: 'Fizzler',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}, ${poppins.className}`}>{children}</body>
    </html>
  )
}
