import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from './components/Navbar'
import { ContactMe } from './components/ContactMe'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vaibhav Shukla | Portfolio',
  description: 'This is my portfolio website.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navbar */}
        <Navbar />
        {children}
        {/* Contact Me */}
        <ContactMe />
      </body>
    </html>
  )
}
