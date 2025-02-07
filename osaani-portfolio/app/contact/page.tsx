import React from 'react'
import Link from 'next/link'
const ContactPage = () => {
  return (
    <div className='container'>
      This is the Contact Page
      <div className="block">
        <Link className='ml-6' href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/">Home</Link>
      </div>
      
    </div>

  )
}

export default ContactPage