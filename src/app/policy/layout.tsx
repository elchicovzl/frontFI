import Navbar from '../components/Navbar/Navbar'
import RegisterModal from '../components/modals/RegisterModal'
import '../globals.css'
import { Inter } from 'next/font/google'
import ToasterProvider from '../providers/ToasterProvider'
import LoginModal from '../components/modals/LoginModal'
import getCurrentUser from '../actions/getCurrentUser'
import RentModal from '../components/modals/RentModal'
import SearchModal from '../components/modals/SearchModal'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Frontera Inmobiliaria - politicas',
  description: 'Frontera inmobiliaria politicas.',
}
    
export default function PolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <main className="sm:pb-20 sm:pt-10">
      {children}
    </main>
  )
}
