import React from 'react';
import img0 from '../../assets/image/blog/sea-recycle.jpeg';
import img2 from '../../assets/image/blog/glass-jar-food-storing.jpg'; 
import img3 from '../../assets/image/blog/plastic-free-beauti-products.jpeg';
import img4 from '../../assets/image/blog/food-waste.png';
import { useParams } from 'react-router-dom';
import './blog.css';

const Blog = () => {
    const { postId } = useParams(); 

    return (
        <div className='blog'>
            {postId ? (
               
                <div>
              <img src={img0} className='relative w-full md:h-[650px]' alt="sss" />
                <h3 className='md:absolute text-5xl font-bold top-80 left-20 text-white'>Blog</h3>
                </div>
                
            ) : (
                 
                <div>
                    <div className="line">
                        <div className="sec1">
                            <h2>Opt for Glass Jars Over Plastic</h2>
                            <img src={img2} alt="" /> 
                            <p></p>
                        </div>
                        <div className="sec2">
                            <h2>Plastic Free Beauty Products</h2>
                            <img src={img3} alt="" />
                            
                            <p></p>
                        </div>
                        <div className="sec3">
                            <h2>Reducing food waste</h2>
                            <img src={img4} alt="" />
                            <p></p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Blog;
