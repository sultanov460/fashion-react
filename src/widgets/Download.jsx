import React from "react";

export const Download = () => {
  return (
    <div className="flex flex-col justify-around mt-55 items-center xl:flex-row">
      <div className="flex flex-col gap-10 items-start text-center xl:text-left">
        <h1 className="font-black text-5xl leading-[150%] max-w-[507px]">
          DOWNLOAD APP & GET THE VOUCHER!
        </h1>
        <p className="text-[#7C7C7C] font-medium text-2xl leading-[35px] tracking-[-0.04em] max-w-[419px]">
          Get 30% off for first transaction using Rondovision mobile app for
          now.
        </p>
        <div className="flex gap-[19px] mt-5">
          <img src="appStore.jpg" alt="" />
          <img src="googlePlay.jpg" alt="" />
        </div>
      </div>
      <div className="relative">
        {/* <div class="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-300  max-w-[637px] max-h-[629px]"></div>
        <div class="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-300  max-w-[537px] max-h-[530px]"></div>
        <div class="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-full border border-gray-300  max-w-[440px] max-h-[434px]"></div> */}
        <img src="Mobile app.jpg" alt="" />
      </div>
    </div>
  );
};
