import React from 'react';
import bannerImage from "/src/assets/hero.png";
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { FaAppStoreIos } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className=''>
    
      <div className='text-center mt-16 md:mt-20 w-11/12 md:w-10/12 mx-auto'>
        <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-[#001931]'>We Build</h2>
        <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mt-4'>
          <span className='text-[#632EE3] mr-2'>Productive</span> Apps
        </h2>

        <p className='text-base sm:text-lg md:text-xl text-[#627382] mt-6 md:mt-10'>
          At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
        </p>
        <p className='text-base sm:text-lg md:text-xl text-[#627382] mt-2'>
          Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>

      
        <div className='flex flex-col sm:flex-row justify-center gap-4 mt-6 md:mt-10'>
          <button className='btn px-4 py-2 flex items-center justify-center gap-2 w-full sm:w-auto'>
            <IoLogoGooglePlaystore></IoLogoGooglePlaystore> Google Play
          </button>
          <button className='btn px-4 py-2 flex items-center justify-center gap-2 w-full sm:w-auto'>
            <FaAppStoreIos></FaAppStoreIos> App Store
          </button>
        </div>

       
        <img className='w-full max-w-150 mx-auto mt-10' src={bannerImage} alt="Hero Banner" />
      </div>

   
      <div className='bg-linear-to-r from-[#632EE3] to-[#9F62F2]  py-16 md:py-20 '>
        <h3 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center'>Trusted by Millions, Built for You</h3>
        <div className='flex flex-col sm:flex-row justify-between mt-8 md:mt-10 w-full sm:w-10/12 mx-auto gap-8'>
          <div className='text-center sm:text-left'>
            <p className='text-sm text-white mb-2'>Total Downloads</p>
            <h4 className='text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-2'>29.6M</h4>
            <p className='text-sm text-white mb-2'>21% more than last month</p>
          </div>
          <div className='text-center sm:text-left'>
            <p className='text-sm text-white mb-2'>Total Reviews</p>
            <h4 className='text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-2'>906K</h4>
            <p className='text-sm text-white mb-2'>46% more than last month</p>
          </div>
          <div className='text-center sm:text-left'>
            <p className='text-sm text-white mb-2'>Active Apps</p>
            <h4 className='text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-2'>132+</h4>
            <p className='text-sm text-white mb-2'>31 more will Launch</p>
          </div>
        </div>
      </div>

     
      <div className='mt-10 md:mt-16 text-center'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#001931]'>Trending Apps</h1>
        <p className='text-sm sm:text-base md:text-lg text-[#627382] mt-2 md:mt-4 mb-5'>
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
    </div>
  );
};

export default Banner;