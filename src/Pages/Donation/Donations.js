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
            <div className='flex flex-wrap justify-center gap-5 items-center px-4 md:px-16 '>
                {donations.map(don => {
                    return <div className='w-[460px] max-h-min flex bg-fuchsia-100 px-4 py-4 rounded-lg'>
                    <div className="icon p-2">
                        <img src={frame} className='w-16' alt="" />
                    </div>
                    <div className="wrapper w-full">
                    <h1 className='font-bold text-[20px] text-slate-900'>{don.typeDonation}</h1>
                    <p className='text-slate-500'>{don.DonationInfo.split(' ', 52).join(' ')}...</p>
                    </div>
                    </div>
                })}
            </div>
        </div>
    );
};

export default Donations;