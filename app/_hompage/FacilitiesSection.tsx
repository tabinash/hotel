import { FaChevronRight } from "react-icons/fa";

export default function FacilitiesSection() {
  return (
    <>
      {/* Import Google Fonts - MATCHING TRAVEL SITE */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Marcellus&family=Nunito:wght@300;400;500;600;700&display=swap" 
        rel="stylesheet" 
      />

      <section className="max-w-6xl mx-auto px-4 py-20 relative">
        <div className="text-left mb-16 flex items-center justify-between">
          <h2 
            className="text-4xl font-normal"
            style={{ fontFamily: 'Marcellus, serif' }}
          >
            <span className="text-amber-700">Comfort Meets </span>
            <span className="text-gray-900">Wilderness</span>
          </h2>
          <button 
            className="bg-amber-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-800 transition-all duration-300 flex items-center gap-2 text-sm"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            View More <FaChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-12">
          {/* Facility 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500&auto=format&fit=crop&q=80"
              alt="Wellness spa overlooking jungle"
              className="rounded-3xl object-cover h-[300px] w-full"
            />
            <div>
              <div className="flex items-center gap-4 mb-3">
                <span 
                  className="text-2xl font-normal text-gray-900"
                  style={{ fontFamily: 'Marcellus, serif' }}
                >
                  01
                </span>
                <span 
                  className="text-amber-700 font-semibold text-sm"
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                >
                  Wellness
                </span>
              </div>
              <h3 
                className="text-2xl font-semibold mb-3"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                Jungle Spa & Wellness
              </h3>
              <p 
                className="text-gray-700 mb-6 text-sm font-light leading-relaxed"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                Soothe tired muscles after jungle treks with traditional Nepali massage therapies using organic herbs. Our open-air spa pavilion lets you unwind to the symphony of forest sounds and birdsong.
              </p>
              <button 
                className="bg-amber-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-800 transition-all duration-300 flex items-center gap-2 text-sm"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                Read More <FaChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Facility 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
            <img
              src="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=500&auto=format&fit=crop&q=80"
              alt="Infinity pool with jungle views"
              className="rounded-3xl object-cover h-[300px] w-full md:order-2"
            />
            <div className="md:order-1">
              <div className="flex items-center gap-4 mb-3">
                <span 
                  className="text-2xl font-normal text-gray-900"
                  style={{ fontFamily: 'Marcellus, serif' }}
                >
                  02
                </span>
                <span 
                  className="text-amber-700 font-semibold text-sm"
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                >
                  Recreation
                </span>
              </div>
              <h3 
                className="text-2xl font-semibold mb-3"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                Infinity Pool & Deck
              </h3>
              <p 
                className="text-gray-700 mb-6 text-sm font-light leading-relaxed"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                Take a refreshing dip in our infinity pool with panoramic views of the Chitwan forest canopy. Watch the sunset paint the sky while spotted deer graze at the forest edge—pure tranquility after your safari adventures.
              </p>
              <button 
                className="bg-amber-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-800 transition-all duration-300 flex items-center gap-2 text-sm"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                Read More <FaChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Facility 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&auto=format&fit=crop&q=80"
              alt="Restaurant with jungle ambiance"
              className="rounded-3xl object-cover h-[300px] w-full"
            />
            <div>
              <div className="flex items-center gap-4 mb-3">
                <span 
                  className="text-2xl font-normal text-gray-900"
                  style={{ fontFamily: 'Marcellus, serif' }}
                >
                  03
                </span>
                <span 
                  className="text-amber-700 font-semibold text-sm"
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                >
                  Dining
                </span>
              </div>
              <h3 
                className="text-2xl font-semibold mb-3"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                Wild Harvest Restaurant
              </h3>
              <p 
                className="text-gray-700 mb-6 text-sm font-light leading-relaxed"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                Savor authentic Tharu cuisine alongside international favorites, all prepared with locally sourced organic ingredients. Dine al fresco under the stars or in our elegant indoor pavilion with sweeping jungle views.
              </p>
              <button 
                className="bg-amber-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-800 transition-all duration-300 flex items-center gap-2 text-sm"
                style={{ fontFamily: 'Nunito, sans-serif' }}
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