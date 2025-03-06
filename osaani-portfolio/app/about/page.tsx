import React from 'react'
import { About, SkillTree, VideoBackground, Resume } from '../components/helpers'

const AboutPage = () => {
  return (
    <main>
        <VideoBackground videoSrc='infinity-tunnel.mp4'/>
        <About/>
        <SkillTree/>
        <Resume/>
    </main>
  )
}

export default AboutPage