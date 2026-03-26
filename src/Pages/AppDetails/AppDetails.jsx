import React from 'react';
import downloadImage from '/src/assets/icon-d.png';
import ratingImage from '/src/assets/icon-r.png';
import reviewImage from '/src/assets/icon-review.png';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppDetails = () => {
  const {id} = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();
  const singleApp = data.find(app => app.id === appId);

  const { title, image, companyName, downloads, ratingAvg, reviews, size, description } = singleApp || {};

  const handleDownload = id => {
    const success = addToStoredDB(id);
    if (success) {
      toast.success(`Download completed: ${title}`);
    } else {
      toast.info(`Already downloaded: ${title}`);
    }
  };

  return (
    <div className='w-11/12 md:w-10/12 mx-auto mt-10 md:mt-20'>
    
      <div className='flex flex-col lg:flex-row gap-8 lg:gap-10 border-b pb-10'>
      
        <div className='shrink-0 mx-auto lg:mx-0'>
          <img className='w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain' src={image} alt={title} />
        </div>

    
        <div className='flex-1'>
          <div className='border-b pb-4'>
            <h3 className='text-2xl sm:text-3xl  md:text-4xl font-bold'>{title}</h3>
            <p className='text-[#627382]  text-base sm:text-lg mt-3 mb-3'>
              Developed by <span className='text-[#632EE3]'>{companyName}</span>
            </p>
          </div>

        
          <div className='flex flex-col sm:flex-row justify-between sm:justify-start gap-6 sm:gap-20 mt-6'>
            <div className='flex flex-col items-center sm:items-start'>
              <img src={downloadImage} alt="Downloads" className='w-10 h-10 sm:w-12 sm:h-12' />
              <p className='text-sm text-[#001931] mt-2 mb-1'>Downloads</p>
              <h4 className='text-2xl sm:text-3xl font-extrabold'>{downloads}</h4>
            </div>
            <div className='flex flex-col items-center sm:items-start'>
              <img src={ratingImage} alt="Rating" className='w-10 h-10 sm:w-12 sm:h-12' />
              <p className='text-sm text-[#001931] mt-2 mb-1'>Average Ratings</p>
              <h4 className='text-2xl sm:text-3xl font-extrabold'>{ratingAvg}</h4>
            </div>
            <div className='flex flex-col items-center sm:items-start'>
              <img src={reviewImage} alt="Reviews" className='w-10 h-10 sm:w-12 sm:h-12' />
              <p className='text-sm text-[#001931] mt-2 mb-1'>Total Reviews</p>
              <h4 className='text-2xl sm:text-3xl font-extrabold'>{reviews}</h4>
            </div>
          </div>

     
          <div className='mt-6 sm:mt-10'>
            <button 
              onClick={() => handleDownload(id)} 
              className='btn w-full sm:w-auto bg-[#00D390] text-white px-6 py-3 mt-6'
            >
              Install Now ({size} MB)
            </button>
          </div>
        </div>
      </div>

      
      <div className='mt-8 sm:mt-10'>
        <h5 className='text-xl sm:text-2xl font-semibold mb-4'>Description</h5>
        <p className='text-base sm:text-lg text-[#627382]'>{description}</p>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default AppDetails;