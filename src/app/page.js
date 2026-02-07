'use client';
import LifeCard from '../components/LifeCard';
import UpcomingEvents from '../components/UpcomingEvents';
import PhotoCarousel from '../components/PhotoCarousel';
import lifeData from '../data/life.json';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Photo Carousel Section */}
      <PhotoCarousel />

      {/* Underwater Life Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-wider">
              Türkiye&apos;nin Su Altı Canlıları
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Türkiye&apos;nin zengin deniz ekosisteminde yaşayan önemli canlı türlerini keşfedin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lifeData.underwaterLife.map((life) => (
              <LifeCard key={life.id} life={life} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <UpcomingEvents />
    </div>
  );
}
