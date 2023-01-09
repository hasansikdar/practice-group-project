import React from 'react';
import donation from '../../assets/donation.png'

const DonationGallery = () => {
    return (
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img
            className=" mx-auto w-[300px] md:w-[364px]"
            src={donation}
            alt="donation img"
          />
          <img
            className="w-[300px] mx-auto md:w-[364px]"
            src={donation}
            alt="donation img"
          />
          <img
            className="w-[300px] mx-auto md:w-[364px]"
            src={donation}
            alt="donation img"
          />
        </div>
      </div>
    );
};

export default DonationGallery;