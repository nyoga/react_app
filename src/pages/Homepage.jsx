import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAll from '../components/ViewAll'

const Homepage = () => {
  return (
    <>
        <Hero />
        <HomeCards />
        <JobListings isHome={true}/>
        <ViewAll />
    </>
  )
}

export default Homepage