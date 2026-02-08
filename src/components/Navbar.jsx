'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleAbout = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  const toggleMore = () => {
    setIsMoreOpen(!isMoreOpen);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50'
        : 'bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-300">
            <div className="w-14 h-14 flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="Duck Dalış Merkezi Logo"
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
            <span className="text-2xl font-black tracking-normal transition-colors duration-300 text-blue-950">
              DUCK DALIŞ MERKEZİ
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className={`px-4 py-2 pt-2.5 rounded-lg text-sm font-bold tracking-wide transition-all duration-300 hover:scale-105 uppercase flex items-center h-10 leading-none no-underline ${
                isScrolled
                  ? 'text-gray-700 hover:text-amber-500 hover:bg-amber-50'
                  : 'text-blue-950/90 hover:text-blue-950 hover:bg-white/10'
              }`}
            >
              ANA SAYFA
            </Link>

            {/* About Dropdown */}
            <div className="relative group">
              <button className={`px-4 py-2 rounded-lg text-sm font-bold tracking-wide transition-all duration-300 hover:scale-105 uppercase flex items-center h-10 leading-none ${
                isScrolled
                  ? 'text-gray-700 hover:text-amber-500 hover:bg-amber-50'
                  : 'text-blue-950/90 hover:text-blue-950 hover:bg-white/10'
              }`}>
                HAKKIMIZDA
                <ChevronDownIcon className="ml-2 h-4 w-4 transition-all duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-3 w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-200/50 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link href="/hakkimizda" className="block px-4 py-3 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-500 transition-colors rounded-lg mx-2">Biz Kimiz</Link>
                  <Link href="/pro" className="block px-4 py-3 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-500 transition-colors rounded-lg mx-2">Profesyoneller</Link>
                </div>
              </div>
            </div>

            <Link
              href="/etkinlikler"
              className={`px-4 py-2 rounded-lg text-sm font-bold tracking-wide transition-all duration-300 hover:scale-105 uppercase flex items-center h-10 leading-none no-underline ${
                isScrolled
                  ? 'text-gray-700 hover:text-amber-500 hover:bg-amber-50'
                  : 'text-blue-950/90 hover:text-blue-950 hover:bg-white/10'
              }`}
            >
              ETKİNLİKLER
            </Link>

            {/* More Dropdown */}
            <div className="relative group">
              <button className={`px-4 py-2 rounded-lg text-sm font-bold tracking-wide transition-all duration-300 hover:scale-105 uppercase flex items-center h-10 leading-none ${
                isScrolled
                  ? 'text-gray-700 hover:text-amber-500 hover:bg-amber-50'
                  : 'text-blue-950/90 hover:text-blue-950 hover:bg-white/10'
              }`}>
                DAHA FAZLA
                <ChevronDownIcon className="ml-2 h-4 w-4 transition-all duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-3 w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-200/50 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link href="/iletisim" className="block px-4 py-3 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-500 transition-colors rounded-lg mx-2">İletişim</Link>
                  <Link href="/sss" className="block px-4 py-3 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-500 transition-colors rounded-lg mx-2">Sıkça Sorulan Sorular</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>
            
            {/* Menu Panel */}
            <div className="fixed top-16 left-0 right-0 bg-white/98 backdrop-blur-md border-t border-gray-200/50 shadow-xl z-50">
              <div className="px-6 py-6 space-y-1">
                {/* Main Navigation */}
                <Link
                  href="/"
                  className="flex items-center px-4 py-4 text-gray-800 hover:bg-amber-50 hover:text-amber-500 transition-all duration-200 rounded-xl font-semibold text-sm border-b border-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg className="w-5 h-5 mr-3 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  ANA SAYFA
                </Link>
                
                {/* About Section */}
                <div className="pt-2">
                  <button
                    onClick={toggleAbout}
                    className="flex items-center justify-between w-full px-4 py-4 text-gray-800 font-semibold text-sm border-b border-gray-100 hover:bg-amber-50 hover:text-amber-500 transition-all duration-200 rounded-xl"
                  >
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      HAKKIMIZDA
                    </div>
                    <ChevronDownIcon className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isAboutOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isAboutOpen && (
                    <div className="pl-8 space-y-1 mt-2">
                      <Link
                        href="/hakkimizda"
                        className="flex items-center px-4 py-3 text-gray-600 hover:bg-amber-50 hover:text-amber-500 transition-all duration-200 rounded-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="w-2 h-2 bg-amber-300 rounded-full mr-3"></div>
                        Biz Kimiz
                      </Link>
                      <Link
                        href="/pro"
                        className="flex items-center px-4 py-3 text-gray-600 hover:bg-amber-50 hover:text-amber-500 transition-all duration-200 rounded-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="w-2 h-2 bg-amber-300 rounded-full mr-3"></div>
                        Profesyoneller
                      </Link>
                    </div>
                  )}
                </div>

                {/* Events */}
                <Link
                  href="/etkinlikler"
                  className="flex items-center px-4 py-4 text-gray-800 hover:bg-amber-50 hover:text-amber-500 transition-all duration-200 rounded-xl font-semibold text-sm border-b border-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg className="w-5 h-5 mr-3 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  ETKİNLİKLER
                </Link>
                
                {/* More Section */}
                <div className="pt-2">
                  <button
                    onClick={toggleMore}
                    className="flex items-center justify-between w-full px-4 py-4 text-gray-800 font-semibold text-sm border-b border-gray-100 hover:bg-amber-50 hover:text-amber-500 transition-all duration-200 rounded-xl"
                  >
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                      DAHA FAZLA
                    </div>
                    <ChevronDownIcon className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isMoreOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isMoreOpen && (
                    <div className="pl-8 space-y-1 mt-2">
                      <Link
                        href="/iletisim"
                        className="flex items-center px-4 py-3 text-gray-600 hover:bg-amber-50 hover:text-amber-500 transition-all duration-200 rounded-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="w-2 h-2 bg-amber-300 rounded-full mr-3"></div>
                        İletişim
                      </Link>
                      <Link
                        href="/sss"
                        className="flex items-center px-4 py-3 text-gray-600 hover:bg-amber-50 hover:text-amber-500 transition-all duration-200 rounded-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="w-2 h-2 bg-amber-300 rounded-full mr-3"></div>
                        Sıkça Sorulan Sorular
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
