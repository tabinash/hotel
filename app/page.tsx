import React from 'react'
import RoomsSection from './_hompage/RoomsSection'
import Hero from './_hompage/Hero'
import AboutExperiences from './_hompage/AboutExperiences'
import FacilitiesSection from './_hompage/FacilitiesSection'
import HowWeWorkSection from './_hompage/HowWeWorkSection'
import WildlifeAdventures from './_hompage/WildlifeAdventures'
import NewsInsightsSection from './_hompage/NewsInsightsSection'
import SpecialOffersSection from './_hompage/SpecialOffersSection'
import CallToAction from "./_hompage/CallToAction"

const page = () => {
  return (
    <div>
      <Hero />
      <AboutExperiences />
      <WildlifeAdventures />
      <RoomsSection />
      <FacilitiesSection />
      <SpecialOffersSection />
      <CallToAction />

    </div>
  )
}

export default page
