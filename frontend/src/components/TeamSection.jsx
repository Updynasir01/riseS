import React, { useState } from "react";
import nasser from "../images/nasser.jpg";
import hakimi from "../images/hakimi.jpg";
import soke from "../images/soke.jpg";
import bakar from "../images/bakar.jpg";
import armaan from "../images/armaan.jpg";

const teamMembers = [
  {
    name: 'Abdinasir Isse',
    role: 'Full Stack Developer',
    img: nasser,
    active: false,
  },
  {
    name: 'Abdihakim Bashiir',
    role: 'Full Stack Developer',
    img: hakimi,
    active: false,
  },
  {
    name: 'Abdiaziz',
    role: 'Full Stack Developer',
    img: soke,
    active: true,
  },
  {
    name: 'Bakar',
    role: 'Full Stack Developer',
    img: bakar,
    active: false,
  },
  {
    name: 'Armaan',
    role: 'Full Stack Developer',
    img: armaan,
    active: false,
  },
  {
    name: 'Nurdin Osman',
    role: 'Django Developer',
    img: 'https://randomuser.me/api/portraits/women/47.jpg',
    active: false,
  },
 
];

const membersPerPage = 4;

const TeamSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [fade, setFade] = useState(false);
  const [slideDir] = useState('left');
  const totalPages = Math.ceil(teamMembers.length / membersPerPage);
  const visibleMembers = teamMembers.slice(currentPage * membersPerPage, (currentPage + 1) * membersPerPage);

  const handlePageChange = (i) => {
    setFade(true);
    setTimeout(() => {
      setCurrentPage(i);
      setFade(false);
    }, 300);
  };

  return (
    <section className="w-full py-20 bg-[#f5f8fd] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none select-none opacity-40" style={{zIndex:0}}>
        <svg width="100%" height="100%" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.2">
            <circle cx="100" cy="100" r="6" fill="#dbeafe" />
            <circle cx="400" cy="200" r="6" fill="#dbeafe" />
            <circle cx="900" cy="300" r="6" fill="#dbeafe" />
            <circle cx="1200" cy="100" r="6" fill="#dbeafe" />
            <rect x="200" y="50" width="2" height="300" fill="#dbeafe" />
            <rect x="600" y="100" width="2" height="200" fill="#dbeafe" />
            <rect x="1000" y="0" width="2" height="400" fill="#dbeafe" />
          </g>
        </svg>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h3 className="text-center text-blue-600 font-semibold mb-2">Our Team Memners</h3>
        <h2 className="text-4xl font-bold text-center mb-12">Meet Our Expert Members</h2>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center transition-all duration-500 ease-in-out transform
            ${fade ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'}
          `}
        >
          {visibleMembers.map((member, idx) => (
            <div key={member.name + idx} className={`relative flex flex-col items-center bg-white rounded-2xl shadow-lg pt-8 pb-6 px-4 transition-all duration-300 group cursor-pointer ${member.active ? 'ring-2  bg-blue-600 text-white hover:bg-blue-700' : 'hover:bg-blue-600 hover:text-white'}`}>
              <img src={member.img} alt={member.name} className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg -mt-16 mb-4" />
              <div className={`w-full rounded-xl py-4 px-2 flex flex-col items-center transition-all duration-300 ${member.active ? ' hover:text-white text-black bg-blue-100  group-hover:bg-blue-700' : 'bg-blue-100 text-black group-hover:bg-blue-600 group-hover:text-white'}`}> 
                <div className="font-bold text-xl mb-1">{member.name}</div>
                <div className="text-sm mb-3">{member.role}</div>
                <div className="flex gap-3">
                  {/* Social Icons */}
                  {['facebook','twitter','linkedin','youtube','instagram'].map((icon, i) => (
                    <span key={icon} className={`w-8 h-8 flex items-center justify-center rounded-full border transition-colors duration-200 ${member.active ? 'border-blue-400 text-blue-600 hover:bg-blue-700' : 'border-blue-400 text-blue-600 group-hover:border-white group-hover:text-white'} hover:bg-blue-600 hover:text-white`}>
                      {/* Real SVG social icons */}
                      {icon === 'facebook' && (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12z"/></svg>
                      )}
                      {icon === 'twitter' && (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.63-.58 1.36-.58 2.14 0 1.48.75 2.78 1.89 3.54-.7-.02-1.36-.21-1.94-.53v.05c0 2.07 1.47 3.8 3.42 4.19-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.11 2.91 3.97 2.94A8.6 8.6 0 0 1 2 19.54c-.65 0-1.29-.04-1.92-.11A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22.46 6z"/></svg>
                      )}
                      {icon === 'linkedin' && (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
                      )}
                      {icon === 'youtube' && (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.454 3.5 12 3.5 12 3.5s-7.454 0-9.386.574a2.994 2.994 0 0 0-2.112 2.112C0 8.118 0 12 0 12s0 3.882.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.546 20.5 12 20.5 12 20.5s7.454 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.882 24 12 24 12s0-3.882-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                      )}
                      {icon === 'instagram' && (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.851s-.011 3.584-.069 4.85c-.062 1.367-.334 2.634-1.308 3.608-.975.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.367-.062-2.634-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.367.334-2.634 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.425 3.635 1.392 2.668 2.359 2.374 3.532 2.315 4.809.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.277.353 2.45 1.32 3.417.967.967 2.14 1.261 3.417 1.32C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.277-.059 2.45-.353 3.417-1.32.967-.967 1.261-2.14 1.32-3.417.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.277-.353-2.45-1.32-3.417-.967-.967-2.14-1.261-3.417-1.32C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {Array.from({ length: totalPages }).map((_, i) => (
            <span
              key={i}
              onClick={() => handlePageChange(i)}
              className={`w-5 h-5 rounded-full border-2 cursor-pointer transition-all duration-200 ${i === currentPage ? 'bg-blue-600 border-blue-600' : 'bg-white border-blue-300'}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 