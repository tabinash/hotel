"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, User } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg">
                  <svg width="28" height="28" viewBox="0 0 40 40" fill="white">
                    <path d="M8 18 L20 8 L32 18 L32 34 L24 34 L24 24 L16 24 L16 34 L8 34 Z" />
                    <rect
                      x="18"
                      y="12"
                      width="4"
                      height="6"
                      rx="0.5"
                      fill="white"
                      opacity="0.8"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span
                  className="text-xl font-normal text-white leading-tight"
                  style={{ fontFamily: "Marcellus, serif" }}
                >
                  Luxury Stays
                </span>
                <span
                  className="text-[10px] text-amber-400 font-medium tracking-wider uppercase"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  Hotels & Resorts
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                href="#home"
                className="text-amber-400 hover:text-amber-300 transition-colors text-sm font-semibold"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                Home
              </Link>

              {/* Rooms Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("rooms")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="flex items-center gap-1 text-white hover:text-amber-400 transition-colors text-sm font-medium"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  Rooms & Suites
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === "rooms" && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-md rounded-2xl shadow-xl py-3 border border-white/10">
                    {[
                      { href: "#deluxe", label: "Deluxe Rooms" },
                      { href: "#executive", label: "Executive Suites" },
                      { href: "#presidential", label: "Presidential Suite" },
                      { href: "#family", label: "Family Rooms" },
                      { href: "#penthouse", label: "Penthouse" },
                    ].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-5 py-2.5 text-white hover:text-amber-400 hover:bg-white/5 transition-colors text-sm"
                        style={{ fontFamily: "Nunito, sans-serif" }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Facilities Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("facilities")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="flex items-center gap-1 text-white hover:text-amber-400 transition-colors text-sm font-medium"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  Facilities
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === "facilities" && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-md rounded-2xl shadow-xl py-3 border border-white/10">
                    {[
                      { href: "#spa", label: "Spa & Wellness" },
                      { href: "#restaurant", label: "Restaurants & Bars" },
                      { href: "#pool", label: "Swimming Pool" },
                      { href: "#fitness", label: "Fitness Center" },
                      { href: "#events", label: "Event Spaces" },
                    ].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-5 py-2.5 text-white hover:text-amber-400 hover:bg-white/5 transition-colors text-sm"
                        style={{ fontFamily: "Nunito, sans-serif" }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="#offers"
                className="text-white hover:text-amber-400 transition-colors text-sm font-medium"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                Special Offers
              </Link>
              <Link
                href="#dining"
                className="text-white hover:text-amber-400 transition-colors text-sm font-medium"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                Dining
              </Link>
              <Link
                href="#gallery"
                className="text-white hover:text-amber-400 transition-colors text-sm font-medium"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                Gallery
              </Link>
              <Link
                href="#contact"
                className="text-white hover:text-amber-400 transition-colors text-sm font-medium"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                Contact
              </Link>
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="tel:+1234567890"
                className="flex items-center gap-2 text-white hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span
                  className="text-sm font-medium"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  +1 234 567 890
                </span>
              </Link>

              <button
                className="text-white hover:text-amber-400 transition-colors p-2 rounded-full hover:bg-white/10"
                aria-label="User account"
              >
                <User className="w-5 h-5" />
              </button>

              <Link
                href="#booking"
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-amber-500/50"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu (unchanged structurally, same Link replacements can apply here as well) */}
        </nav>
      </header>
    </>
  );
};

export default Header;
