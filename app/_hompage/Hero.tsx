"use client";
import React, { useState } from "react";
import { Calendar, Users, ArrowRight } from "lucide-react";

const Hero = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);

  const handleBooking = () => {
    console.log({ checkIn, checkOut, adults, children, rooms });
    // Redirect to booking or availability page
  };

  return (
    <>
      {/* Google Fonts */}
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Marcellus&family=Nunito:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section className="relative w-full pt-24 min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=80"
            alt="Luxury riverside resort in Sauraha, Chitwan"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Heading */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-normal mb-6 leading-tight"
            style={{ fontFamily: "Marcellus, serif" }}
          >
            <span className="text-white">Experience Nature’s Serenity </span>
            <br />
            <span className="text-amber-500">at River Edge Resort</span>
          </h1>

          {/* Description */}
          <p
            className="text-gray-200 text-base md:text-lg max-w-3xl mx-auto font-light leading-relaxed mb-12"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Nestled beside the Rapti River in Sauraha, our resort blends the
            tranquility of nature with modern comfort. Enjoy elephant safaris,
            sunset views, and authentic Tharu hospitality — all in one
            unforgettable stay.
          </p>

          {/* Booking Widget */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8">
              {/* Booking Form */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Check-in Date */}
                <div className="relative">
                  <label
                    className="block text-left text-xs font-semibold text-gray-700 mb-2"
                    style={{ fontFamily: "Nunito, sans-serif" }}
                  >
                    Check-in
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full pl-11 pr-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                      style={{ fontFamily: "Nunito, sans-serif" }}
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                </div>

                {/* Check-out Date */}
                <div className="relative">
                  <label
                    className="block text-left text-xs font-semibold text-gray-700 mb-2"
                    style={{ fontFamily: "Nunito, sans-serif" }}
                  >
                    Check-out
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full pl-11 pr-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                      style={{ fontFamily: "Nunito, sans-serif" }}
                      min={checkIn || new Date().toISOString().split("T")[0]}
                    />
                  </div>
                </div>

                {/* Guests & Rooms */}
                <div className="relative">
                  <label
                    className="block text-left text-xs font-semibold text-gray-700 mb-2"
                    style={{ fontFamily: "Nunito, sans-serif" }}
                  >
                    Guests & Rooms
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10" />
                    <button
                      onClick={() => setShowGuestDropdown(!showGuestDropdown)}
                      className="w-full pl-11 pr-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm text-left bg-white hover:bg-gray-50 transition-colors"
                      style={{ fontFamily: "Nunito, sans-serif" }}
                    >
                      {adults + children} Guest
                      {(adults + children) > 1 ? "s" : ""}, {rooms} Room
                      {rooms > 1 ? "s" : ""}
                    </button>

                    {/* Dropdown */}
                    {showGuestDropdown && (
                      <div className="absolute top-full mt-2 left-0 w-72 bg-white border border-gray-200 rounded-xl shadow-xl p-5 z-50">
                        {/* Adults */}
                        <div className="flex items-center justify-between mb-5 pb-5 border-b border-gray-200">
                          <div>
                            <span
                              className="text-sm font-semibold text-gray-800 block"
                              style={{ fontFamily: "Nunito, sans-serif" }}
                            >
                              Adults
                            </span>
                            <span
                              className="text-xs text-gray-500"
                              style={{ fontFamily: "Nunito, sans-serif" }}
                            >
                              Ages 13+
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => setAdults(Math.max(1, adults - 1))}
                              className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-colors font-semibold"
                            >
                              −
                            </button>
                            <span className="text-sm font-bold w-8 text-center">
                              {adults}
                            </span>
                            <button
                              onClick={() => setAdults(adults + 1)}
                              className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-colors font-semibold"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Children */}
                        <div className="flex items-center justify-between mb-5 pb-5 border-b border-gray-200">
                          <div>
                            <span
                              className="text-sm font-semibold text-gray-800 block"
                              style={{ fontFamily: "Nunito, sans-serif" }}
                            >
                              Children
                            </span>
                            <span
                              className="text-xs text-gray-500"
                              style={{ fontFamily: "Nunito, sans-serif" }}
                            >
                              Ages 0–12
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() =>
                                setChildren(Math.max(0, children - 1))
                              }
                              className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-colors font-semibold"
                            >
                              −
                            </button>
                            <span className="text-sm font-bold w-8 text-center">
                              {children}
                            </span>
                            <button
                              onClick={() => setChildren(children + 1)}
                              className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-colors font-semibold"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Rooms */}
                        <div className="flex items-center justify-between mb-5">
                          <div>
                            <span
                              className="text-sm font-semibold text-gray-800 block"
                              style={{ fontFamily: "Nunito, sans-serif" }}
                            >
                              Rooms
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => setRooms(Math.max(1, rooms - 1))}
                              className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-colors font-semibold"
                            >
                              −
                            </button>
                            <span className="text-sm font-bold w-8 text-center">
                              {rooms}
                            </span>
                            <button
                              onClick={() => setRooms(rooms + 1)}
                              className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-colors font-semibold"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <button
                          onClick={() => setShowGuestDropdown(false)}
                          className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-xl text-sm font-semibold transition-colors"
                          style={{ fontFamily: "Nunito, sans-serif" }}
                        >
                          Apply
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Book Now Button */}
              <button
                onClick={handleBooking}
                className="w-full mt-6 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                Check Availability
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Quick Info */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span style={{ fontFamily: "Nunito, sans-serif" }}>
                    Riverside Dining
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span style={{ fontFamily: "Nunito, sans-serif" }}>
                    Jungle Safari Tours
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span style={{ fontFamily: "Nunito, sans-serif" }}>
                    Tharu Cultural Evenings
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
