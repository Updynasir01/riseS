import React from "react";
import T6 from "../images/T6.jpg";

const HeroSection = () => (
  <section className="relative w-full h-[300px] flex items-center justify-center">
    <img
      src={T6}
      alt="About Us Banner"
      className="absolute inset-0 w-full h-full object-cover object-center z-0"
    />
    <div className="absolute inset-0 bg-gray-900  bg-opacity-5 z-10"></div>
    <div className="relative z-20 flex flex-col items-center justify-center w-full">
      <h1 className="text-5xl font-bold text-white mb-4">About Us</h1>
      <nav className="text-lg text-white flex items-center gap-2">
        <span className="text-blue-200">Home</span>
        <span className="mx-1">»</span>
        <span className="text-white">About Us</span>
      </nav>
    </div>
  </section>
);

export default HeroSection; 