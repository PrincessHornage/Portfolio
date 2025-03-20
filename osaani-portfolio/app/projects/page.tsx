import React from 'react'
import { Navbar } from '../components/navbar'
import { Projects } from '../components/helpers'
import 'bulma/css/bulma.min.css';


const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Projects/>
      
    </div>
  )
}

export default HomePage