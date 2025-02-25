import React from 'react'
import 'bulma/css/bulma.min.css';
import Navbar from './components/navbar';
import VideoBackground from './components/helpers';

//Variables 
  
export default function Home() {
    return (
        <main>
        
            <VideoBackground/>
            <div className="container">
                <section className="hero is-link">
                    <div className="hero-body">
                        <p className="title">Link hero</p>
                        <p className="subtitle">Link subtitle</p>
                    </div>
                </section>
            </div>
            
        </main>
    )
}
