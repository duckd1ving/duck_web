'use client';
import aboutData from '../../data/about.json';

export default function About() {
  const formatContent = (content, paragraphClassName = 'text-gray-600 leading-relaxed mb-6') => {
    return content.split('\n\n').map((paragraph, index) => (
      <p key={index} className={paragraphClassName}>
        {paragraph}
      </p>
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-wider">
              {aboutData.about.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              {aboutData.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-wider">
                Hakkımızda
              </h2>
              <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
            </div>
            
            <div className="text-lg leading-relaxed">
              {formatContent(aboutData.about.content)}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="text-center lg:text-left">
              <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Misyonumuz</h3>
              <div className="text-gray-600 leading-relaxed">
                {formatContent(aboutData.about.mission, 'text-gray-600 leading-relaxed mb-4')}
              </div>
            </div>

            {/* Vision */}
            <div className="text-center lg:text-left">
              <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Vizyonumuz</h3>
              <div className="text-gray-600 leading-relaxed">
                {formatContent(aboutData.about.vision, 'text-gray-600 leading-relaxed mb-4')}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
