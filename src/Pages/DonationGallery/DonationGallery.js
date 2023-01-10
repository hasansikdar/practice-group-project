import React from 'react';
import donation from '../../assets/donation.png'
import { PhotoProvider, PhotoView } from 'react-photo-view';

const DonationGallery = () => {
  return (
    <div id="donationgallery">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-10 gap-4 w-11/12 mx-auto">
        <PhotoProvider>
          <PhotoView src={donation}>
            <img
              className="w-[300px] mx-auto md:w-[364px]"
              src={donation}
              alt="donation img"
            />
          </PhotoView>
        </PhotoProvider>
        <PhotoProvider>
          <PhotoView src={donation}>
            <img
              className="w-[300px] mx-auto md:w-[364px]"
              src={donation}
              alt="donation img"
            />
          </PhotoView>
        </PhotoProvider>
        <PhotoProvider>
          <PhotoView src={donation}>
            <img
              className="w-[300px] mx-auto md:w-[364px]"
              src={donation}
              alt="donation img"
            />
          </PhotoView>
        </PhotoProvider>
      </div>
    </div>
  );
};

export default DonationGallery;