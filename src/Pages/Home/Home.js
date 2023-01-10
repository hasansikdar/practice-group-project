import React from 'react';
import Donations from '../Donation/Donations';
import DonationGallery from '../DonationGallery/DonationGallery';
import DonationVideo from '../DonationVideo/DonationVideo';
import Survive_Prayer from '../Survive_Prayer/Survive_Prayer';
import Top_Banner from '../Top_Banner/Top_Banner';

const Home = () => {
    return (
        <div className='bg-white'>
            <Top_Banner></Top_Banner>
            <DonationVideo></DonationVideo>
            <Survive_Prayer></Survive_Prayer>
            <Donations></Donations>
            <DonationGallery></DonationGallery>
        </div>
    );
};

export default Home;
