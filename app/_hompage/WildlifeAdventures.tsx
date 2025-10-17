"use client";
import React from "react";
import { Heart, MapPin } from "lucide-react";

interface WildlifeExperienceProps {
  image: string;
  title: string;
  details: string;
  description: string;
  rating: number;
}

const WildlifeExperienceCard = ({
  image,
  title,
  details,
  rating,
}: WildlifeExperienceProps) => {
  return (
    <div className="group cursor-pointer">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-3xl h-[320px]">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" /> */}

        {/* Overlay Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          {/* Top Icons */}
          <div className="flex justify-end items-start gap-3">
            <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors rounded-full p-2">
              <MapPin className="w-4 h-4 text-white" />
            </button>
            <button className="text-white hover:text-red-500 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Content */}
          <div>
            {/* Star Rating */}
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`w-4 h-4 ${
                    index < rating ? "fill-yellow-400" : "fill-white/30"
                  }`}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            {/* Title and Details */}
            <div className="mb-2">
              <h3
                className="text-white text-xl font-semibold mb-1"
                style={{ fontFamily: "Cinzel, serif" }}
              >
                {title}
              </h3>
              <p
                className="text-white/80 text-xs"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {details}
              </p>
            </div>

            {/* Description */}
        

            {/* Bottom Icons */}
          
          </div>
        </div>
      </div>
    </div>
  );
};

const WildlifeAdventures = () => {
const wildlifeExperiences = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1664302689659-c5ce62589448?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hpdHdhbiUyMG5hdGlvbmFsJTIwcGFyayUyMHJoaW5vfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
    title: "Rhino Tracking Safari",
    details: "( 4x4 Jeep • Early Morning )",
    description:
      "Venture into the grasslands at dawn to spot the majestic one-horned rhinoceros—Chitwan's most iconic resident. Our expert naturalists guide you through prime rhino habitat.",
    rating: 5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1743504440802-5fdea460cd6d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpdHdhbiUyMG5hdGlvbmFsJTIwcmFwdGklMjBjYW5vZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400",
    title: "Rapti River Canoe",
    details: "( Traditional Dugout • Sunrise )",
    description:
      "Glide silently along the Rapti River as marsh mugger crocodiles bask on the banks and kingfishers dive for breakfast. A peaceful journey through wetland paradise.",
    rating: 5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=500&q=80",
    title: "Bengal Tiger Quest",
    details: "( Full Day • Expert Tracker )",
    description:
      "Track the elusive Bengal tiger through sal forests and riverine corridors. While sightings aren't guaranteed, the thrill of the search reveals Chitwan's untamed wilderness.",
    rating: 4,
  },
  {
    image:
      "https://images.unsplash.com/photo-1736528526419-7565c82f5f1f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpdHdhbiUyMG5hdGlvbmFsJTIwZWxlcGhhbmQlMjBicmVlZGluZyUyMGNlbnRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400",
    title: "Elephant Breeding Center Visit",
    details: "( Educational • Family Friendly )",
    description:
      "Learn about elephant conservation efforts and the lives of these gentle giants. Observe young calves and understand the bond between mahouts and elephants.",
    rating: 4,
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661963996316-dcce07e0b0c3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hpdHdhbiUyMG5hdGlvbmFsJTIwYmlyZHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
    title: "Bird Watching Expedition",
    details: "( Morning • Binoculars Provided )",
    description:
      "Spot over 500 species of birds, from vibrant kingfishers to rare hornbills. Chitwan&apos;s wetlands and forests are a paradise for avid birders and photographers.",
    rating: 5,
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1726837268811-4bf23787b15d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpdHdhbiUyMG5hdGlvbmFsJTIwanVuZ2xlJTIwd2Fsa3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400",
    title: "Jungle Walk Adventure",
    details: "( Guided • Close to Nature )",
    description:
      "Walk quietly through dense jungle trails with experienced naturalists. Discover fresh animal tracks, exotic flora, and the pure thrill of being deep in the wild.",
    rating: 5,
  },
];


  return (
    <>
      {/* Import Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <section className="relative w-full bg-black">
        {/* Hero Section */}
        <div className="relative w-full h-[460px] overflow-hidden">
          {/* Background Jungle Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1700366776973-20bda63d5b1a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpdHdhbiUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
              alt="Chitwan jungle landscape"
              className="w-full h-full object-cover object-center"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
          </div>

          {/* Content Grid */}
          <div className="relative h-full max-w-7xl mx-auto px-8 grid grid-cols-2 gap-12 items-center">
            {/* Left Side - Title */}
            <div>
              <h1
                className="text-8xl font-bold leading tracking-wide"
                style={{ fontFamily: "Dancing Script, cursive" }}
              >
                <span className="text-white">Walk With</span>
                <br />
                <span className="text-white">The Wild</span>
              </h1>
            </div>

            {/* Right Side - Description and Button */}
            <div className="flex flex-col items-end text-right">
              <p
                className="text-white text-base font-light leading-relaxed mb-6 max-w-md"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Chitwan isn&apos;t just a destination—it&apos;s a living sanctuary where endangered 
                species roam free. From one-horned rhinos to Bengal tigers, sloth bears to 
                gharial crocodiles, every safari reveals nature&apos;s raw magnificence. Let our 
                certified guides unveil the jungle&apos;s secrets.
              </p>

              <button
                className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-medium text-base px-10 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-amber-400/50"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Explore All Adventures
              </button>
            </div>
          </div>

          {/* Location Pin Decoration */}
          <div className="absolute top-12 right-12">
            <div className="relative">
              <svg className="absolute -top-8 -left-16 w-24 h-16" viewBox="0 0 100 60">
                <path
                  d="M 10 30 Q 30 10, 50 25 Q 70 40, 90 20"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="3,4"
                  opacity="0.6"
                />
              </svg>
              <MapPin className="w-10 h-10 text-white fill-white drop-shadow-lg" />
            </div>
          </div>
        </div>

        {/* Wildlife Experiences Section */}
        <div className="max-w-5xl mx-auto py-16 px-8">
          <div className="mb-12">
            <p
              className="text-gray-300 text-sm leading-relaxed font-light"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Every adventure at Sphiron Hotel is crafted with respect for wildlife and local 
              communities. We partner with indigenous Tharu guides, follow eco-tourism principles, 
              and ensure that your journey contributes to conservation efforts. Experience the 
              jungle responsibly, authentically, and unforgettably.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wildlifeExperiences.map((experience, index) => (
              <WildlifeExperienceCard key={index} {...experience} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WildlifeAdventures;