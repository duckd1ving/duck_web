import EventCard from '../../components/EventCard';
import eventsData from '../../data/events.json';
import Link from 'next/link';

export default function Events() {
  const hasEvents = eventsData.pastEvents && eventsData.pastEvents.length > 0;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-wider">
              Geçmiş Etkinlikler
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              Duck Dalış Merkezi&apos;nin Düzenlediği Etkinlikler
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-wider">
              Etkinlik Arşivimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Duck Dalış Merkezi olarak düzenlediğimiz eğitimler, keyif dalışları ve özel etkinliklerimizden bazıları
            </p>
            <div className="w-24 h-1 bg-amber-400 mx-auto mt-6"></div>
          </div>

          {hasEvents ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {eventsData.pastEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Henüz geçmiş etkinlik bulunmuyor. Yaklaşan etkinliklerimizi takip edin!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">
            Etkinliklerimizi Kaçırmayın!
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Duck Dalış Merkezi&apos;nin düzenleyeceği yeni etkinliklerden haberdar olmak için bizi takip edin.
          </p>
          <div className="flex justify-center">
            <Link
              href="/#upcoming-events"
              className="bg-amber-400 hover:bg-amber-500 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105"
            >
              Yaklaşan Etkinlikler
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
