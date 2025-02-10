import React from 'react'
import 'bulma/css/bulma.min.css';
import Navbar from './components/navbar';
import PlaySlideShow from './components/helpers';


//Variables 
  
export default function Home() {
    return (
        <main>
           <Navbar/>
           <div className='container'>
                <p className='title is-1 has-text-centered mt-6'>Osaani Productions</p>
                <p className='subtitle is-3 has-text-centered'>Design, Develop, Done.</p>
                
                <PlaySlideShow/>
            </div>
        </main>
    )
}


