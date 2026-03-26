import React from 'react';
import downloadImage from '/src/assets/icon-d.png'
import ratingImage from '/src/assets/icon-r.png'
import reviewImage from '/src/assets/icon-review.png'
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';

const AppDetails = () => {
    const {id} =useParams();
    const appId = parseInt(id)
    const data = useLoaderData();
    const singleApp = data.find(app => app.id === appId);
    
   const { title, image, companyName, downloads, ratingAvg,reviews, size, description} = singleApp || {};


   const handleDownload = id => {

    addToStoredDB(id)

   }
   

    return (
        <div className='w-10/12 mx-auto mt-20'>
            <div className='flex gap-10 border-b'>
                <div>
                <img className='h-62 w-62' src={image} alt="" />

            </div>
            <div >
                <div className='border-b pr-200'>
                    <h3 className='text-3xl font-bold'>{title}</h3>
                <p className='text-[#627382] text-lg mt-4 mb-4'>Developed by <span className='text-[#632EE3]'>{companyName}</span> </p>
                </div>

                <div className='flex gap-20 mt-8'>
                    <div>
                        <img src={downloadImage} alt="" />
                        <p className='text-sm text-[#001931] mt-2 mb-2'>Downloads</p>
                        <h4 className='text-3xl font-extrabold'>{downloads}</h4>

                    </div>
                    <div>
                        <img src={ratingImage} alt="" />
                        <p className='text-sm text-[#001931] mt-2 mb-2'>Average Ratings</p>
                        <h4 className='text-3xl font-extrabold'>{ratingAvg}</h4>

                    </div>
                    <div>
                        <img src={reviewImage} alt="" />
                        <p className='text-sm text-[#001931] mt-2 mb-2'>Total Reviews</p>
                        <h4 className='text-3xl font-extrabold'>{reviews}</h4>

                    </div>

                </div>
                <button onClick={() =>handleDownload(id)} className="btn btn-wide mt-10 bg-[#00D390] text-[#FFFFFF] mb-10">Install Now ({size} MB)</button>


            </div>
            </div>

            {/* Description part */}

          <div className='mt-10'>
              <h5 className='text-2xl font-semibold mb-5'>Description</h5>
            <p className='text-lg text-[#627382]'>{description}</p>
          </div>
        </div>
    );
};

export default AppDetails;