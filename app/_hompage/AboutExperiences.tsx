"use client";
import React from "react";
import {
  ChevronDown,
  Binoculars,
  Palmtree,
  UtensilsCrossed,
  Waves,
} from "lucide-react";

const AboutExperiences = () => {
  const checkIn= "10 Dec.";
  const checkOut = "15 Dec.";
  const guests = 1;

  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Marcellus&family=Nunito:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="min-h-screen relative overflow-hidden max-w-7xl mx-auto p-4">
        {/* Decorative SVG - right side outline */}
        <div className="absolute right-0 top-20 w-[500px] h-[700px] opacity-[0.08]">
          <svg viewBox="0 0 400 500" className="w-full h-full">
            <rect x="20" y="100" width="60" height="350" fill="none" stroke="#92400e" strokeWidth="1.5" />
            <rect x="90" y="150" width="70" height="300" fill="none" stroke="#92400e" strokeWidth="1.5" />
            <rect x="170" y="80" width="65" height="370" fill="none" stroke="#92400e" strokeWidth="1.5" />
            <rect x="245" y="120" width="55" height="330" fill="none" stroke="#92400e" strokeWidth="1.5" />
            <rect x="310" y="60" width="70" height="390" fill="none" stroke="#92400e" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 py-16">
          <div className="flex gap-16 items-center">
            {/* Left - Images */}
            <div className="flex-1 relative">
              <div className="rounded-2xl overflow-hidden h-[450px]">
                <img
                  src="https://images.unsplash.com/photo-1683562373943-ea832988896b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFyZGlhJTIwbmF0aW9uYWwlMjBwYXJrJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
                  alt="Sauraha riverside view"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute bg-white -bottom-22 -left-10 w-[85%] h-[40vh] rounded-2xl overflow-hidden border-t-[12px] border-r-[12px] border-white">
                <img
                  src="https://images.unsplash.com/photo-1572697041670-b3e8937166f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJlc29ydCUyMGluJTIwbmF0aW9uYWwlMjBwYXJrJTIwaW5kaWElMjBiaWhhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
                  alt="Guests enjoying sunset canoe ride in Sauraha"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>

            {/* Right - Text & Booking */}
            <div className="flex-1 max-w-[550px] bg-gradient-to-br from-amber-50/60 via-white to-amber-50/40">
              <div className="mb-8">
                <h2
                  className="text-4xl leading-tight mb-6"
                  style={{ fontFamily: "Marcellus, serif" }}
                >
                  <span className="text-amber-700">Discover Serenity in </span>
                  <span className="text-gray-900">Sauraha</span>
                </h2>
                <p
                  className="text-gray-600 leading-relaxed text-sm font-light"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  Nestled on the tranquil banks of the Rapti River, our hotel offers
                  a unique blend of luxury and wilderness. Wake up to birdsong, watch
                  elephants cross the river at dusk, and immerse yourself in the
                  vibrant Tharu culture — all from the comfort of your stay in Sauraha.
                </p>
              </div>

              {/* Experiences */}
              <div className="grid grid-cols-3 gap-x-6 gap-y-3 mb-8">
                <div className="flex items-center gap-2">
                  <Binoculars className="w-4 h-4 text-amber-600" />
                  <span className="text-sm text-gray-700" style={{ fontFamily: "Nunito, sans-serif" }}>
                    Jungle Safari
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Waves className="w-4 h-4 text-amber-600" />
                  <span className="text-sm text-gray-700" style={{ fontFamily: "Nunito, sans-serif" }}>
                    Canoe Ride
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Palmtree className="w-4 h-4 text-amber-600" />
                  <span className="text-sm text-gray-700" style={{ fontFamily: "Nunito, sans-serif" }}>
                    River Walks
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <UtensilsCrossed className="w-4 h-4 text-amber-600" />
                  <span className="text-sm text-gray-700" style={{ fontFamily: "Nunito, sans-serif" }}>
                    Tharu Cuisine
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-700" style={{ fontFamily: "Nunito, sans-serif" }}>
                    Cultural Shows
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                  </svg>
                  <span className="text-sm text-gray-700" style={{ fontFamily: "Nunito, sans-serif" }}>
                    Village Tour
                  </span>
                </div>
              </div>

              {/* Booking Bar */}
              <div className="relative -left-40 -bottom-14 bg-gradient-to-r from-amber-700 via-amber-650 to-amber-600 rounded-2xl py-12 px-4 w-[120%]">
                <div className="flex gap-3">
                  {/* Check-In */}
                  <div className="flex-1">
                    <label className="text-amber-50 text-xs font-light mb-2 block" style={{ fontFamily: "Nunito, sans-serif" }}>
                      Check - In
                    </label>
                    <div className="bg-amber-800/30 rounded-lg px-3 py-2.5 flex items-center justify-between border border-amber-600/20">
                      <span className="text-white text-sm font-light" style={{ fontFamily: "Nunito, sans-serif" }}>
                        {checkIn}
                      </span>
                      <ChevronDown className="w-3.5 h-3.5 text-amber-100" />
                    </div>
                  </div>

                  {/* Check-Out */}
                  <div className="flex-1">
                    <label className="text-amber-50 text-xs font-light mb-2 block" style={{ fontFamily: "Nunito, sans-serif" }}>
                      Check - Out
                    </label>
                    <div className="bg-amber-800/30 rounded-lg px-3 py-2.5 flex items-center justify-between border border-amber-600/20">
                      <span className="text-white text-sm font-light" style={{ fontFamily: "Nunito, sans-serif" }}>
                        {checkOut}
                      </span>
                      <ChevronDown className="w-3.5 h-3.5 text-amber-100" />
                    </div>
                  </div>

                  {/* Guests */}
                  <div className="w-20">
                    <label className="text-amber-50 text-xs font-light mb-2 block" style={{ fontFamily: "Nunito, sans-serif" }}>
                      Guests
                    </label>
                    <div className="bg-amber-800/30 rounded-lg px-3 py-2.5 flex items-center justify-between border border-amber-600/20">
                      <span className="text-white text-sm font-light">{guests}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-amber-100" />
                    </div>
                  </div>

                  {/* Button */}
                  <div className="flex items-end">
                    <button
                      className="bg-white text-amber-700 rounded-lg px-5 py-2.5 font-semibold hover:bg-amber-50 transition-all flex items-center gap-2.5 shadow-md whitespace-nowrap"
                      style={{ fontFamily: "Nunito, sans-serif" }}
                    >
                      <span className="text-sm">Check Availability</span>
                      <div className="w-5 h-5 rounded-full bg-amber-100 border border-amber-600 flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-amber-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-16 mt-16">
          <div className="grid grid-cols-4 gap-2">
            {[
              {
                title: "Jungle Safari",
                num: "01",
                img: "https://images.unsplash.com/photo-1709730705218-3ccc27971489?w=800&q=80",
              },
              {
                title: "Canoe Experience",
                num: "02",
                img: "https://images.unsplash.com/photo-1628251798128-266e012ef8e5?w=800&q=80",
              },
              {
                title: "Tharu Culture Show",
                num: "03",
                img: "https://images.unsplash.com/photo-1580508173369-46e8a2a660b6?w=800&q=80",
              },
              {
                title: "Sunset by the Rapti",
                num: "04",
                img: "https://images.unsplash.com/photo-1613068687893-dabb52b6b938?w=800&q=80",
              },
            ].map((card) => (
              <div
                key={card.num}
                className="group relative rounded-2xl overflow-hidden h-80 cursor-pointer"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div
                    className="text-5xl font-normal text-white/90 mb-2"
                    style={{ fontFamily: "Marcellus, serif" }}
                  >
                    {card.num}
                  </div>
                  <div
                    className="text-white text-lg font-light"
                    style={{ fontFamily: "Nunito, sans-serif" }}
                  >
                    {card.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutExperiences;
