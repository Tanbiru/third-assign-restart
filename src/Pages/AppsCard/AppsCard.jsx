import React, { Suspense, useState } from 'react';
import AppCard from '../AppCard/AppCard';

const AppsCard = ({ data, showButton = true }) => {

    const [showAll, setShowAll] = useState(false);

    const displayedData = showButton
        ? (showAll ? data : data.slice(0, 8))
        : data; 

    return (
        <div className='mt-20 w-10/12 mx-auto'>

            <Suspense fallback={<span>Loading....</span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {
                        displayedData.map((singleApp) => (
                            <AppCard key={singleApp.id} singleApp={singleApp} />
                        ))
                    }
                </div>
            </Suspense>

           
            {
                showButton && (
                    <div className='flex justify-center'>
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white btn mt-5'
                        >
                            {showAll ? "Show Less" : "Show All"}
                        </button>
                    </div>
                )
            }

        </div>
    );
};

export default AppsCard;