import React from 'react'
import ContactUs from '../Components/ContactUs'
import Features from '../Components/Features'
import HeroHeader from '../Components/HeroHeader'
import Navbar from '../Components/NavBar'
import Startups from '../Components/Startups'

export const Home = () => {
  return (
    <div>
        <Navbar />
        <Features/>
        <HeroHeader/>
        <Startups/>
        <ContactUs/>
    </div>
  )
}
