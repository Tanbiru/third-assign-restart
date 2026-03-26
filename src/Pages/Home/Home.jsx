import React from 'react';
import Banner from '../../Components/Banner/Banner';
import AppsCard from '../AppsCard/AppsCard';
import { useLoaderData } from 'react-router';
import { CloudHail } from 'lucide-react';

const Home = () => {
    const data = useLoaderData()
    console.log(data);
   
    return (
        <div>
            <Banner></Banner>
            <AppsCard data={data} showButton={true}></AppsCard>
        </div>
    );
};

export default Home;