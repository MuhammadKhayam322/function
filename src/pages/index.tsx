import Navbar from '@/components/Navbar'
import React from 'react'
import OtherPage from './other'
import HeroSection from '@/components/HeroSection'
import AutoScrollCards from '@/components/Scrolling'
import ProjectShowcase from '@/components/ProjectShowcase'

function index() {
  return (
    <div>
      <div className='mt-30'>
      <Navbar />
      </div>
      <OtherPage />
      <HeroSection />
      <AutoScrollCards />
      <div className='mt-25'>
      <ProjectShowcase />
      </div>
    </div>
  )
}

export default index




