import React from 'react'
import 'bulma/css/bulma.min.css';
import { VideoBackground } from './components/helpers';
import { Introduction } from './components/helpers';
import { Footer } from './components/helpers';

//Variables 
  
export default function Home() {
    return (
        <main>
            <VideoBackground/>
            <Introduction/>
            <Footer/>
        </main>
    )
}
