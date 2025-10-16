import React from 'react';
import { User, Youtube, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <>
      {/* Import Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Marcellus&family=Nunito:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      <footer className="w-full bg-black text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Image - Flipped */}
        <div
          className="absolute inset-0 transform scale-x-[-1]"
         
        ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Column 1 - Logo & Description */}
            <div className="lg:col-span-1 space-y-6">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 40 40" fill="white">
                      <path d="M8 20 L15 10 L15 15 L20 15 L20 5 L25 5 L25 15 L30 15 L30 10 L37 20 L30 20 L30 35 L10 35 L10 20 Z" />
                    </svg>
                  </div>
                  <svg className="absolute -top-2 -right-1 w-9 h-9 text-white" viewBox="0 0 40 40" fill="currentColor">
                    <path d="M20 5 C15 8, 10 12, 8 18 C10 15, 15 10, 20 8 C25 10, 30 15, 32 18 C30 12, 25 8, 20 5 Z" />
                    <ellipse cx="18" cy="15" rx="2" ry="3" transform="rotate(-20 18 15)" />
                  </svg>
                </div>
                <h2 
                  className="text-2xl font-normal text-white"
                  style={{ fontFamily: 'Marcellus, serif' }}
                >
                  Sphiron Hotel
                </h2>
              </div>

              {/* Description */}
              <p 
                className="text-gray-300 text-sm font-light leading-relaxed"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                Your gateway to Chitwan's wilderness. Where luxury meets adventure in the heart of Nepal's most celebrated national park.
              </p>

              {/* Social Media Icons */}
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-amber-400 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Profile"
                >
                  <User className="w-5 h-5 text-black" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-amber-400 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5 text-black" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-amber-400 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-black fill-black" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-amber-400 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-black" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-amber-400 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div className="space-y-6">
              <h3 
                className="text-xl font-semibold text-white"
                style={{ fontFamily: 'Marcellus, serif' }}
              >
                Discover
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-amber-400 hover:text-amber-300 transition-colors text-sm font-normal inline-block"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-amber-400 transition-colors text-sm font-normal inline-block"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    About Sphiron
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-amber-400 transition-colors text-sm font-normal inline-block"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    Rooms & Suites
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-amber-400 transition-colors text-sm font-normal inline-block"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    Safari Experiences
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-amber-400 transition-colors text-sm font-normal inline-block"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-amber-400 transition-colors text-sm font-normal inline-block"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    Guest Stories
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Services */}
            <div className="space-y-6">
              <h3 
                className="text-xl font-semibold text-white"
                style={{ fontFamily: 'Marcellus, serif' }}
              >
                Experiences
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-amber-400 transition-colors text-sm font-normal inline-block"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    Jungle Safari
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-amber-400 transition-colors text-sm font-normal inline-block"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    Canoe Adventures
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-amber-400 transition-colors text-sm font-normal inline-block"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    Wildlife Tracking
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-amber-400 transition-colors text-sm font-normal inline-block"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    Tharu Culture
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-amber-400 transition-colors text-sm font-normal inline-block"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    Nature Walks
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-amber-400 transition-colors text-sm font-normal inline-block"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    Special Packages
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 - Contact Info */}
            <div className="space-y-6">
              <h3 
                className="text-xl font-semibold text-white"
                style={{ fontFamily: 'Marcellus, serif' }}
              >
                Get In Touch
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span 
                    className="text-white text-sm font-light leading-relaxed"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    Chitwan National Park, Sauraha, Chitwan 44200, Nepal
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <a
                    href="tel:+9779845123456"
                    className="text-white hover:text-amber-400 transition-colors text-sm font-light"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    +977 56-580-123
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <a
                    href="mailto:reserve@sphironhotel.com"
                    className="text-white hover:text-amber-400 transition-colors text-sm font-light"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    reserve@sphironhotel.com
                  </a>
                </li>
              </ul>

              {/* Legal Links */}
              <div className="pt-4">
                <div className="space-y-2">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-400 transition-colors text-xs font-light block"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-400 transition-colors text-xs font-light block"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    Terms & Conditions
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p 
                className="text-gray-300 text-sm font-light text-center md:text-left"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                © 2025 <span className="text-amber-400 font-normal">Sphiron Hotel</span>. Where wilderness meets luxury.
              </p>
              <p 
                className="text-gray-400 text-xs font-light text-center md:text-right"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                Certified Eco-Tourism Partner • <span className="text-amber-400 font-normal">Chitwan National Park</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;