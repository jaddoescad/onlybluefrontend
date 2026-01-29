'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-sm'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
              scrolled ? 'bg-blue-600' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <span className="text-white font-bold text-xl">O</span>
            </div>
            <span className={`text-xl font-bold transition-colors ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>OnlyBlue</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className={`transition-colors font-medium ${
              scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'
            }`}>
              Features
            </Link>
            <Link href="#community" className={`transition-colors font-medium ${
              scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'
            }`}>
              Community
            </Link>
            <Link href="#trades" className={`transition-colors font-medium ${
              scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'
            }`}>
              Trades
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/auth?mode=login"
              className={`transition-colors font-medium ${
                scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'
              }`}
            >
              Log in
            </Link>
            <Link
              href="/feed"
              className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                scrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white text-blue-700 hover:bg-white/90'
              }`}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
          <div className="px-4 py-4 space-y-4">
            <Link
              href="#features"
              className="block text-gray-600 hover:text-gray-900 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#community"
              className="block text-gray-600 hover:text-gray-900 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Community
            </Link>
            <Link
              href="#trades"
              className="block text-gray-600 hover:text-gray-900 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Trades
            </Link>
            <hr className="border-gray-200" />
            <Link
              href="/auth?mode=login"
              className="block text-gray-600 hover:text-gray-900 font-medium"
            >
              Log in
            </Link>
            <Link
              href="/feed"
              className="block bg-blue-600 text-white px-5 py-3 rounded-full font-medium text-center hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
