import React, { Suspense } from 'react';
import AppCard from '../AppCard/AppCard';

const AppsCard = ({data}) => {

    return (
        <div className='mt-20 w-10/12 mx-auto'>
            <h1 className='text-5xl text-center text-[#001931] font-bold'>Trending Apps</h1>
            <p className='text-center mt-4 text-[#627382] text-lg mb-5'>Explore All Trending Apps on the Market developed by us</p>

            <Suspense fallback={<span>Loading....</span>}>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {
            data.map((singleApp)=> <AppCard key={singleApp.id} singleApp={singleApp}></AppCard>)
        }
        </div>
            </Suspense>
        </div>
    );
};

export default AppsCard;