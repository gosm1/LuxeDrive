import React, { useState } from 'react'
import logo from '@/assets/Logo.png'
import Image from 'next/image'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative w-full bg-bgblack text-sm">
      <nav className="max-w-[85rem] w-full mx-auto px-4">
        <div className="flex items-center justify-between pt-4">
          <a className="flex-none text-white text-2xl font-semibold focus:outline-none focus:opacity-80" href="/" aria-label="Brand">
            Luxe<span className='text-greeyellow'>Drive</span>
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              className="text-white hover:text-gray-400 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
          <div className="hidden sm:block">
            <div className="flex text-lg items-center gap-5">
              <a className="text-greeyellow focus:outline-none" href="#" aria-current="page">Home</a>
              <a className="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400" href="#About-Us">About Us</a>
              <a className="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400" href="/cars">Cars</a>
              <a className="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400" href="#categories">Categories</a>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
          <div className="flex flex-col gap-4 py-4 border-t border-gray-700">
            <a className="text-greeyellow focus:outline-none text-lg" href="#" aria-current="page">Home</a>
            <a className="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400 text-lg" href="#About-Us">About Us</a>
            <a className="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400 text-lg" href="/cars">Cars</a>
            <a className="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400 text-lg" href="#categories">Categories</a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
