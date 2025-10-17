export default function SpecialOffersSection() {
  return (
    <>
      {/* Import Google Fonts - MATCHING TRAVEL SITE */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Marcellus&family=Nunito:wght@300;400;500;600;700&display=swap" 
        rel="stylesheet" 
      />

      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-normal text-amber-700 mb-6"
            style={{ fontFamily: 'Marcellus, serif' }}
          >
            Exclusive <span className="text-gray-900">Safari Packages</span>
          </h2>
          <p 
            className="text-gray-600 text-sm max-w-3xl mx-auto font-light leading-relaxed"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            Make your Chitwan adventure even more memorable with our specially curated packages. From seasonal wildlife experiences to cultural immersion offers, we&apos;ve crafted deals that bring you closer to nature.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <img
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&auto=format&fit=crop&q=80"
            alt="Safari jeep in morning mist"
            className="rounded-3xl object-cover h-[280px] w-full"
          />
          <div className="rounded-3xl p-8 flex flex-col justify-center bg-white border border-amber-100">
            <h3 
              className="text-xl font-semibold text-amber-700 mb-3"
              style={{ fontFamily: 'Marcellus, serif' }}
            >
              Wildlife Season Special
            </h3>
            <p 
              className="text-gray-700 mb-6 text-sm font-light leading-relaxed"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              Book during peak wildlife season (Oct-March) and enjoy 3 nights with daily safaris, expert guides, and complimentary nature walks included.
            </p>
            <button 
              className="bg-amber-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-700 transition-all duration-300 w-fit text-sm flex items-center gap-2"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              Read More 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1549366021-9f761d450615?w=500&auto=format&fit=crop&q=80"
            alt="One-horned rhinoceros"
            className="rounded-3xl object-cover h-[280px] w-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-3xl p-8 flex flex-col justify-center text-white">
            <h3 
              className="text-xl font-normal mb-3"
              style={{ fontFamily: 'Marcellus, serif' }}
            >
              Family Adventure Pack
            </h3>
            <p 
              className="text-gray-200 mb-6 text-sm font-light leading-relaxed"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              Traveling with kids? Get 30% off on family suites plus free junior naturalist activities, elephant encounters, and cultural dance performances under the stars.
            </p>
            <button 
              className="bg-amber-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-700 transition-all duration-300 w-fit text-sm flex items-center gap-2"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              Read More 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
          <img
            src="https://www.junglecrown.com/wp-content/uploads/2016/10/Tharu-Culture-Hotel-Jungle-Crown-Sauraha-Nepal-1.jpg.webp"
            alt="Tharu cultural performance"
            className="rounded-3xl object-cover h-[280px] w-full"
          />
          <div className="bg-amber-100 rounded-3xl p-8 flex flex-col justify-center">
            <h3 
              className="text-xl font-semibold text-amber-700 mb-3"
              style={{ fontFamily: 'Marcellus, serif' }}
            >
              Early Bird Safari Saver
            </h3>
            <p 
              className="text-gray-700 mb-6 text-sm font-light leading-relaxed"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              Book 60 days in advance and save 25% on all room categories. Includes airport transfers, welcome drinks, and a complimentary canoe safari on the Rapti River.
            </p>
            <button 
              className="bg-amber-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-700 transition-all duration-300 w-fit text-sm flex items-center gap-2"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              Read More 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}