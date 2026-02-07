import { CalendarIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function EventCard({ event }) {
  const formatDate = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    // Aynı ay ve yıldaysa sadece günleri göster
    if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
      if (start.getDate() === end.getDate()) {
        // Tek gün
        return start.toLocaleDateString('tr-TR', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        });
      } else {
        // Aynı ay, farklı günler
        return `${start.getDate()}-${end.getDate()} ${start.toLocaleDateString('tr-TR', {
          month: 'long',
          year: 'numeric'
        })}`;
      }
    } else if (start.getFullYear() === end.getFullYear()) {
      // Aynı yıl, farklı aylar
      return `${start.toLocaleDateString('tr-TR', {
        day: 'numeric',
        month: 'short'
      })} - ${end.toLocaleDateString('tr-TR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })}`;
    } else {
      // Farklı yıllar
      return `${start.toLocaleDateString('tr-TR', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })} - ${end.toLocaleDateString('tr-TR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })}`;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Eğitim':
        return 'bg-blue-100 text-blue-700';
      case 'Bar Buluşması':
        return 'bg-purple-100 text-purple-700';
      case 'Keyif Dalışı':
        return 'bg-green-100 text-green-700';
      case 'Sosyal Sorumluluk':
        return 'bg-orange-100 text-orange-700';
      case 'Seminer':
        return 'bg-indigo-100 text-indigo-700';
      case 'Toplantı':
        return 'bg-red-100 text-red-700';
      case 'Özel Etkinlik':
        return 'bg-pink-100 text-pink-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
      {/* Image Section */}
      <div className="relative h-48 bg-gradient-to-br from-amber-200 to-amber-300">
        {event.image ? (
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <CalendarIcon className="w-8 h-8" />
              </div>
              <p className="text-sm opacity-80">Etkinlik</p>
            </div>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(event.category)}`}>
            {event.category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {event.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {event.content}
        </p>

        {/* Event Details */}
        <div className="space-y-3">
          {/* Date */}
          <div className="flex items-center text-sm text-gray-600">
            <CalendarIcon className="w-4 h-4 mr-2 text-amber-400" />
            <span className="font-medium">
              {event.startDate && event.endDate 
                ? formatDate(event.startDate, event.endDate)
                : event.date 
                  ? new Date(event.date).toLocaleDateString('tr-TR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })
                  : 'Tarih belirtilmemiş'
              }
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center text-sm text-gray-600">
            <MapPinIcon className="w-4 h-4 mr-2 text-amber-400" />
            <span className="line-clamp-1">{event.location}</span>
          </div>

          {/* Participants */}
          <div className="flex items-center text-sm text-gray-600">
            <UsersIcon className="w-4 h-4 mr-2 text-amber-400" />
            <span>{event.participants} katılımcı</span>
          </div>
        </div>
      </div>
    </div>
  );
}
