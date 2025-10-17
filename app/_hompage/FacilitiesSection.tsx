"use client";
import { FaChevronRight } from "react-icons/fa";

export default function FacilitiesSection() {
  return (
    <>
      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Marcellus&family=Nunito:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section className="max-w-6xl mx-auto px-4 py-20 relative">
        {/* Section Header */}
        <div className="text-left mb-16 flex items-center justify-between">
          <h2
            className="text-4xl font-normal"
            style={{ fontFamily: "Marcellus, serif" }}
          >
            <span className="text-amber-700">Stay Close </span>
            <span className="text-gray-900">to Nature</span>
          </h2>
          <button
            className="bg-amber-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-800 transition-all duration-300 flex items-center gap-2 text-sm"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Discover More <FaChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-14">
          {/* Facility 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80"
              alt="Cozy cottage near jungle"
              className="rounded-3xl object-cover h-[320px] w-full"
            />
            <div>
              <span
                className="text-amber-700 font-semibold text-sm uppercase tracking-wider"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                01 • Accommodation
              </span>
              <h3
                className="text-2xl font-semibold mt-3 mb-4"
                style={{ fontFamily: "Marcellus, serif" }}
              >
                Cottage Rooms with a Jungle View
              </h3>
              <p
                className="text-gray-700 text-sm leading-relaxed font-light mb-6"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                Wake up to the sound of birds and gentle rustling of the forest.
                Our spacious cottages are built with natural textures, bamboo,
                and earthy tones — blending comfort with the calm rhythm of
                Chitwan&apos;s wilderness.
              </p>
              <button
                className="bg-amber-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-800 transition-all duration-300 flex items-center gap-2 text-sm"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                View Rooms <FaChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Facility 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
            <img
              src="https://images.unsplash.com/photo-1667659391380-23f357572f8d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpdHdhbiUyMG5hdGlvbmFsJTIwcGFyayUyMGRpbmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400"
              alt="Dining area by the river"
              className="rounded-3xl object-cover h-[320px] w-full md:order-2"
            />
            <div className="md:order-1">
              <span
                className="text-amber-700 font-semibold text-sm uppercase tracking-wider"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                02 • Dining
              </span>
              <h3
                className="text-2xl font-semibold mt-3 mb-4"
                style={{ fontFamily: "Marcellus, serif" }}
              >
                Riverside Dining with Local Flavors
              </h3>
              <p
                className="text-gray-700 text-sm leading-relaxed font-light mb-6"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                Enjoy Nepali and Tharu delicacies prepared with fresh local
                ingredients. Whether it&apos;s breakfast by the Rapti River or a
                candle-lit dinner under the stars, every meal is a celebration
                of Chitwan&apos;s taste and tradition.
              </p>
              <button
                className="bg-amber-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-800 transition-all duration-300 flex items-center gap-2 text-sm"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                Explore Menu <FaChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Facility 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              src="https://images.unsplash.com/photo-1649744580493-c5d1cac78209?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hpdHdhbiUyMG5hdGlvbmFsJTIwcGFyayUyMHN3aW1taW5nJTIwcG9vbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400"
              alt="Outdoor pool surrounded by greenery"
              className="rounded-3xl object-cover h-[320px] w-full"
            />
            <div>
              <span
                className="text-amber-700 font-semibold text-sm uppercase tracking-wider"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                03 • Relaxation
              </span>
              <h3
                className="text-2xl font-semibold mt-3 mb-4"
                style={{ fontFamily: "Marcellus, serif" }}
              >
                Poolside Calm Amidst the Jungle
              </h3>
              <p
                className="text-gray-700 text-sm leading-relaxed font-light mb-6"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                Dip into our crystal-clear pool surrounded by lush gardens and
                chirping mynas. As the afternoon light softens, unwind with a
                refreshing drink and the peaceful view of the forest canopy.
              </p>
              <button
                className="bg-amber-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-800 transition-all duration-300 flex items-center gap-2 text-sm"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                Read More <FaChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
