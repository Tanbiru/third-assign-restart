import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp } from '../../utility/addToDB';
import { FaStar } from 'react-icons/fa';
import { MdDownload } from 'react-icons/md';


const Installation = () => {
    

    const [appList, setAppList] = useState([])
      

    const data = useLoaderData();
    console.log(data);


    useEffect(() => {
         const storedAppData = getStoredApp();
         const ConvertedStoredApps = storedAppData.map(id => parseInt(id))
         const myAppList = data.filter(app => ConvertedStoredApps.includes(app.id));
         
         setTimeout(() => setAppList(myAppList), 0)
         
    }, [data])
    

    return (
        <div className='w-10/12 mx-auto mt-20'>
            <div className='text-center'>
                <h1 className='mb-5 text-4xl font-bold'>Your Installed Apps</h1>
            <p className='text-[#627382] text-lg '>Explore All Trending Apps on the Market developed by us</p>
            </div>


            <div>
                <h4>{appList.length} Apps Found</h4>


                <div className='mt-10 space-y-5'>
  {
    appList.map(app => (
      <div 
        key={app.id} 
        className="flex items-center justify-between border border-gray-300 rounded-lg p-5"
      >

      
        <div className="flex items-center gap-4">
          
        
          <div className="w-16 h-16 bg-gray-200 rounded-md">
            <img src={app.image} alt="" className="w-full h-full object-cover rounded-md" />
          </div>

        
          <div>
            <h3 className="text-lg font-semibold text-[#34485A]">
              {app.title}
            </h3>

            <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
              <span className="text-[#00D390] flex items-center gap-1"><MdDownload></MdDownload> {app.downloads}</span>
              <span className="text-[#FF8811] flex items-center"><FaStar></FaStar> {app.ratingAvg}</span>
              <span>{app.size} MB</span>
            </div>
          </div>
        </div>

    
        <button className="bg-[#00D390] text-white px-5 py-2 rounded-md hover:bg-green-600">
          Uninstall
        </button>

      </div>
    ))
  }
</div>
            </div>
        </div>
    );
};

export default Installation;