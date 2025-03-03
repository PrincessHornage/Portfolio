import React from 'react'
import 'bulma/css/bulma.min.css';
import { TypewriterTitle, VideoBackground } from './components/helpers';
import { Introduction } from './components/helpers';
import { Footer } from './components/helpers';

//Variables 
  
export default function Home() {
    return (
        <main>
            <VideoBackground videoSrc="/homepage-bg-video.mp4" />
            <TypewriterTitle/>

            <div className="section">
                <Introduction/>
               
            </div>
            <Footer/>
        </main>
    )
}
