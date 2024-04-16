import React from 'react';
import img1 from '../../assets/image/home/s1.png';
import { useParams } from 'react-router-dom';
import './blog.css';

const Blog = () => {
    const { postId } = useParams(); // Extracting postId from URL

    return (
        <div className='blog'>
            {postId ? (
                // Render detailed blog post content based on postId
                <div>
                    <h1>This is detailed blog post {postId}</h1>
                    {/* Add detailed content here based on the postId */}
                </div>
            ) : (
                // Render default blog content if postId is not present
                <div>
                    <h1>Bhangari Wala blog</h1>

                    <p>
                        We pick up recyclable items from your doorstep and drop them off to be recycled. <br /> All you have to do is:
                    </p>
                    <div className="line">
                        <div className="sec1">
                            <h2>1. Schedule a pickup</h2>
                            <p>Log in or use our app to set up your collection day at your preferred time.</p>
                        </div>
                        <div className="sec2">
                            <h2>2. Pickup from doorstep</h2>
                            <p>Our driver will collect your recyclable items from your doorstep.</p>
                        </div>
                        <div className="sec3">
                            <h2>3. Receive Payment</h2>
                            <p>Your items will be recycled, and you will receive payment.</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Blog;
