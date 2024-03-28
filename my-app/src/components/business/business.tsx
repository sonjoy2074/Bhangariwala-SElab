// Business.tsx
import React, { useState } from 'react';
import "./business.css";
import Img1 from '../../assets/image/business/img1.png';
import Img2 from '../../assets/image/business/img2.png';

const Business: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrev = () => {
    setActiveIndex(prevIndex => (prevIndex === 1 ? 5 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex(prevIndex => (prevIndex === 5 ? 1 : prevIndex + 1));
  }

  return (
    <div className="business-wrapper">
      <div className="business-container">
        <div className="first-container" style={{ background: "#0099FF" }}>
          <div className="circular-images">
            <img src={Img1} alt="First" className="larger-image" />
            <img src={Img2} alt="Second" className="smaller-image" />
          </div>
          <div className="text-container">
            <h1>RecycleSmart is the easy way to accelerate your businesses’ sustainability journey.</h1>
            <h3>We enable businesses to reduce landfill and keep valuable resources in circulation.</h3>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="svg-curve" transform="rotate(180)">
        <path fill="#0099ff" fillOpacity="1" d="M0,96L60,85.3C120,75,240,53,360,80C480,107,600,181,720,213.3C840,245,960,235,1080,208C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
      <div className="business-container">
        <div className="second-container">
          <div className="circular-images-second">
            <img src={Img1} alt="First" className="larger-image-second" />
          </div>
          <div className="text-container-second">
            <h1 style={{ textAlign: 'center', marginTop: "-5%", marginBottom: "4%" }}><strong> How it works</strong></h1>
            <h1>Step one: set up your area</h1>
            <h3>Using a RecycleSmart bin or your own bin, set up a collection area for the resource streams you want to collect. Every day, place your items in the correct bin.</h3>
          </div>
        </div>
        <div className="second-container">
          <div className="circular-images-second">
            <img src={Img1} alt="First" className="larger-image-second" />
          </div>
          <div className="text-container-second">
            <h1>Step two: schedule a Power Pickup</h1>
            <h3>Log in or use our app to book your pickup with just a few clicks. Select the quantity you want picked up and a pickup date that suits you.</h3>
          </div>
        </div>
        <div className="second-container">
          <div className="circular-images-second">
            <img src={Img1} alt="First" className="larger-image-second" />
          </div>
          <div className="text-container-second">
            <h1>Step three: Leave at collection point</h1>
            <h3>On collection day, make sure the bins are easily accessible and ready to be collected by our drivers. You can add collection notes for our drivers in the app to make the process as smooth as possible.</h3>
          </div>
        </div>

        <h1 style={{ textAlign: 'center', fontSize: 45, marginTop: '5%', color: 'hsl(226, 100%, 22%)', fontWeight: 'bold' }}>Let’s talk bins</h1>
        <br />
        <p style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>When setting up your collection point, you can choose from the following range of bins from our third party bin providers, or simply use your own.

        </p>
        <br />
        <br />
        <div className="rectangularCard">
          <div className="card">
            <div className="rectangularCard-images">
              <img src={Img1} alt="First" className="larger-image-rectangularCard" />
            </div>
            <h1 style={{ textAlign: 'center', fontSize: 36, marginTop: '5%', fontWeight: 'bold' }}>60L bin</h1>
            <br />
            <h3 style={{ textAlign: 'center', fontSize: 18, marginLeft: '5%', marginRight: '5%', fontWeight: 'bold' }}>
              Suitable for office spaces and shops</h3>
            <br />
            <h3 style={{ textAlign: 'center', fontSize: 18, marginLeft: '5%', marginRight: '5%', fontWeight: 'bold' }}>
              Buy from EcoBin from $49.50

            </h3>

            <div className="button-container">
              <button>Enquire Now</button>
            </div>
          </div>



          <div className="card">
            <div className="rectangularCard-images">
              <img src={Img1} alt="First" className="larger-image-rectangularCard" />
            </div>
            <h1 style={{ textAlign: 'center', fontSize: 36, marginTop: '5%', fontWeight: 'bold' }}>60L bin</h1>
            <br />
            <h3 style={{ textAlign: 'center', fontSize: 18, marginLeft: '5%', marginRight: '5%', fontWeight: 'bold' }}>
              Suitable for office spaces and shops</h3>
            <br />
            <h3 style={{ textAlign: 'center', fontSize: 18, marginLeft: '5%', marginRight: '5%', fontWeight: 'bold' }}>
              Buy from EcoBin from $49.50

            </h3>

            <div className="button-container">
              <button>Enquire Now</button>
            </div>
          </div>

          <div className="card">
            <div className="rectangularCard-images">
              <img src={Img1} alt="First" className="larger-image-rectangularCard" />
            </div>
            <h1 style={{ textAlign: 'center', fontSize: 36, marginTop: '5%', fontWeight: 'bold' }}>60L bin</h1>
            <br />
            <h3 style={{ textAlign: 'center', fontSize: 18, marginLeft: '5%', marginRight: '5%', fontWeight: 'bold' }}>
              Suitable for office spaces and shops</h3>
            <br />
            <h3 style={{ textAlign: 'center', fontSize: 18, marginLeft: '5%', marginRight: '5%', fontWeight: 'bold' }}>
              Buy from EcoBin from $49.50

            </h3>

            <div className="button-container">
              <button>Enquire Now</button>
            </div>
          </div>

          <div className="card">
            <div className="rectangularCard-images">
              <img src={Img1} alt="First" className="larger-image-rectangularCard" />
            </div>
            <h1 style={{ textAlign: 'center', fontSize: 36, marginTop: '5%', fontWeight: 'bold' }}>60L bin</h1>
            <br />
            <h3 style={{ textAlign: 'center', fontSize: 18, marginLeft: '5%', marginRight: '5%', fontWeight: 'bold' }}>
              Suitable for office spaces and shops</h3>
            <br />
            <h3 style={{ textAlign: 'center', fontSize: 18, marginLeft: '5%', marginRight: '5%', fontWeight: 'bold' }}>
              Buy from EcoBin from $49.50

            </h3>

            <div className="button-container">
              <button>Enquire Now</button>
            </div>
          </div>

        </div>
        <br />
        <br />
        <h1 style={{ textAlign: 'center', fontSize: 45, marginTop: '5%', color: 'hsl(226, 100%, 22%)', fontWeight: 'bold' }}>What we collect
        </h1>
        <br />
        <br />
        <div className="circularCard">

          <div className="Circular_card">
            <div className="circularCard-images">
              <img src={Img1} alt="First" className="larger-image-circularCard" />
            </div>
            <h1 style={{ textAlign: 'center', fontSize: 36, marginTop: '5%', fontWeight: 'bold' }}>Soft Plastics
            </h1>
            <br />
            <h3 style={{ textAlign: 'center', fontSize: 14, marginLeft: '13%', marginRight: '13%', fontWeight: 'bold' }}>
              Flexible plastic than can be easily scrunched. E.g. baled soft plastics and pallet wrap.</h3>
            <br />

            <button><a href="#" style={{ textAlign: 'center', color: 'black', fontSize: 18, fontWeight: 'bold' }}> <u> Find Out More</u></a></button>

          </div>

          <div className="Circular_card">
            <div className="circularCard-images">
              <img src={Img1} alt="First" className="larger-image-circularCard" />
            </div>
            <h1 style={{ textAlign: 'center', fontSize: 36, marginTop: '5%', fontWeight: 'bold' }}>Soft Plastics
            </h1>
            <br />
            <h3 style={{ textAlign: 'center', fontSize: 14, marginLeft: '13%', marginRight: '13%', fontWeight: 'bold' }}>
              Flexible plastic than can be easily scrunched. E.g. baled soft plastics and pallet wrap.</h3>
            <br />

            <button><a href="#" style={{ textAlign: 'center', color: 'black', fontSize: 18, fontWeight: 'bold' }}> <u> Find Out More</u></a></button>

          </div>


          <div className="Circular_card">
            <div className="circularCard-images">
              <img src={Img1} alt="First" className="larger-image-circularCard" />
            </div>
            <h1 style={{ textAlign: 'center', fontSize: 36, marginTop: '5%', fontWeight: 'bold' }}>Soft Plastics
            </h1>
            <br />
            <h3 style={{ textAlign: 'center', fontSize: 14, marginLeft: '13%', marginRight: '13%', fontWeight: 'bold' }}>
              Flexible plastic than can be easily scrunched. E.g. baled soft plastics and pallet wrap.</h3>
            <br />

            <button><a href="#" style={{ textAlign: 'center', color: 'black', fontSize: 18, fontWeight: 'bold' }}> <u> Find Out More</u></a></button>

          </div>



          <div className="Circular_card">
            <div className="circularCard-images">
              <img src={Img1} alt="First" className="larger-image-circularCard" />
            </div>
            <h1 style={{ textAlign: 'center', fontSize: 36, marginTop: '5%', fontWeight: 'bold' }}>Soft Plastics
            </h1>
            <br />
            <h3 style={{ textAlign: 'center', fontSize: 14, marginLeft: '13%', marginRight: '13%', fontWeight: 'bold' }}>
              Flexible plastic than can be easily scrunched. E.g. baled soft plastics and pallet wrap.</h3>
            <br />

            <button><a href="#" style={{ textAlign: 'center', color: 'black', fontSize: 18, fontWeight: 'bold' }}> <u> Find Out More</u></a></button>

          </div>
        </div>
        <h1 style={{ textAlign: 'center', fontSize: 45, marginTop: '5%', color: 'hsl(226, 100%, 22%)', fontWeight: 'bold' }}>What our clients say

        </h1>
        <br />
     
        <div id="custom-controls-gallery" className="relative w-full" data-carousel="slide">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {/* {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} className={`duration-700 ease-in-out ${activeIndex === index ? '': 'hidden'}`} data-carousel-item={activeIndex === index ? 'active' : ''}>
              <img src={`https://flowbite.s3.amazonaws.com/docs/gallery/square/image-${index}.jpg`} className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
            </div>
          ))} */}

           <div className="flex">
            {[Img1, Img1,Img2,Img1,Img2,Img1].map((image, index) => (
              <div key={index} className={`duration-700 ease-in-out ${activeIndex === index ? '' : 'hidden'}`} data-carousel-item={activeIndex === index ? 'active' : ''}>
                <img src={image} className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center pt-4">
          <button type="button" className="flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev onClick={handlePrev}>
            <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
              <svg className="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button type="button" className="flex justify-center items-center h-full cursor-pointer group focus:outline-none" data-carousel-next onClick={handleNext}>
            <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
              <svg className="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
        <br />
        <br /><br />
        <br />
      </div>
    </div>
  );
};

export default Business;
