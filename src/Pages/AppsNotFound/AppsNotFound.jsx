import React from 'react';
import AppNotFoundImage from '/src/assets/App-Error.png'
import { Link } from 'react-router';

const AppsNotFound = () => {
    return (
        <div>
            <div className='flex justify-center'>
                <img src={AppNotFoundImage} alt="" />
            </div>
       
            <h2 className='text-center font-semibold text-4xl mt-2 mb-2'>OPPS!! APP NOT FOUND</h2>
            <p className='text-lg text-[#627382]'>The App you are requesting is not found on our system.  please try another apps</p>
            <Link to='/' className='flex justify-center '>
                <button className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-[#FFFFFF]'>Go Back!</button>
            </Link>
       
        </div>
    );
};

export default AppsNotFound; 