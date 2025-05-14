import React from "react";
import T9 from "../images/T9.jpg";
import T7 from "../images/T7.jpg";

const FooterSection = () => (
  <footer className="bg-[#101828] text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4">
      {/* Newsletter */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-16">
        <div>
          <h2 className="text-4xl font-bold mb-2">Get Updated The Latest Newsletter</h2>
        </div>
        <form className="flex w-full md:w-auto gap-4 items-center">
          <input type="email" placeholder="Enter Email" className="flex-1 min-w-[260px] px-6 py-4 rounded-full bg-transparent border border-blue-400 text-white focus:outline-none" />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-colors duration-200">
            Subscribe Now
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M2 21l21-9-21-9v7l15 2-15 2z"/></svg>
          </button>
        </form>
      </div>
      <hr className="border-blue-900 mb-12" />
      {/* Footer Main */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo/About/Social */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-blue-600 rounded-xl p-2">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
            </span>
            <span className="text-3xl font-bold">Atek</span>
          </div>
          <div className="text-gray-300 mb-6">Rapidiously myocardinate cross-platform intellectual capital model. Appropriately create interactive infrastructures</div>
          <div className="flex gap-4">
            {/* Social Icons */}
            {['facebook','twitter','linkedin','instagram','whatsapp'].map(icon => (
              <span key={icon} className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 text-white hover:bg-blue-600 hover:border-blue-600 transition-colors duration-200">
                {icon === 'facebook' && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12z"/></svg>
                )}
                {icon === 'twitter' && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.63-.58 1.36-.58 2.14 0 1.48.75 2.78 1.89 3.54-.7-.02-1.36-.21-1.94-.53v.05c0 2.07 1.47 3.8 3.42 4.19-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.11 2.91 3.97 2.94A8.6 8.6 0 0 1 2 19.54c-.65 0-1.29-.04-1.92-.11A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22.46 6z"/></svg>
                )}
                {icon === 'linkedin' && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
                )}
                {icon === 'instagram' && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.851s-.011 3.584-.069 4.85c-.062 1.367-.334 2.634-1.308 3.608-.975.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.367-.062-2.634-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.367.334-2.634 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.425 3.635 1.392 2.668 2.359 2.374 3.532 2.315 4.809.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.277.353 2.45 1.32 3.417.967.967 2.14 1.261 3.417 1.32C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.277-.059 2.45-.353 3.417-1.32.967-.967 1.261-2.14 1.32-3.417.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.277-.353-2.45-1.32-3.417-.967-.967-2.14-1.261-3.417-1.32C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                )}
                {icon === 'whatsapp' && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.23-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.25-1.45l-.38-.23-3.67.96.98-3.58-.25-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-1 2.43s1.02 2.82 1.16 3.02c.14.2 2.01 3.08 4.88 4.2.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
                )}
              </span>
            ))}
          </div>
        </div>
        {/* Useful Links */}
        <div>
          <div className="font-bold text-lg mb-4">Useful Link</div>
          <ul className="space-y-2 text-gray-200">
            {['Home','About us','Our Service','Terms of Service','News & Media'].map(link => (
              <li key={link} className="flex items-center gap-2 hover:text-blue-400 cursor-pointer transition-colors duration-200">
                <span className="text-blue-400">›</span> {link}
              </li>
            ))}
          </ul>
        </div>
        {/* Get In Touch */}
        <div>
          <div className="font-bold text-lg mb-4">Get In Touch</div>
          <ul className="space-y-4 text-gray-200">
            <li className="flex items-center gap-3"><span className="bg-white text-blue-600 rounded-full p-2"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13 1.05.37 2.05.73 3a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.95.36 1.95.6 3 .73A2 2 0 0 1 22 16.92z"/></svg></span>+01 234 567 890<br />+09 876 543 210</li>
            <li className="flex items-center gap-3"><span className="bg-white text-blue-600 rounded-full p-2"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" fill="none"/><path d="M22 6l-10 7L2 6" /></svg></span>mailinfo00@atek.com<br />support24@tek.com</li>
            <li className="flex items-center gap-3"><span className="bg-white text-blue-600 rounded-full p-2"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21c-4.418 0-8-5.373-8-10a8 8 0 1 1 16 0c0 4.627-3.582 10-8 10z"/><circle cx="12" cy="11" r="3"/></svg></span>789 Inner Lane, Holy park,<br />California, USA</li>
          </ul>
        </div>
        {/* Instagram Posts */}
        <div>
          <div className="font-bold text-lg mb-4">Instagram Post</div>
          <div className="grid grid-cols-3 gap-2">
            {[
              T7,
              T9,
              T7,
              T9,
              T7,
              T9,
            ].map((img, i) => (
              <img key={i} src={img} alt={`Insta${i+1}`} className="rounded-lg w-20 h-20 object-cover" />
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterSection; 