'use client';
import Image from 'next/image';

export default function LifeCard({ life }) {
  const getConservationColor = (status) => {
    if (status.includes('Kritik')) return 'bg-red-100 text-red-700';
    if (status.includes('Tehlikede')) return 'bg-orange-100 text-orange-700';
    if (status.includes('İstilacı')) return 'bg-purple-100 text-purple-700';
    if (status.includes('Korunması gereken')) return 'bg-yellow-100 text-yellow-700';
    if (status.includes('Sürdürülebilir')) return 'bg-green-100 text-green-700';
    if (status.includes('Yaygın')) return 'bg-blue-100 text-blue-700';
    if (status.includes('Hassas')) return 'bg-pink-100 text-pink-700';
    return 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col">
      {/* Image Section */}
      <div className="relative h-48 bg-gradient-to-br from-amber-200 to-amber-300">
        {life.image ? (
          <Image
            src={life.image}
            alt={life.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm opacity-80">Su Altı Canlısı</p>
            </div>
          </div>
        )}
      </div>

      {/* Content Section - Flex grow to push conservation status to bottom */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {life.name}
        </h3>
        
        {/* Scientific Name */}
        <p className="text-sm text-amber-500 font-medium mb-3 italic">
          {life.scientificName}
        </p>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {life.description}
        </p>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <span className="font-semibold text-gray-700">Habitat:</span>
            <p className="text-gray-600 mt-1">{life.habitat}</p>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Beslenme:</span>
            <p className="text-gray-600 mt-1">{life.diet}</p>
          </div>
        </div>

        {/* Conservation Status - Fixed height at bottom */}
        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between h-8">
            <span className="text-xs font-semibold text-gray-700">Koruma Durumu:</span>
            <span className={`text-xs px-2 py-1 rounded-full ${getConservationColor(life.conservationStatus)}`}>
              {life.conservationStatus}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
