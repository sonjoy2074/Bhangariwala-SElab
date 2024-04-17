import React from 'react';
import img0 from '../../assets/image/blog/footer.jpeg';
import img2 from '../../assets/image/blog/glass-jar-food-storing.jpg'; 
import img3 from '../../assets/image/blog/plastic-free-beauti-products.jpeg';
import img4 from '../../assets/image/blog/food-waste.png';
import img5 from '../../assets/image/blog/planet.webp';
import img6 from '../../assets/image/blog/glass-jar-food.jpeg';
import img7 from '../../assets/image/blog/e-waste.jpeg';
import img8 from '../../assets/image/blog/empty-cans.jpeg';
import img9 from '../../assets/image/blog/candle-container.webp';
import img10 from '../../assets/image/blog/business.webp';

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
               <div className='pt-20 pb-20'>  <p className='text-2xl font-bold text-center max-w-[1200px] mx-auto'> Collecting Waste to Foster Sustainable Practices, Promote Environmental Conservation, and Create a Greener Future for Generations to Come</p></div>
                    <div className='pt-20 pb-20'>
                    <div className="line pb-20">
                        <div className="sec1">
                            <h2>Opt for Glass Jars Over Plastic</h2>
                            <img src={img2} alt="" className="w-full md:w-auto md:h-auto" /> 
                            <p className="text-lg text-wrap  pt-4">By choosing glass, you contribute to reducing <br /> plastic waste and preserving the environment for <br /> future generations, all while enjoying the benefits of <br /> safer and more durable packaging solutions.</p>
                        </div>
                        <div className="sec2">
                            <h2>Plastic Free Beauty Products</h2>
                            <img src={img3} alt="" className="w-full md:w-auto md:h-auto" />
                            <p className="text-lg pt-4">Choosing plastic-free beauty products contributes to <br /> environmental sustainability and reduces plastic <br /> pollution. Embrace eco-friendly alternatives for healthier <br /> skin and a cleaner planet.</p>
                        </div>
                        <div className="sec3">
                            <h2>Reducing Food Waste</h2>
                            <img src={img4} alt="" className="w-full md:w-auto md:h-auto" />
                            <p className="text-lg pl-4 pt-4">Taking steps to reduce food waste is essential for <br /> sustainability. By mindful shopping, meal planning, <br /> and composting, we can minimize waste and preserve <br /> resources for future generations.</p>
                        </div>
                    </div>
                    {/* //Second line */}
                    <div className='grid grid-cols-1 items-center gap-5 md:grid-cols-2 w-full md:h-[600px] max-w-[1300px] mx-auto mt-20 mb-80'>
                <div className='col-span-1'>
                    <h3 className='text-5xl font-bold text-[#001A70] '>Opt for Glass Jars Over Plastic</h3>
                    <p className='text-2xl mt-7'>Choosing glass jars over plastic is a sustainable decision with significant environmental benefits. Glass containers are durable, reusable, and recyclable, making them a safer option for food storage. Unlike plastic, glass does not leach harmful chemicals into your food. By opting for glass, you help reduce plastic pollution and minimize your carbon footprint. This small change in packaging choice can have a big impact on the health of our planet and future generations.</p>
                    <p className='text-2xl mt-7'> Glass is non-toxic, durable, and endlessly recyclable, offering a safer and more sustainable option for storing food. By embracing glass packaging, you actively contribute to reducing plastic waste, safeguarding the environment, and fostering a healthier future for all. This simple switch holds immense potential to protect our planet's delicate ecosystems and preserve natural resources for generations to come.</p>
                </div>
                <div className='col-span-1'>
                    <img src={img6} alt="" />
                </div>
            </div>
                    {/* //third line */}
                    <div className="line pb-20 pt-40">
                        <div className="sec1">
                            <h2>A guide to reducing E-waste in business</h2>
                            <img src={img7} alt="" className="w-full md:w-auto md:h-auto" /> 
                            <p className="text-lg text-wrap  pt-4 pl-4">Efficient e-waste management in business minimizes <br /> environmental impact and optimizes resource usage,<br /> fostering sustainability and responsible <br />  electronic disposal  practices for a greener future.</p>
                        </div>
                        <div className="sec2">
                            <h2>Return Your bottle and cans for credits</h2>
                            <img src={img8} alt="" className="w-full md:w-auto md:h-auto" />
                            <p className="text-lg pt-4 pl-6">Returning bottles and cans promotes recycling, <br /> conserves resources, and reduces waste, <br /> contributing to a cleaner environment and a more <br /> sustainable future for all.</p>
                        </div>
                        <div className="sec3">
                            <h2>  Spakle hope with empty candle container</h2>
                            <img src={img9} alt="" className="w-full md:w-auto md:h-auto" />
                            <p className="text-lg pl-4 pt-4">Taking steps to reduce food waste is essential for <br /> sustainability. By mindful shopping, meal planning, <br /> and composting, we can minimize waste and preserve <br /> resources for future generations.</p>
                        </div>
                    </div>
                    {/* //fourth line */}
                    <div className='grid grid-cols-1 items-center gap-5 md:grid-cols-2 w-full md:h-[600px] max-w-[1300px] mx-auto mt-20 mb-80'>
                <div className='col-span-1'>
                    <h3 className='text-5xl font-bold text-[#001A70] '>A guide to Reducing E-waste in business</h3>
                    <p className='text-2xl mt-7'>Reducing e-waste in business involves implementing comprehensive strategies to minimize electronic equipment disposal. This guide entails initiatives like extending product lifespan through maintenance, upgrading, and refurbishment. Additionally, adopting circular economy principles encourages the reuse and repurposing of electronics. Proper disposal methods, such as certified recycling programs, ensure environmentally responsible handling of end-of-life devices</p>
                    <p className='text-2xl mt-7'>This comprehensive guide emphasizes strategies such as extending product lifespan through regular maintenance, upgrades, and refurbishment initiatives. Implementing circular economy principles promotes the reuse and repurposing of electronics, while ensuring proper disposal through certified recycling programs guarantees environmentally responsible handling of end-of-life devices.</p>
                </div>
                <div className='col-span-1'>
                    <img src={img10} alt="" />
                </div>
            </div>
                    {/* //firth line */}

                    
                    
                    <img src={img0} className='relative w-full md:h-[650px] pt-20 pb-0' alt="sss" />
                </div>
                </div>
                
            )}
        </div>
    );
}

export default Blog;
