import React from 'react';
import img0 from '../../assets/image/blog/free-photo-of-legs-of-person-in-jeans-walking-on-beach.jpeg';
import img2 from '../../assets/image/blog/glass-jar-food-storing.jpg'; 
import img3 from '../../assets/image/blog/plastic-free-beauti-products.jpeg';
import img4 from '../../assets/image/blog/food-waste.png';
import img5 from '../../assets/image/blog/pexels-mali-maeder-802221.jpg';
import { useParams } from 'react-router-dom';

const Blog = () => {
    const { postId } = useParams(); 

    return (
        <div className='blog'>
            {postId ? (
                <div>

                </div>
            ) : (
                <div>
                    <div>
                    <img src={img5} className='relative w-full md:h-[650px]' alt="sss" />
                    <h3 className='md:absolute text-5xl font-bold top-80 left-20 text-white'>Blog</h3>
                </div>
               <div className='pt-20 pb-20'>  <p className='text-2xl font-bold text-center max-w-[1200px] mx-auto'>We are here to make recycling easy and accessible for everyone. We help households and businesses take small, smart steps in the right direction and keep valuable resources in circulation.</p></div>
                    <div className='pt-20 pb-20'>
                    <div className="line">
                        <div className="sec1">
                            <h2>Opt for Glass Jars Over Plastic</h2>
                            <img src={img2} alt="" className="w-full md:w-auto md:h-auto" /> 
                            <p className="text-lg">Your content here...</p>
                        </div>
                        <div className="sec2">
                            <h2>Plastic Free Beauty Products</h2>
                            <img src={img3} alt="" className="w-full md:w-auto md:h-auto" />
                            <p className="text-lg">Your content here...</p>
                        </div>
                        <div className="sec3">
                            <h2>Reducing Food Waste</h2>
                            <img src={img4} alt="" className="w-full md:w-auto md:h-auto" />
                            <p className="text-lg">Your content here...</p>
                        </div>
                    </div>
                    </div>
                    <div>
                    <img src={img0} className='relative w-full md:h-[650px]' alt="sss" />
                    <h3 className='md:absolute text-5xl font-bold top-80 left-20 text-white'>Blog</h3>
                </div>
                </div>
                
            )}
        </div>
    );
}

export default Blog;
