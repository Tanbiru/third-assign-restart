import React from 'react';

import bannerImage from "/src/assets/hero.png"
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { FaAppStoreIos } from 'react-icons/fa';

const Banner = () => {
    return (
        <div>
            <div>
                <h2 className='flex justify-center text-[#001931] text-6xl font-bold mt-20'>We Build</h2>

            <h2 className='flex justify-center text-6xl font-bold mt-4'> <span className='text-[#632EE3] mr-2'>Productive</span> Apps</h2>

            <p className='flex justify-center mt-10 text-[#627382] text-xl'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. </p>
            <p className='flex justify-center text-[#627382] text-xl mt-2'>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>


            <div className='flex justify-center mt-10'>
                <button className='btn mr-5'> <IoLogoGooglePlaystore></IoLogoGooglePlaystore> Google Play</button>
            <button className='btn'><FaAppStoreIos></FaAppStoreIos> App store</button>
            </div>

            <img className='w-150 mx-auto mt-10' src={bannerImage} alt="" />
            </div>

            <div className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] pt-20'>
                <h3 className='font-bold text-5xl text-[#FFFFFF] flex justify-center'>Trusted by Millions, Built for You</h3>

             <div className='flex justify-between w-8/12 mx-auto mt-10 pb-16'>
                <div>
                    <p className='text-sm text-[#FFFFFF] mb-5'>Total Downloads</p>
                    <h4 className='text-6xl text-[#FFFFFF] mb-5 font-extrabold'>29.6M</h4>
                    <p className='text-sm text-[#FFFFFF] mb-5'>21% more than last month</p>
 
                 </div>
                 <div>
                    <p className='text-sm text-[#FFFFFF] mb-5'>Total Reviews</p>
                    <h4 className='text-6xl text-[#FFFFFF] mb-5 font-extrabold'>906K</h4>
                    <p className='text-sm text-[#FFFFFF] mb-5'>46% more than last month</p>

                 </div>
                 <div>
                    <p className='text-sm text-[#FFFFFF] mb-5'>Active Apps</p>
                    <h4 className='text-6xl text-[#FFFFFF] mb-5 font-extrabold'>132+</h4>
                    <p className='text-sm text-[#FFFFFF] mb-5'>31 more will Launch</p>

                 </div>
             </div>

            </div>

                 
          
        </div>
        
    );
};

export default Banner;