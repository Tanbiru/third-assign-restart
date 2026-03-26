import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp, removeFromStoredDB } from '../../utility/addToDB';
import { FaStar } from 'react-icons/fa';
import { MdDownload } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Installation = () => {
  const [appList, setAppList] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const storedAppData = getStoredApp();
    const ConvertedStoredApps = storedAppData.map(id => parseInt(id));
    const myAppList = data.filter(app => ConvertedStoredApps.includes(app.id));
    setTimeout(() => setAppList(myAppList), 0);
  }, [data]);

  const handleUninstall = (id) => {
    removeFromStoredDB(id);
    const storedAppData = getStoredApp();
    const updatedAppList = data.filter(app => storedAppData.includes(app.id));
    setAppList(updatedAppList);
    toast.success('Uninstall done!');
  };

  return (
    <div className='w-11/12 md:w-10/12 mx-auto mt-10 md:mt-20'>


      <div className='text-center px-4 md:px-0'>
        <h1 className='mb-3 md:mb-5 text-3xl sm:text-4xl md:text-5xl font-bold'>Your Installed Apps</h1>
        <p className='text-[#627382] text-base sm:text-lg md:text-xl'>
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

    
      <div className='mt-6 md:mt-10 px-2 sm:px-0'>
        <h4 className='text-xl sm:text-2xl font-semibold'>{appList.length} Apps Found</h4>
      </div>

      
      <div className='mt-6 md:mt-10 space-y-5'>
        {appList.map(app => (
          <div
            key={app.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between border border-gray-300 rounded-lg p-4 sm:p-5"
          >
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-200 rounded-md shrink-0">
                <img src={app.image} alt={app.title} className="w-full h-full object-cover rounded-md" />
              </div>

              <div className='flex flex-col'>
                <h3 className="text-lg sm:text-xl font-semibold text-[#34485A]">{app.title}</h3>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-500 mt-1">
                  <span className="text-[#00D390] flex items-center gap-1">
                    <MdDownload /> {app.downloads}
                  </span>
                  <span className="text-[#FF8811] flex items-center gap-1">
                    <FaStar /> {app.ratingAvg}
                  </span>
                  <span>{app.size} MB</span>
                </div>
              </div>
            </div>

            
            <div className='mt-3 sm:mt-0'>
              <button
                onClick={() => handleUninstall(app.id)}
                className="w-full sm:w-auto bg-[#00D390] text-white px-5 py-2 rounded-md hover:bg-green-600 transition-colors duration-300"
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Installation;