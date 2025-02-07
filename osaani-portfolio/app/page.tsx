import React from 'react'
import 'bulma/css/bulma.min.css';
import Navbar from './components/navbar';

export default function Home() {
    return (
        <main>
           <Navbar/>
           <div className='container'>
                <p className='title is-1 has-text-centered mt-6'>Osaani Productions</p>
                <p className='subtitle is-3 has-text-centered'>Design, Develop, Done.</p>

                <figure className="image">
                    <img src='design-image.png'/>
                </figure>
                <figure className="image">
                    <img src='design-image-2.jpg'/>
                </figure>
           </div>
          
        </main>
    )
}
