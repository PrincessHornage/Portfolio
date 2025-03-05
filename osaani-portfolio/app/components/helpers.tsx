"use client"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar } from "./navbar";
import { Typewriter } from "react-simple-typewriter";
import { faCss, faDartLang, faGithub, faGitlab, faHtml5, faJava, faJs, faLinkedin, faReact, faRust, faUnity, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { useRef, useState } from "react";
import { FiLock } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from 'next/link';
import { faC, faHashtag, faPlus, faS, faUser, faV } from '@fortawesome/free-solid-svg-icons';

const CYCLES_PER_LETTER = 3;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

interface VideoBackgroundProps {videoSrc: string;}
interface EncryptBttnString {btnPhrase: string;}

//Creates encryption button styling effect
const EncryptButton = ({btnPhrase} : EncryptBttnString) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);


  const [text, setText] = useState(btnPhrase);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = btnPhrase.split("")
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

      if (pos >= btnPhrase.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);

    setText(btnPhrase);
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
//Displays large background video over screen 
export function VideoBackground({videoSrc}: VideoBackgroundProps) {
  return (
    <div className="video-container">
    <video autoPlay loop muted playsInline className="video-bg">
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <Navbar/>
  </div>
  );
}
export function TypewriterTitle() {
  return(
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
  );
}
//Content 
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

                <Link href={'/about'}><EncryptButton btnPhrase='LEARN MORE'/></Link>
                
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
//About Page 
export function About() {
  return(
    <div className="content pt-6">
      <section className="section">
        <h1 className="title has-text-centered pb-6">Check My Stats </h1>
        <div className="columns">
          <div className="column is-flex is-justify-content-center is-align-items-center">
            <p className='is-size-3'>
              I’m Princess-Osaani Hornage, a full-stack dev & game tech wizard, leveling up digital experiences with React.js, 
              blockchain apps, and interactive web design. Armed with a <strong>Game Design & Development</strong> degree from <strong>RIT</strong>, I craft sleek, 
              high-performance interfaces like a pro gamer mastering speedruns.
              <br/>
              <br/>
              From building web apps to debugging game mechanics, I thrive on problem-solving and innovation. With awards and experience 
              in teaching STEM, front and back-end design, and sales, I bring a mix of precision, creativity, and strategy to every project.

              <br/>
              <br/>
              Let’s team up and create the next big thing!
            </p>
          </div>

          <div className="column is-flex is-justify-content-center is-align-items-center">
            <figure className="image">
              <img src="web-developer.png" alt="Full Stack Developer" id='developerImg'/>
            </figure>
          </div>
        </div>
      </section>
    </div>
  ); 
}
export function SkillTree() {
  return(
    <div>
      <section className='section mt-6'>
        <hr/>
        <h1 className="title has-text-centered">Skill Trees</h1>
        <hr/>

        <div className="container is-fluid" id='skill-tree-container'>
          <div className="columns">
            <div className="column is-flex is-justify-content-center is-align-content-center is-align-items-center is-align-self-center">
            <h1 className="title">Programming Languages</h1>
            <div id="circle-background"></div>
            <div className=" is-flex is-justify-content-center is-align-items-center mb-6 ">
              <div id="logo-wheel">
                <div id="logo">
                  <figure className="image">
                    <img src="c-sharp.png" alt="C#" />
                  </figure>
                </div>
                <div id="logo">
                  <figure className="image">
                    <img src="c-plus.png" alt="C#" />
                  </figure>
                </div>
                <div id="logo"><FontAwesomeIcon icon={faHtml5} /></div>
                <div id="logo"><FontAwesomeIcon icon={faCss} /></div>
                <div id="logo"><FontAwesomeIcon icon={faJava} /></div>
                <div id="logo"><FontAwesomeIcon icon={faJs} /></div>
                <div id="logo"><FontAwesomeIcon icon={faDartLang} /></div>
                <div id="logo"><FontAwesomeIcon icon={faRust} /></div>
              </div>
              <div id="center-img">
                <figure className="image is-128x128">
                  <img src="female-programmer.png" alt="Female Programmer on Laptop" />
                </figure>
              </div>
            </div>
            </div>
            <div className="column is-flex is-justify-content-center is-align-content-center is-align-items-center is-align-self-center">
              <h1 className="title">Tools & Technology</h1>
              <div id="tool-circle-background"></div>
              <div id="tool-logo-wheel">
                <div id="logo">
                  <figure className="image">
                    <img src="c-sharp.png" alt="C#" />
                  </figure>
                </div>
                <div id="logo">
                  <figure className="image">
                    <img src="c-plus.png" alt="C#" />
                  </figure>
                </div>
                <div id="logo"><FontAwesomeIcon icon={faHtml5} /></div>
                <div id="logo"><FontAwesomeIcon icon={faCss} /></div>
                <div id="logo"><FontAwesomeIcon icon={faJava} /></div>
                <div id="logo"><FontAwesomeIcon icon={faJs} /></div>
                <div id="logo"><FontAwesomeIcon icon={faDartLang} /></div>
                <div id="logo"><FontAwesomeIcon icon={faRust} /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export function Etra() {
  return(
    <section className="section mt-6 pl-4">
      <div className=" is-flex is-justify-content-center is-align-items-center mb-6 ">
        <div id="logo-wheel">
          <div id="logo">
            <figure className="image">
              <img src="c-sharp.png" alt="C#" />
            </figure>
          </div>
          <div id="logo">
            <figure className="image">
              <img src="c-plus.png" alt="C#" />
            </figure>
          </div>
          <div id="logo"><FontAwesomeIcon icon={faHtml5} /></div>
          <div id="logo"><FontAwesomeIcon icon={faCss} /></div>
          <div id="logo"><FontAwesomeIcon icon={faJava} /></div>
          <div id="logo"><FontAwesomeIcon icon={faJs} /></div>
          <div id="logo"><FontAwesomeIcon icon={faDartLang} /></div>
          <div id="logo"><FontAwesomeIcon icon={faRust} /></div>
        </div>

        <div id="center-img">
          <figure className="image is-128x128">
            <img src="female-programmer.png" alt="Female Programmer on Laptop" />
          </figure>
        </div>
      </div>
    </section>
  );
}
