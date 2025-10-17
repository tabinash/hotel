"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CallToAction = () => {
  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Marcellus&family=Nunito:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section className="relative w-full h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
        <Image
  src="https://plus.unsplash.com/premium_photo-1664302611835-c30a4c86cd31?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2F1cmFoYSUyMHdpbGQlMjBsaWZlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"
  alt="Chitwan jungle at golden hour"
  fill
  className="object-cover transform -scale-x-100"
  priority
/>


          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 gap-8">
            {/* Left side - reserved for background subject */}
            <div></div>

            {/* Right side - CTA content */}
            <div className="flex flex-col justify-center pb-16">
              {/* Urgent Heading */}
             <h1
                className="text-4xl font-normal leading-tight mb-4"
                style={{ fontFamily: "Marcellus, serif" }}
              >
                <span className="text-white">The Jungle </span>
                <span className="text-amber-400">Awaits Your Story</span>
              </h1>

              {/* Description */}
              <p
                className="text-white text-sm font-semibold leading-relaxed mb-6"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                This is more than a getaway—it&apos;s a journey into the heart of Nepal&apos;s 
                untamed wilderness. Where rhinos roam, tigers prowl, and every sunrise 
                brings new wonder. Your Chitwan adventure begins the moment you book.
              </p>

              {/* Value Props - Quick bullets */}
       

              {/* Primary & Secondary CTA Buttons */}
              <div className="flex flex-col gap-3">
                <button
                  className="group bg-amber-400 hover:bg-amber-500 text-black font-bold text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-amber-400/50 flex items-center justify-center gap-2"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  Book Your Safari Experience
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Secondary Options */}
                <div className="flex gap-3">
                  <a
                    href="tel:+9779845123456"
                    className="flex-1 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30 text-white font-semibold text-xs px-4 py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
                    style={{ fontFamily: "Nunito, sans-serif" }}
                  >
                    <Phone className="w-4 h-4" />
                    Call Us
                  </a>
                  <a
                    href="mailto:reserve@sphironhotel.com"
                    className="flex-1 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30 text-white font-semibold text-xs px-4 py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
                    style={{ fontFamily: "Nunito, sans-serif" }}
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                </div>
              </div>

              {/* Trust Badge */}
              <p
                className="text-white/60 text-xs mt-4 text-center"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                ✓ Trusted by 3,000+ nature lovers • Certified Eco-Tourism Partner
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;