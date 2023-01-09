import React from "react";

const DonationVideo = () => {
  return (
    <section className="flex flex-wrap lg:justify-between px-52 items-center gap-5">
      <div className="border w-[495px]">
        <div className="mb-10">
          <h2 className="text-[45px] font-bold leading-[45px]">
            Their lives depend on your donation
          </h2>
          <p className="pt-5 font-[18px] text-[#707070]">
            A donation is a gift for charity, humanitarian aid, or to benefit a
            cause. A donation may take various forms, including money, alms,
            services, or goods such as clothing, toys, food, or vehicles. A
            donation may satisfy medical needs such as blood or organs for
            transplant.
          </p>
        </div>
        <p className="btn bg-[#EF233C] border-0">Explore More</p>
      </div>
      <div className="border border-red-700 rounded">
        <iframe
          width="495"
          height="315"
          src="https://www.youtube.com/embed/GK2ippphNnM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
};

export default DonationVideo;
