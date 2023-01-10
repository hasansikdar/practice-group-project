import React from 'react';
import Donations from '../Donation/Donations';
import DonationGallery from '../DonationGallery/DonationGallery';
import DonationVideo from '../DonationVideo/DonationVideo';
import Survive_Prayer from '../Survive_Prayer/Survive_Prayer';

const Home = () => {
    return (
        <div className='bg-white'>
            <DonationVideo></DonationVideo>
            <Survive_Prayer></Survive_Prayer>
            <Donations></Donations>
            <DonationGallery></DonationGallery>
        </div>
    );
};

export default Home;
