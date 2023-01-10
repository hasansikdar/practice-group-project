import React from 'react';
import Donations from '../Donation/Donations';
import DonationGallery from '../DonationGallery/DonationGallery';
import DonationVideo from '../DonationVideo/DonationVideo';
import Survive_Prayer from '../Survive_Prayer/Survive_Prayer';

const Home = () => {
    return (
        <div className='bg-white'>
            <Donations></Donations>
            <Survive_Prayer></Survive_Prayer>
            <DonationGallery></DonationGallery>
            <DonationVideo></DonationVideo>
        </div>
    );
};

export default Home;
