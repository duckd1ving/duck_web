'use client';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import contactData from '../../data/contact.json';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-wider">
              {contactData.contact.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              {contactData.contact.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-wider">
              İletişim Bilgilerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {contactData.contact.description}
            </p>
            <div className="w-24 h-1 bg-amber-400 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <EnvelopeIcon className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {contactData.contact.info.email.title}
                </h3>
                <p className="text-amber-500 font-semibold mb-3">
                  {contactData.contact.info.email.value}
                </p>
                <p className="text-gray-600 text-sm">
                  {contactData.contact.info.email.description}
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPinIcon className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {contactData.contact.info.address.title}
                </h3>
                <p className="text-amber-500 font-semibold mb-3">
                  {contactData.contact.info.address.value}
                </p>
                <p className="text-gray-600 text-sm">
                  {contactData.contact.info.address.description}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <PhoneIcon className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Telefon
                </h3>
                <p className="text-amber-500 font-semibold mb-3">
                  0501 700 17 03
                </p>
                <p className="text-gray-600 text-sm">
                  Bize ulaşmak için arayabilirsiniz
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-wider">
              Sosyal Medya
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Duck Dalış Merkezi&apos;ni sosyal medyada takip edin ve güncel etkinliklerimizden haberdar olun
            </p>
          </div>

          <div className="flex justify-center">
            {/* Instagram */}
            <a href={contactData.contact.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 shadow-lg max-w-xs w-full">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Instagram</h3>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">
            Hemen İletişime Geçin!
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Duck Dalış Merkezi hakkında daha fazla bilgi almak veya dalış eğitimlerimize katılmak için bizimle iletişime geçebilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${contactData.contact.info.email.value}`}
              className="w-full sm:w-[260px] h-[52px] flex items-center justify-center bg-amber-400 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
            >
              E-posta Gönder
            </a>
            <a
              href={contactData.contact.socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-[260px] h-[52px] flex items-center justify-center border-2 border-amber-300 text-amber-500 hover:bg-amber-400 hover:text-white hover:border-amber-400 font-semibold rounded-xl transition-all duration-300 hover:scale-105"
            >
              Instagram&apos;da Takip Et
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
