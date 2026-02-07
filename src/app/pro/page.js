'use client';
import Link from 'next/link';
import ProCard from '../../components/ProCard';
import proData from '../../data/pro.json';

export default function ProPage() {
  const { professionals } = proData;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-wider">
              {professionals.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              {professionals.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Professionals Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-wider">
              {professionals.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {professionals.subtitle}
            </p>
            <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {professionals.members.map((member) => (
              <ProCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
