'use client';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import faqData from '../../data/faq.json';

export default function FAQ() {
  const [openQuestions, setOpenQuestions] = useState([]);

  const toggleQuestion = (questionId) => {
    setOpenQuestions(prev => {
      if (prev.includes(questionId)) {
        return prev.filter(id => id !== questionId);
      } else {
        return [...prev, questionId];
      }
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-wider">
              {faqData.faq.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              {faqData.faq.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-wider">
              Merak Edilen Sorular
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {faqData.faq.description}
            </p>
            <div className="w-24 h-1 bg-amber-400 mx-auto mt-6"></div>
          </div>

          <div className="space-y-4">
            {faqData.faq.questions.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <button
                  onClick={() => toggleQuestion(item.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <ChevronDownIcon 
                    className={`w-6 h-6 text-amber-400 transition-transform duration-300 ${
                      openQuestions.includes(item.id) ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {openQuestions.includes(item.id) ? (
                  <div className="px-8 pb-6 border-t border-gray-100">
                    <div className="pt-6">
                      <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.answer }}>
                      </p>
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">
            Başka Sorularınız mı Var?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Burada bulamadığınız sorularınız için bizimle iletişime geçebilirsiniz. Size en kısa sürede dönüş yapacağız.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="w-full sm:w-[260px] h-[52px] flex items-center justify-center bg-amber-400 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
            >
              İletişime Geç
            </a>
            <a
              href="/events"
              className="w-full sm:w-[260px] h-[52px] flex items-center justify-center border-2 border-amber-300 text-amber-500 hover:bg-amber-400 hover:text-white hover:border-amber-400 font-semibold rounded-xl transition-all duration-300 hover:scale-105"
            >
              Etkinliklerimizi Gör
            </a>
          </div>
        </div>
      </section>


    </div>
  );
}
