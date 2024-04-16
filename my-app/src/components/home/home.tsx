import React, { useState, useEffect } from 'react';
import Img1 from '../../assets/image/home/s1.png';
import Img2 from '../../assets/image/home/img4.jpg';
import Img3 from '../../assets/image/home/moti.png';
import './home.css';
import Work from './work/work';
import Collect from './collect/collect';
import Impact from './impact/impact';
import Testimonials from './testimonials/testimonials';
const Home = () => {
  // State to track the active image index
  const [activeIndex, setActiveIndex] = useState(0);

  // Array of images
  const images = [Img1, Img2];

  // Function to handle previous image navigation
//   const prevImage = () => {
//     setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

  // Function to handle next image navigation
  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Effect to automatically change the image every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Cleanup function to clear the interval when component unmounts
  }, [activeIndex]); // Dependency on activeIndex ensures the interval is reset when the activeIndex changes

  return (
    <div className="carousel-container">
      <div className="slide-img">
        {images.map((image, index) => (
          <div key={index} className={`duration-700 ease-in-out ${index === activeIndex ? '' : 'hidden'}`} data-carousel-item={index === activeIndex ? 'active' : ''}>
            <img src={image} className="absolute block w-full h-full" alt={`Image ${index + 1}`} />
            <div className="overlay">
              <h1>Recycle is easy</h1>
              <button className="pickup-button">Pickup</button>
            </div>
          </div>
        ))}
      </div>
      {/* navigation buttons */}
      <Work/>
      <Collect/>
      <Impact/>
      <Testimonials/>
      <div className='motivation'>
          <img src={Img3} alt="" />
          <div className='mot-info'>
              <h3>Be the change.</h3>
              <h1>Recycel today for a <br /> better tommorrow</h1>
              <button>Pickup Request</button>
          </div>
      </div>
      <div className='contact'>
        <h1>Drop your email here</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, optio!</p>
        <input type="text" placeholder='name*' />
        <input type="text" placeholder='email*' />
        <br />
         <textarea name="" id="" placeholder='massage'></textarea>
        <br />
        <button>Submitt</button>
      </div>
    </div>
  );
};

export default Home;

// {/* <button type="button" className="prev-button" onClick={prevImage}>
// <span>&#8592;</span> {/* Left arrow icon */}
// </button>
// <button type="button" className="next-button" onClick={nextImage}>
// <span>&#8594;</span> {/* Right arrow icon */}
// </button> */}