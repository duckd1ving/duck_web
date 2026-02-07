import Image from 'next/image';

export default function ProCard({ member }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 h-full flex flex-col">
      {/* Photo Section - Larger */}
      <div className="relative h-48 bg-gradient-to-br from-amber-200 to-amber-300">
        {member.image ? (
            <Image
              src={member.image}
              alt={member.name}
              fill
              className={`object-cover ${
                member.name === 'Batuhan Yılmaz' || member.name === 'Umut Çağan Dalkılıç'
                  ? 'object-[center_70%]'
                  : 'object-center'
              }`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        ) : null}
        {!member.image && (
        <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-amber-300 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-sm opacity-80 font-medium">Fotoğraf</p>
          </div>
        </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 h-8 flex items-center">
          {member.name}
        </h3>

        {/* Position/Certification */}
        <div className="mb-4 flex-grow">
          <p className="text-amber-500 font-semibold text-sm mb-2 h-6 flex items-center">
            {member.position}
          </p>
          <div className="flex items-center space-x-2 text-xs text-gray-500 h-5">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Dalış Profesyoneli</span>
          </div>
        </div>

        {/* Additional Info */}
        <div className="border-t border-gray-100 pt-4">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <span>Duck Dalış Merkezi</span>
            </div>
            <div className="flex items-center space-x-2">
              {member.position && (
                <>
                  {member.position.includes('SSI') && (
                    <Image
                      src="/images/logo/ssı.png"
                      alt="SSI"
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                    />
                  )}
                  {member.position.includes('CMAS') && (
                    <Image
                      src="/images/logo/cmas.png"
                      alt="CMAS"
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                    />
                  )}
                  {member.position.includes('PADI') && (
                    <Image
                      src="/images/logo/padı.png"
                      alt="PADI"
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                    />
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
