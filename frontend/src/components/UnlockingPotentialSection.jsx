import React from "react";

const UnlockingPotentialSection = () => (
  <section className="max-w-9xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-start gap-16">
    {/* Left: Overlapping Images */}
    <div className="relative flex-1 flex justify-center items-center min-w-[350px] pr-12 animate-slide-in-left">
      <div className="relative z-10 overflow-hidden shadow-xl w-80 h-80 rounded-tl-[48px] rounded-tr-3xl rounded-bl-3xl rounded-br-3xl">
        <img
          src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&w=600&q=80"
          alt="Team 1"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute left-56 top-48 z-20 overflow-hidden shadow-xl w-72 h-72 border-4 border-white rounded-3xl">
        <img
          src="https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&w=600&q=80"
          alt="Team 2"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </div>
    {/* Right: Content */}
    <div className="flex-1 flex flex-col gap-6 max-w-3xl pl-12 animate-slide-in-right">
      <span className="text-blue-600 font-semibold text-lg">About Us</span>
      <h2 className="text-4xl font-bold leading-tight mb-2">Unlocking Potential With<br/>Tailored IT Solutions</h2>
      <p className="text-gray-600 mb-4">
        IT Solutions encompass a wide range of services, technologies, and strategies designed to address the technological needs of businesses and organizations. These solutions are tailored to improve efficiency, enhance productivity, ensure security, and drive innovation.
      </p>
      <div className="flex flex-col gap-6 mb-4">
        <div className="flex items-start gap-4">
          <span className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl transition-all duration-200 hover:bg-black hover:text-white">
            {/* Shield Check Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 5.25-3.5 9.75-7 11-3.5-1.25-7-5.75-7-11V7l7-4z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
            </svg>
          </span>
          <div>
            <div className="font-bold text-lg">Increased Efficiency</div>
            <div className="text-gray-500">Automating repetitive tasks and streamlining workflows to save time and resources.</div>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <span className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl transition-all duration-200 hover:bg-black hover:text-white">
            {/* Shield Check Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 5.25-3.5 9.75-7 11-3.5-1.25-7-5.75-7-11V7l7-4z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
            </svg>
          </span>
          <div>
            <div className="font-bold text-lg">Competitive Advantage</div>
            <div className="text-gray-500">Leveraging cutting-edge technology to stay ahead in the market.</div>
          </div>
        </div>
      </div>
      <button className="bg-blue-600 hover:bg-black text-white px-8 py-3 rounded-full font-semibold text-lg w-max flex items-center gap-2 transition-colors transition-transform duration-200 animate-slide-in-right group overflow-hidden hover:scale-105">
        Learn More
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </span>
      </button>
    </div>
    {/* 3D Illustration (hidden on lg) */}
    <div className="hidden lg:block flex-1 min-w-[300px] flex justify-center items-center pt-12">
      <img
        src="https://img.icons8.com/clouds/500/000000/administrator-male.png"
        alt="3D Illustration"
        className="w-80 h-80 object-contain"
      />
    </div>
  </section>
);

export default UnlockingPotentialSection; 