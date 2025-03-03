import React from 'react'
import { About, SkillTree, VideoBackground } from '../components/helpers'

const AboutPage = () => {
  return (
    <main>
        <VideoBackground videoSrc='infinity-tunnel.mp4'/>
        <About/>
        <SkillTree/>
    </main>
  )
}

export default AboutPage