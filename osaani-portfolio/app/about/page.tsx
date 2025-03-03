import React from 'react'
import { Navbar } from '../components/navbar'
import { About, VideoBackground } from '../components/helpers'

const AboutPage = () => {
  return (
    <main>
        <VideoBackground videoSrc='infinity-tunnel.mp4'/>
        <About/>
    </main>
  )
}

export default AboutPage