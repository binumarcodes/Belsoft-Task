'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";

import Logo from "../assets/logo.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
<nav
  className="bg-[#FDF7FF] fixed w-full z-50"
  style={{
    borderBottomWidth: 0.5,
    borderBottomColor: "#75687E",
    borderTopWidth: 0.5,
    borderTopColor: "#75687E",
    outline: "none", // Proper outline removal
  }}
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
          <Image src={Logo} alt="Logo" width={60} height={60} />
          <h1 className="text-xl font-bold ml-2 text-black">
          Founder’s Friday
          </h1>
        </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
                <Link href="#home" className="text-gray-700 hover:text-blue-600" style={{color: "#8300FF"}}>Home</Link>
                <Link href="#about" className="text-gray-700 hover:text-blue-600">About Us</Link>
                <Link href="#gallery" className="text-gray-700 hover:text-blue-600">Gallery</Link>
                <Link href="#contact" className="text-gray-700 hover:text-blue-600">Contact Us</Link>
                <Link
            href="/register"
            className="border px-6 py-2 rounded-lg flex items-center space-x-2 hover:text-white transition duration-300"
            style={{
              borderColor: '#9524FF',
              color: '#9524FF',
              marginLeft: 100,
              borderRadius: 15
            }}
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
          <Link href="#about" className="block text-gray-700 hover:text-blue-600">About</Link>
          <Link href="#services" className="block text-gray-700 hover:text-blue-600">Services</Link>
          <Link href="#faq" className="block text-gray-700 hover:text-blue-600">FAQs</Link>
          <Link href="#contact" className="block text-gray-700 hover:text-blue-600">Contact</Link>
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Register
          </button>
        </div>
      )}
    </nav>
  )
}
