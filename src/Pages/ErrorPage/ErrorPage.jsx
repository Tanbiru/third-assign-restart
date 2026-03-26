import React from 'react';
import ErrorImage from '/src/assets/error-404.png'

const ErrorPage = () => {
    return (
        <div>
            
            <div   className="mt-20 flex justify-center items-center min-h-[60vh]">
                <img src={ErrorImage} alt="" />
            </div>

            <div className='text-center'>
                <h2 className='text-4xl font-semibold'>Oops, page not found!</h2>
                <p className='mt-5 text-[#627382] text-lg'>The page you are looking for is not available.</p>
                <button className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-[#FFFFFF] mt-3'>Go Back!</button>
            </div>
        </div>

        


    );
};

export default ErrorPage;