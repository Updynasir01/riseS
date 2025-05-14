import React, { useState } from "react";

const testimonials = [
  {
    name: 'Angelina Mary',
    role: 'World Traveler',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'Digital transformation is the process of integrating digital technology into all aspects of a business, fundamentally changing how it operates.',
  },
  {
    name: 'Maria Doe',
    role: 'World Traveler',
    img: 'https://randomuser.me/api/portraits/women/51.jpg',
    quote: 'Digital transformation is the process of integrating digital technology into all aspects of a business, fundamentally changing how it operates.',
  },
  {
    name: 'Angelina Rose',
    role: 'World Traveler',
    img: 'https://randomuser.me/api/portraits/men/50.jpg',
    quote: 'Digital transformation is the process of integrating digital technology into all aspects of a business, fundamentally changing how it operates.',
  },
  {
    name: 'John Smith',
    role: 'World Traveler',
    img: 'https://randomuser.me/api/portraits/men/44.jpg',
    quote: 'Digital transformation is the process of integrating digital technology into all aspects of a business, fundamentally changing how it operates.',
  },
  {
    name: 'Jane Doe',
    role: 'World Traveler',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'Digital transformation is the process of integrating digital technology into all aspects of a business, fundamentally changing how it operates.',
  },
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);
  const visible = [
    testimonials[(current - 1 + testimonials.length) % testimonials.length],
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
  ];
  const goLeft = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const goRight = () => setCurrent((prev) => (prev + 1) % testimonials.length);

  return (
    <section className="w-full py-20 bg-[#f5f8fd]">
      <div className="max-w-7xl mx-auto px-4">
        <h4 className="text-blue-600 font-semibold text-center mb-2">Testimonial</h4>
        <h2 className="text-4xl font-bold text-center mb-12">What Client Say About Us</h2>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center gap-6 w-full">
            <button onClick={goLeft} className="w-14 h-14 rounded-full border border-gray-400 flex items-center justify-center text-2xl bg-white hover:bg-blue-50 transition-all duration-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            {visible.map((t, idx) => (
              <div
                key={t.name}
                className={`flex bg-white rounded-3xl shadow-lg px-6 py-8 mx-2 transition-all duration-300 relative ${idx === 1 ? 'scale-105 z-10' : 'scale-95 opacity-70'} w-full max-w-xl items-stretch`}
                style={{ minWidth: 380, maxWidth: 520 }}
              >
                {/* Client Image */}
                <img src={t.img} alt={t.name} className="w-28 h-28 rounded-2xl object-cover mr-6 self-start" />
                {/* Testimonial Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-5xl text-gray-200 mb-2 flex items-center">
                      <svg className="w-10 h-10 text-gray-300 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 7h.01M15 7h.01M7 11h10M7 15h10" /></svg>
                    </div>
                    <div className="text-lg text-gray-700 mb-6">{t.quote}</div>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="font-bold text-base text-black">{t.name}</span>
                    <span className="w-8 h-1 bg-blue-600 rounded-full inline-block"></span>
                    <span className="text-xs text-blue-600">{t.role}</span>
                  </div>
                  <div className="absolute bottom-4 right-6 text-gray-400 font-bold text-lg select-none opacity-60">{String((current + idx) % testimonials.length + 1).padStart(2, '0')}</div>
                </div>
              </div>
            ))}
            <button onClick={goRight} className="w-14 h-14 rounded-full border border-gray-400 flex items-center justify-center text-2xl bg-white hover:bg-blue-50 transition-all duration-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <span
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-4 h-4 rounded-full border-2 cursor-pointer transition-all duration-200 ${i === current ? 'bg-blue-600 border-blue-600' : 'bg-white border-blue-300'}`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection; 