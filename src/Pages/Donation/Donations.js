import React from 'react';
import donations from './Donations.json';
import frame from '../../Frame.svg';
const Donations = () => {
    return (
        <div className='my-20 container mx-auto'>
            <div className="text-center">
            <h1 className='text-4xl font-bold'>Their lives depend on <br /> your donation</h1>
            <p className='my-4 font-light mb-16'>The payment of Zakat is a reminder that all that we have is from allah, and <br /> we must use it in the service of others.</p>
            </div>
            <div className='flex flex-wrap justify-center gap-5 items-center px-16 '>
                {donations.map(don => {
                    return <div className='w-[460px] h-[225px] flex bg-fuchsia-100 px-4 py-4 rounded-lg'>
                    <div className="icon w-1/5">
                        <img src={frame} alt="" />
                    </div>
                    <div className="wrapper w-full">
                    <h1 className='font-bold text-[20px] text-slate-900'>{don.typeDonation}</h1>
                    <p className='text-slate-500'>{don.DonationInfo.slice(0, 280)}...</p>
                    </div>
                    </div>
                })}
            </div>
        </div>
    );
};

export default Donations;