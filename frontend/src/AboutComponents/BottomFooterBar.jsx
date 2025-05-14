import React from "react";

const BottomFooterBar = () => (
  <div className="bg-[#495366] text-white py-4 px-[300px] flex items-center justify-between relative">
    <div className="text-sm">Copyright © 2025 Atek. All Rights Reserved.</div>
    <div className="flex gap-8 text-sm">
      <a href="#" className="hover:underline">Terms & Conditions</a>
      <a href="#" className="hover:underline">Careers</a>
      <a href="#" className="hover:underline">Privacy Policy</a>
    </div>
    {/* Scroll to top button */}
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed right-6 bottom-6 bg-white border-4 border-blue-500 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-50 hover:bg-blue-600 hover:text-white transition-colors duration-200"
      aria-label="Scroll to top"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
    </button>
  </div>
);

export default BottomFooterBar; 