'use client';
import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <Link className="navbar-item" href="/">
                <figure className="image is-32x32">
                    <img className='is-rounded' src='/game-console.png'/>
                </figure>
            </Link>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarLinksCntr" className="navbar-menu">
            <div className="navbar-start">
                <Link className="navbar-item" href="/about">About</Link>
                <Link className="navbar-item" href="/contact">Contact</Link>
                <Link className="navbar-item" href="/projects">Projects</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar