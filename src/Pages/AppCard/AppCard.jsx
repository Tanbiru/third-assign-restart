import React from 'react';
import { FaStar } from 'react-icons/fa';
import { IoMdDownload } from 'react-icons/io';
import { Link } from 'react-router';

const AppCard = ({ singleApp }) => {

  const { title, id, image, downloads, ratingAvg } = singleApp;

  return (
    <Link to={`/appsDetails/${id}`}>

    <div className="card bg-base-100 w-full shadow-sm border h-full">
      <figure className='p-3 bg-gray-100'>
        <img className='h-41.5 object-cover'
          src={image}
          alt={title} />
      </figure>

      <div className="card-body">
        <h2 className="card-title mb-5">
          {title}
          
        </h2>

        <div className="card-actions justify-between">
          <div className="badge badge-outline text-[#00D390] bg-[#F1F5E8]"><IoMdDownload></IoMdDownload> {downloads}</div>
          <div className="badge badge-outline text-[#FF8811] bg-[#FFF0E1]"><FaStar className=''></FaStar> {ratingAvg} </div>
        </div>
      </div>
    </div>
    
    </Link>
  );
};

export default AppCard;