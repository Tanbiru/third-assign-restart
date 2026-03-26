import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AppsCard from '../AppsCard/AppsCard';
import AppsNotFound from '../AppsNotFound/AppsNotFound';

const AppsButton = () => {
    const data = useLoaderData();
    const [searchText, setSearchText] = useState('');

    const filteredApps = data.filter(app =>
    app.title.toLowerCase().includes(searchText.toLowerCase())
  );

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 
  <div className="text-center mt-8 sm:mt-10 md:mt-12">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 md:mb-5">
      Our All Applications
    </h1>
    <p className="text-sm sm:text-base text-[#627382] max-w-2xl mx-auto px-4">
      Explore All Apps on the Market developed by us. We code for Millions
    </p>
  </div>


  <div className="mt-6 sm:mt-8 md:mt-10">
    <div className="flex justify-center">
      <div className="w-full sm:w-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Search app..."
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            className="w-full sm:w-64 md:w-80 px-4 py-2.5 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#632EE3] focus:border-transparent transition-all duration-200 pl-10 sm:pl-4"
          />
        
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 sm:hidden"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>


  <div className="mt-8 sm:mt-10 md:mt-12 pb-8 sm:pb-10 md:pb-12">
    {filteredApps.length > 0 ? (
      <AppsCard data={filteredApps} showButton={false} />
    ) : (
      <div className="flex justify-center items-center min-h-100">
        <AppsNotFound />
      </div>
    )}
  </div>
</div>
    );
};

export default AppsButton;