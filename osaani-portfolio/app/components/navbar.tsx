'use client';
import React from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faLaptopCode, faCodeBranch} from '@fortawesome/free-solid-svg-icons';

export function Navbar() {
  return (
    <nav className="navbar is-spaced" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <Link className="navbar-item" href="/">
                <figure className="image is-48x48">
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
            <div className="navbar-end is-size-4">
                <Link className="navbar-item" href="/about">
                    <FontAwesomeIcon icon={faUser} />
                    <span>About</span>
                </Link>
                <Link className="navbar-item" href="/contact">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>Contact</span>
                </Link>
                <Link className="navbar-item" href="/projects">
                    <FontAwesomeIcon icon={faLaptopCode} />
                    <span>Projects</span>
                </Link>
                <Link className="navbar-item" href="https://github.com/PrincessHornage?tab=repositories">
                    <FontAwesomeIcon icon={faCodeBranch} />
                    <span>Github</span>
                </Link>
            </div>
        </div>
    </nav>
  )
}





