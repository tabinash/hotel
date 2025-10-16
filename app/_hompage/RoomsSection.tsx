"use client";
import { FaBed, FaStar } from "react-icons/fa";

const rooms = [
  {
    title: "Jungle View Suite",
    price: 180,
    type: "Sphiron Signature",
    size: "450 SQ. FT / Private Balcony",
    beds: "1 King Bed",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&auto=format&fit=crop&q=80",
    rating: 5,
    description:
      "Wake up to a sea of emerald canopy stretching beyond your balcony. Handcrafted bamboo furnishings, warm tones, and large windows bring the jungle’s serenity inside. Perfect for travelers seeking intimacy with nature — without leaving comfort behind.",
  },
  {
    title: "Riverside Deluxe Room",
    price: 140,
    type: "Sphiron Comfort",
    size: "380 SQ. FT / River Views",
    beds: "2 Queen Beds",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500&auto=format&fit=crop&q=80",
    rating: 5,
    description:
      "Let the gentle flow of the Rapti River lull you to rest. These rooms open to soothing river breezes and golden sunsets that light up the water. Ideal for families or friends who want the essence of Chitwan’s calm in their stay.",
  },
  {
    title: "Forest Retreat Cottage",
    price: 220,
    type: "Sphiron Premium",
    size: "600 SQ. FT / Private Garden",
    beds: "1 King Bed + Daybed",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&auto=format&fit=crop&q=80",
    rating: 5,
    description:
      "Your secluded cottage among the trees. A private garden, an open-air bath, and earthy interiors curated with Tharu artistry create a hideaway that feels timeless. Perfect for couples and dreamers craving absolute tranquility.",
  },
];

export default function RoomsSection() {
  return (
    <>
      {/* Import Google Fonts - Matching the Natural Travel Theme */}
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

      <section className="max-w-7xl mx-auto px-4 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-normal text-amber-700 mb-6"
            style={{ fontFamily: "Marcellus, serif" }}
          >
            Your Sanctuary <span className="text-gray-900">After Adventure</span>
          </h2>
          <p
            className="text-gray-600 text-sm max-w-3xl mx-auto font-light leading-relaxed"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            When the day’s safaris end and the jungle quiets, find your calm at
            Sphiron’s private retreats. Designed with natural textures, warm
            lighting, and panoramic views — each room is a cocoon of serenity
            where the rhythm of the wild hums softly beyond your balcony.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, idx) => (
            <div
              key={idx}
              className="rounded-3xl overflow-hidden border border-amber-100 shadow-sm bg-white flex flex-col group cursor-pointer hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                <div
                  className="absolute top-4 right-4 bg-amber-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  ${room.price}
                  <span className="font-light text-xs ml-1">/ Night</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div
                  className="text-amber-700 text-xs mb-2 font-normal"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  {room.type}
                </div>

                <h3
                  className="text-2xl font-semibold mb-1"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  {room.title}
                </h3>

                <p
                  className="text-gray-500 text-xs mb-3 font-light"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  {room.size}
                </p>

                <p
                  className="text-gray-600 text-sm mb-4 font-light leading-relaxed"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  {room.description}
                </p>

                {/* Bottom Details */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-amber-100">
                  <div
                    className="flex items-center gap-2 text-gray-700 text-sm font-normal"
                    style={{ fontFamily: "Nunito, sans-serif" }}
                  >
                    <FaBed className="w-5 h-5 text-amber-700" />
                    {room.beds}
                  </div>
                  <span className="mx-2 text-gray-300">|</span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-4 h-4 ${
                          i < room.rating
                            ? "text-amber-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
