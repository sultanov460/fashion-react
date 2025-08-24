import React from "react";

export const Payday = () => {
  return (
    <div className=" bg-[#E0C340] flex flex-col-reverse justify-center xl:justify-between xl:flex-row items-center text-center">
      <div className="">
        <img
          src="/paydayQiz.png"
          alt=""
          className="xl:w-[75%]  2xl:max-w-[991px] mx-auto xl:mx-0"
        />
      </div>
      <div className="flex flex-col gap-10 max-w-[666px]  items-center  text-center xl:!text-left px-16 xl:items-start mx-auto">
        <h1 className="font-black text-6xl 2xl:text-[111px] max-w-[350px] 2xl:max-w-[593px] leading-15 2xl:leading-[137.19px] ">
          PAYDAY SALE NOW
        </h1>
        <p className="font-medium text-3xl 2xl:text-4xl 2xl:leading-[52.32px] text-[#231300] max-w-[555px] 2xl:max-w-[693px] ">
          Spend minimal $100 get 30% off voucher code for your next purchase
        </p>
        <p className="font-normal text-2xl 2xl:text-4xl">
          <span className="font-bold">1 June - 10 June 2021</span>
          <br />
          *Terms & Conditions apply
        </p>
        <button className="bg-black py-4 px-8 2xl:px-13 2xl:py-7 cursor-pointer font-semibold text-xl xl:text-[28px] text-white rounded-lg max-w-[265px]">
          Shop Now
        </button>
      </div>
    </div>
  );
};
