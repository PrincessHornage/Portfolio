"use client"; 
import Navbar from "./navbar";
import { Typewriter } from "react-simple-typewriter";

const VideoBackground = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline className="video-bg">
        <source src="/homepage-bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Navbar/>
      <div className="content">
        <h1 className="is-size-1">Osaani Productions</h1>
        <h2 className="is-size-4">
          <Typewriter 
            words={['Design','Develop','Done']}
            loop={5}
            cursor
            cursorStyle="_"
          />
        </h2>
       
      </div>
    </div>
  );
}

export default VideoBackground; 