'use client';
import { CalendarIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import upcomingEventsData from '../data/upcoming-events.json';

export default function UpcomingEvents() {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Eğitim':
        return 'bg-blue-100 text-blue-700';
      case 'Bar Buluşması':
        return 'bg-purple-100 text-purple-700';
      case 'Keyif Dalışı':
        return 'bg-green-100 text-green-700';
      case 'Deneme Dalışı':
        return 'bg-yellow-100 text-yellow-700';
      case 'Sosyal Sorumluluk':
        return 'bg-orange-100 text-orange-700';
      case 'Seminer':
        return 'bg-indigo-100 text-indigo-700';
      case 'Toplantı':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section id="upcoming-events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-wider">
            Yaklaşan Etkinlikler
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Duck Dalış Merkezi'nin düzenlediği eğitimler, seminerler ve özel etkinlikler
          </p>
        </div>
        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {upcomingEventsData.upcomingEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="flex flex-col lg:flex-row">
                {/* Image Section - Responsive sizing */}
                <div className="relative w-full lg:w-80 h-48 lg:h-60 bg-gradient-to-br from-amber-200 to-amber-300 flex-shrink-0">
                  {event.image ? (
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CalendarIcon className="w-8 h-8" />
                        </div>
                        <p className="text-base opacity-80">Etkinlik</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(event.category)}`}>
                      {event.category}
                    </span>
                  </div>
                </div>

                {/* Content Section - More space */}
                <div className="flex-1 p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-1">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">
                    {event.content}
                  </p>

                  {/* Event Details - Horizontal layout */}
                  <div className="flex flex-col space-y-3 text-sm text-gray-600">
                    {/* Date and Time */}
                    <div className="flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-2 text-amber-400" />
                      <span className="font-medium">
                        {event.startingDate === event.endingDate 
                          ? formatDate(event.startingDate)
                          : `${formatDate(event.startingDate)} - ${formatDate(event.endingDate)}`
                        }
                      </span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center">
                      <MapPinIcon className="w-4 h-4 mr-2 text-amber-400 flex-shrink-0" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
