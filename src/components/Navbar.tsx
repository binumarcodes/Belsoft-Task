'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Logo from '../assets/logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#FDF7FF] fixed w-full z-50 border-y border-[#75687E] py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Image src={Logo} alt="Logo" width={60} height={60} />
            <h1 className="text-xl font-bold ml-2 text-black">Founder’s Friday</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="#home" className="text-[#8300FF] hover:text-blue-600 font-medium">Home</Link>
            <Link href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About Us</Link>
            <Link href="#gallery" className="text-gray-700 hover:text-blue-600 font-medium">Gallery</Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact Us</Link>

            <Link
              href="/register"
              className="ml-24 border border-[#9524FF] text-[#9524FF] hover:text-white hover:bg-[#9524FF] px-6 py-2 rounded-[15px] flex items-center space-x-2 transition duration-300"
            >
              <span>Register</span>
              <FaArrowRight className="text-xl" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow">
          <Link href="#about" className="block text-gray-700 hover:text-blue-600 font-medium">About Us</Link>
          <Link href="#services" className="block text-gray-700 hover:text-blue-600 font-medium">Services</Link>
          <Link href="#faq" className="block text-gray-700 hover:text-blue-600 font-medium">FAQs</Link>
          <Link href="#contact" className="block text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
          <Link
            href="/register"
            className="block w-full bg-[#9524FF] text-white px-4 py-2 rounded hover:bg-[#7b1de5] transition text-center"
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  )
}
