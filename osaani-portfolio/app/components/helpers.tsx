"use client"; 
//Imports 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar } from "./navbar";
import { Typewriter } from "react-simple-typewriter";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { useRef, useState } from "react";
import { FiLock } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from 'next/link';
//Variables 
const TARGET_TEXT = "Learn More";
const CYCLES_PER_LETTER = 3;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";



const EncryptButton = () => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);


  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);

    setText(TARGET_TEXT);
  };

  return (
    <motion.button
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="encrypt-button"
    >
      <div className="encrypt-button-content">
        <FiLock />
        <span>{text}</span>
      </div>
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="encrypt-button-glow"
      />
    </motion.button>

  );
};

export function VideoBackground() {
  return (
    <div className="video-container">
    <video autoPlay loop muted playsInline className="video-bg">
      <source src="/homepage-bg-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <Navbar/>

    <div className="content"id='titleText'>
      <h1 className="is-size-1">Osaani Productions</h1>
      <h2 className="is-size-4">
        <Typewriter 
          words={['Design','Develop','Done']}
          loop={0}
          cursor
          cursorStyle="_"
        />
      </h2>
    </div>

  </div>
  );
}
export function Introduction() {
  return(
    <div className="columns content-container">
      <div className="column">
        <section className="hero is-medium ">
          <div className="hero-body is-size-3 subtitle">
            <p className="title is-size-1">Designing Play, Developing Joy!</p>
              <p className="pt-6">
                I've always enjoyed the world of games. It only made sense to start 
                creating my own.
              </p>
              
              <br/>
              I'm fluent in <strong>HTML,</strong> <strong>C#,</strong> and <strong>JavaScript,</strong> with plenty more skills in my inventory. 
              Check out my full skill tree <a href="/about">here.</a>

              <br/>
              <p className="pt-6">
                When I'm not coding, you’ll find me grinding XP in longboarding with my dog, 
                binge-watching anime cutscenes, or crafting gear with arts and crafts. 
                I also play the guitar and piano, and love taking summer strolls to explore the 
                seamless graphics the open world has to offer. 
                Many of my hobbies show up in my work, so look out for some easter eggs! 
              </p>
              <div className="encryptButton pt-6">

                <Link href={'/about'}><EncryptButton /></Link>
                
              </div>
              
          </div>
        </section>
      </div>
      <div className="column">
        <section className="section is-medium">
          <figure className="image is-rounded hover-image-container">
            <img 
              src="/longboarding.png" 
              alt="Person Longboarding" 
              className='default-img'
            />

            <img
              src='/watching-anime.png'
              alt='People watching TV'
              className='second-img'
            />

            <img
              src='/arts-and-crafts.jpg'
              alt='People watching TV'
              className='third-img'
            />
          </figure>         
        </section>
      </div>
    </div>
  );
}

export function Footer() {
  return(
    <footer className="footer">
      <div className="buttons are-large is-rounded is-centered">
        <a href="https://github.com/PrincessHornage?tab=repositories" className="button is-rounded is-size-4">
          <span className="icon is-medium">
            <FontAwesomeIcon icon={faGithub}/>
          </span>
        </a>
        <a href="www.linkedin.com/in/princess-osaani-hornage-b631a6209" className="button is-rounded">
          <FontAwesomeIcon icon={faLinkedin}/>
        </a>
        <a href="https://github.com/PrincessHornage?tab=repositories" className="button is-rounded">
          <FontAwesomeIcon icon={faInstagram}/>
        </a>
      </div>

      <p className="content has-text-centered">
        © 2025 Princess-Osaani Hornage. All Rights Reserved.
      </p>
    </footer>
  );

}
