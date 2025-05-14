import React from "react";
import T7 from "../images/T7.jpg";

const VideoSection = () => (
  <section className="max-w-5xl mx-auto px-4 py-20">
    <h4 className="text-blue-600 font-semibold text-center mb-2">Watch Video</h4>
    <h2 className="text-4xl font-bold text-center mb-10 leading-tight">We Help Our Clients Realize Their Business Ideas And Achieve Great Results</h2>
    <div className="relative rounded-3xl overflow-hidden shadow-lg mx-auto w-full max-w-4xl aspect-video flex items-center justify-center">
      <img src={T7} alt="Video" className="w-full h-full object-cover" />
      <button className="absolute inset-0 flex items-center justify-center group" aria-label="Play Video">
        <span className="relative flex items-center justify-center">
          <span className="w-24 h-24 rounded-full border-4 border-white bg-white bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-60 transition-all duration-200"></span>
          <span className="absolute w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><polygon points="7,5 15,10 7,15" /></svg>
          </span>
        </span>
      </button>
    </div>
  </section>
);

export default VideoSection; 