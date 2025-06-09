"use client"; 
import React from 'react';
import dynamic from 'next/dynamic';
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar } from "./navbar";
import { Typewriter } from "react-simple-typewriter";
import { faCss, faDartLang, faGithub,  faGitlab, faHtml5, faJava, faJs, faLinkedin, faReact, faRust, faUnity, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { useRef, useState, useEffect, Dispatch, SetStateAction } from "react";
import { FiLock } from "react-icons/fi";
import Link from 'next/link';
import { faCube, faDownload, faLaptopCode, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { ResizeBtns } from './utils/utlis.js'; 
import { ShowSelectedProjs } from './utils/utlis.js';
import { motion } from "framer-motion";
import { } from "react";

const CYCLES_PER_LETTER = 3;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

const Worker = dynamic(
  () => import("@react-pdf-viewer/core").then((mod) => mod.Worker),
  { ssr: false }
);
const Viewer = dynamic(
  () => import("@react-pdf-viewer/core").then((mod) => mod.Viewer),
  { ssr: false }
);

//Slider
const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";
type ToggleOptionsType = "mobile" | "web" | "animation";

//React Components - by Hover.Dev 
const SliderToggle = ({
  selected,
  setSelected,
}: {
  selected: ToggleOptionsType;
  setSelected: Dispatch<SetStateAction<ToggleOptionsType>>;
}) => {

  useEffect(() => {
    ShowSelectedProjs();
  }, [selected]);

  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        data-type="web"
        data-selected={selected === "web"}
        className={`${TOGGLE_CLASSES} ${selected === "web" ? "text-white" : "text-slate-300"}`}
        onClick={() => setSelected("web")}
      >
        <FontAwesomeIcon className="relative z-10 text-lg md:text-sm" icon={faLaptopCode} />
        <span className="relative z-10">Web Apps</span>
      </button>

      <button
        data-type="mobile"
        data-selected={selected === "mobile"}
        className={`${TOGGLE_CLASSES} ${selected === "mobile" ? "text-white" : "text-slate-800"}`}
        onClick={() => setSelected("mobile")}
      >
        <FontAwesomeIcon className="relative z-10 text-lg md:text-sm" icon={faPhoneSquare} />
        <span className="relative z-10">Mobile</span>
      </button>

      <button
        data-type="animation"
        data-selected={selected === "animation"}
        className={`${TOGGLE_CLASSES} ${selected === "animation" ? "text-white" : "text-slate-300"}`}
        onClick={() => setSelected("animation")}
      >
        <span className="relative z-10">3D Animation</span>
      </button>
 
      <div className="absolute inset-0 z-0 flex">
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
          animate={{
            x: selected === "web" ? "0%" : selected === "mobile" ? "100%" : "200%" ,
          }}
        />
      </div>
    </div>
  );
};
//Creates encryption button styling effect
const EncryptButton = ({btnPhrase} : {btnPhrase: string;}) => {
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
//Creates Bubble Text Effect 
const BubbleText = ({textPhrase} : {textPhrase: string}) => {
  useEffect(() => {
    const spans = document.querySelectorAll(
      ".hover-text span"
    ) as NodeListOf<HTMLSpanElement>;

    spans.forEach((span) => {
      span.addEventListener("mouseenter", function (this: typeof span) {
        this.style.fontWeight = "900";
        this.style.color = "rgb(238, 242, 255)";

        const leftNeighbor = this.previousElementSibling as HTMLSpanElement;
        const rightNeighbor = this.nextElementSibling as HTMLSpanElement;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "500";
          leftNeighbor.style.color = "rgb(199, 210, 254)";
        }
        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "500";
          rightNeighbor.style.color = "rgb(199, 210, 254)";
        }
      });

      span.addEventListener("mouseleave", function (this: typeof span) {
        this.style.fontWeight = "100";
        this.style.color = "rgb(165, 180, 252)";

        const leftNeighbor = this.previousElementSibling as HTMLSpanElement;
        const rightNeighbor = this.nextElementSibling as HTMLSpanElement;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "100";
          leftNeighbor.style.color = "rgb(165, 180, 252)";
        }

        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "100";
          rightNeighbor.style.color = "rgb(165, 180, 252)";
        }
      });
    });
  }, []);

  return (
    <h2 className="hover-text text-center text-5xl font-thin text-indigo-300">
      <Text>{textPhrase}</Text>
    </h2>
  );
};
const Text = ({ children }: { children: string }) => {
  return (
    <>
      {children.split("").map((child, idx) => (
        <span
          style={{
            transition: "0.35s font-weight, 0.35s color",
          }}
          key={idx}
        >
          {child}
        </span>
      ))}
    </>
  );
};
//Displays large background video over screen 
export function VideoBackground({videoSrc}: {videoSrc: string;}) {
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
                  <figure className="image is-64x64">
                    <img src="c-sharp.png" alt="C#"/>
                  </figure>
                </div>
                <div id="logo">
                  <figure className="image is-64x64">
                    <img src="c-plus.png" alt="C#" />
                  </figure>
                </div>
                <div id="logo"><FontAwesomeIcon icon={faHtml5} /></div>
                <div id="logo"><FontAwesomeIcon icon={faCss} /></div>
                <div id="logo"><FontAwesomeIcon icon={faJava} /></div>
                <div id="logo"><FontAwesomeIcon icon={faJs} /></div>
                <div id="logo"><FontAwesomeIcon icon={faDartLang} /></div>
                <div id="logo"><FontAwesomeIcon icon={faReact} /></div>
                <div id="logo"><FontAwesomeIcon icon={faVuejs} /></div>
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
              <div className="is-flex is-justify-content-center is-align-items-center">
                <div id="tool-logo-wheel">
                  <div id="tools-logo">
                    <figure className="image is-64x64">
                      <img src="photoshop.png" alt="Adobe Photoshop" />
                    </figure>
                  </div>
                  <div id="tools-logo">
                    <figure className="image is-64x64">
                      <img src="after-effects.png" alt="Adobe After Effects" />
                    </figure>
                  </div>
                  <div id="tools-logo"><FontAwesomeIcon icon={faUnity} /></div>
                  <div id="tools-logo"><FontAwesomeIcon icon={faGitlab} /></div>
                  <div id="tools-logo"><FontAwesomeIcon icon={faGithub} /></div>
                  <div id="tools-logo">
                    <figure className="image is-64x64">
                      <img src="visual-studio.png" alt="Visual Studios" />
                    </figure>
                  </div>
                  <div id='tools-logo'>
                    <figure className='image is-128x128'>
                      <img src="arcGIS-logo.png" alt="ArcGIS" />
                    </figure>
                  </div>
                  <div id='tools-logo'>
                    <figure className="image">
                      <img src="axure-logo.png" alt="Axure" />
                    </figure>
                  </div>
                  <div id='tools-logo'>
                    <figure className="image">
                      <img src="maya-logo.png" alt="Maya" />
                    </figure>
                  </div>
                  <div id="center-img-2">
                    <figure className="image is-128x128">
                      <img src="tools-and-tech.png" alt="Eletronics" />
                    </figure>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      <hr/>
      </section>
    </div>
  );
}
export function Resume() {
  return(
     <section className="section">
      <h1 className="title has-text-centered">Resume</h1>
      <div id="pdfContainer" className='container'>
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`} />
        <Viewer 
        fileUrl="/Resume.pdf" 
        defaultScale={1.5}
        />
      </div>
      <div className="buttons is-flex is-justify-content-center mt-6" id="resumeButtons">
          <button className="button is-large is-rounded has-text-centered" >
            <span className="icon-text">
              <span className="icon"><FontAwesomeIcon icon={faDownload} /></span>
              <span>Download Resume</span>              
            </span>
            </button>
        </div>
    </section>
  )
}
export function Projects(){
  useEffect(() => {
    // Run ResizeBtns function when the component is mounted
    ResizeBtns();

    // Add event listener to resize the buttons on window resize
    const handleResize = () => {
      ResizeBtns();
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const [selected, setSelected] = useState<ToggleOptionsType>("mobile");
  
  return(
    <div className="section">
      <h1 className="title has-text-centered">Quests and Creations</h1>
      <h3 className="subtitle has-text-centered">From code to controller—play my work</h3>
      
      <div className="grid h-fit-content place-content-center px-4 is-flex is-justify-content-center is-align-items-center">
        <SliderToggle selected={selected} setSelected={setSelected} />
      </div>

      <div className='columns'>
        <div className="column is-flex is-flex-direction-column is-align-items-center">
          {/* Anime Radar */}
          <WebProjectPreview 
            imageURL={'anime.jpg'}
            altText={'Anime Characters'}
            demoURL={'https://people.rit.edu/pth3035/330/hornage-p1-starter/home.html'}
            gitHubURL={''} 
            title={''} 
            description={''}
          />
          {/* Dodge or Die */}
          <WebProjectPreview 
            imageURL={'dodge-or-die.jpg'}
            altText={'Dodgeball Academia'}
            demoURL={'https://people.rit.edu/pth3035/330/project-2/home.html'}
            gitHubURL={''} 
            title={''} 
            description={''}          
          />
          <MobileProjectPreview 
            imageURL={'design-to-spec.png'} 
            altText={'Minecraft Website Mockup Homepage'} 
            demoURL={''} gitHubURL={''} 
            title={'Design to Spec'} 
            descripton={'A Dart-based project where I reconstructed an app based on images provided'}
          />
            
          </div>
        <div className="column is-flex is-flex-direction-column is-align-items-center">
          {/*Feeding Fido*/}
          <WebProjectPreview 
            imageURL={'shiba-inu.jpg'}
            altText={'Shiba Inu holding a bone'}
            demoURL={''}
            gitHubURL={'https://github.com/PrincessHornage/JS-Projects/tree/main/Feeding%20Fido'} 
            title={''} 
            description={''}          />

          {/*Design to Spec*/}
          <WebProjectPreview 
            imageURL={'shiba-inu.jpg'}
            altText={'Shiba Inu holding a bone'}
            demoURL={''}
            gitHubURL={'https://github.com/PrincessHornage/JS-Projects/tree/main/Feeding%20Fido'} 
            title={''} 
            description={''}
          />

          <MobileProjectPreview 
          imageURL={'design-to-spec.png'} 
          altText={'Minecraft Website Mockup Homepage'} 
          demoURL={''} 
          gitHubURL={''} 
          title={'GIF Finder'} 
          descripton={'A Dart-based app that allows users to search and view GIFS'}/>

        </div>
      </div>
    </div>
  )
}
//Webpage preview component for web-based projects 
export function WebProjectPreview(
  {imageURL, altText, demoURL, gitHubURL, title, description}: {imageURL:string, altText: string, demoURL: string, gitHubURL: string, title: string, description: string}
){ 
  return(
    <div id='web-project'>
      <figure className='image'>
        <img src="laptop.png" alt="Laptop" id="laptop-img" />
        <figure className="image has-background-primary" id="anime-radar-container">
          <img src={imageURL} alt={altText} id="img-preview" />
        </figure>
      </figure>

      <div className="buttons is-flex is-justify-content-center">
        <Link href={demoURL}>
          <button className="button is-rounded is-medium" id='project-btn'>
            <span>Demo</span>
            <span className="icon is-small">
              <FontAwesomeIcon icon={faLaptopCode} />
            </span>
          </button>
        </Link>
        
        <Link href={gitHubURL}>
          <button className="button is-rounded is-medium" id='project-btn'>
            <span>GitHub</span>
            <span className="icon is-small">
              <FontAwesomeIcon icon={faGithub} />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
//Mobile preview component for mobile-based projects
export function MobileProjectPreview({imageURL, altText, demoURL, gitHubURL, title, descripton}:{imageURL:string, altText: string, demoURL: string, gitHubURL: string, title: string, descripton: string}){
  return(
    <div id='mobile-project'>
      <figure className="image" id='iPhone-container'>
        <img src="iPhone.png" alt="iPhone" id="iPhone-img" />
        <figure className="image" id="design-to-spec-container">
          <img src={imageURL} alt={altText} id="iPhone-img-preview" />
        </figure>
        <span id="mobile-title-text" className='has-background-primary'>
          <BubbleText textPhrase={title} />
        </span>
        <span id="mobile-description-text" className='has-background-primary has-text-white p-4'>{descripton}</span>
      </figure>

      <div className="buttons is-flex is-justify-content-center">
        <Link href={demoURL}>
          <button className="button is-rounded is-medium" id='project-btn'>
            <span>Demo</span>
            <span className="icon is-small">
              <FontAwesomeIcon icon={faLaptopCode} />
            </span>
          </button>
        </Link>
        <Link href={gitHubURL}>
          <button className="button is-rounded is-medium" id='project-btn'>
            <span>GitHub</span>
            <span className="icon is-small">
              <FontAwesomeIcon icon={faGithub} />
            </span>
          </button>
        </Link>
      </div>
    </div>
  )
}