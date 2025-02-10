"use client"; 
import React, {useState, useEffect} from "react"; 

const slideShowContent = ["programmer.png", "code.png", "done.png"];

const PlaySlideShow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slideShowContent.length);
      }, 4000); // Change slide every 2 seconds
  
      return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);


    return (
        <div id="slideshow-container">
          {slideShowContent.map((src, index) => (
            <div
              key={index}
              className={`slide ${index === currentIndex ? "active" : "hidden"}`}
            >
              <figure className="image">
                <img src={src} alt={`Slide ${index + 1}`} />
              </figure>
            </div>
          ))}
        </div>
      );
}

export default PlaySlideShow; 