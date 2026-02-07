import Link from 'next/link';
import Image from 'next/image';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import contactData from '../data/contact.json';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 text-blue-950">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          
          {/* Duck Dalış Merkezi Info */}
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-4 md:mb-6">
              <h3 className="text-xl md:text-2xl font-black text-blue-950 mb-2 tracking-wider">
                Duck Dalış Merkezi
              </h3>
              <p className="text-gray-800 text-xs md:text-sm leading-relaxed">
                Türkiye'nin yeni ve yüksek standartlara sahip dalış merkezlerinden biri olarak, güvenli ve kaliteli 
                dalış deneyimleri sunmak amacıyla faaliyet göstermekteyiz.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-start text-blue-950/90">
                <MapPinIcon className="w-3 h-3 md:w-4 md:h-4 mr-2 md:mr-3 text-blue-950 mt-0.5 flex-shrink-0" />
                <span className="text-xs md:text-sm">Barbaros Mah. Güniz Sokak 30/8 Çankaya/Ankara</span>
              </div>
              <div className="flex items-center text-blue-950/90">
                <EnvelopeIcon className="w-3 h-3 md:w-4 md:h-4 mr-2 md:mr-3 text-blue-950 flex-shrink-0" />
                <span className="text-xs md:text-sm">duckdivingcenter@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm md:text-lg font-bold text-gray-900 mb-3 md:mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <Link href="/" className="text-blue-950/90 hover:text-blue-950 transition-colors text-xs md:text-sm">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-950/90 hover:text-blue-950 transition-colors text-xs md:text-sm">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-blue-950/90 hover:text-blue-950 transition-colors text-xs md:text-sm">
                  Etkinlikler
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-950/90 hover:text-blue-950 transition-colors text-xs md:text-sm">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h4 className="text-sm md:text-lg font-bold text-gray-900 mb-3 md:mb-4">Sosyal Medya</h4>
            <div className="space-y-2 md:space-y-3">
              <a 
                href={contactData.contact.socialMedia.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-blue-950/90 hover:text-blue-950 transition-colors text-xs md:text-sm"
              >
                <svg className="w-3 h-3 md:w-4 md:h-4 mr-2 md:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
            </div>

            {/* Logos */}
            <div className="mt-6">
              <div className="flex items-center gap-8 -ml-1">
                <Image
                  src="/images/logo/tssf.png"
                  alt="TSSF"
                  width={56}
                  height={56}
                  className="w-12 h-12 object-contain opacity-90"
                />
                <Image
                  src="/images/logo/cmas.png"
                  alt="CMAS"
                  width={72}
                  height={72}
                  className="w-12 h-12 object-contain opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-amber-400/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-950/80 text-xs md:text-sm text-center md:text-left">
              © 2026 Duck Dalış Merkezi. Tüm hakları saklıdır.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
