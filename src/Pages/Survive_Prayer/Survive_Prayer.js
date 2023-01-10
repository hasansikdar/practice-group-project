import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const Survive_Prayer = () => {
  return (
    <div id='prayer' className="bg-white py-10 w-11/12 mx-auto">
      <div className="md:flex justify-center md:!justify-between items-center">
        <figure className="w-full rounded-none md:w-1/2">
          <PhotoProvider>
            <PhotoView  src="https://i.ibb.co/d7Df1ww/Rectangle-245.png">
              <img className="w-full"
                src="https://i.ibb.co/d7Df1ww/Rectangle-245.png"
                alt="Rectangle-245"
                border="0"
              ></img>
            </PhotoView>
          </PhotoProvider>
        </figure>
        <div className="px-10 my-5 md:w-4/5">
          <h2 className="card-title text-black font-bold text-5xl mb-5 md:w-9/12">
            They need us to survive
          </h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam
            falli deterruisset. No duo populo animal noluisse, enim
          </p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam
            falli deterruisset.
          </p>
          <div className="card-actions mt-5">
            <button className="btn bg-red-600 rounded text-white border-0">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Survive_Prayer;
