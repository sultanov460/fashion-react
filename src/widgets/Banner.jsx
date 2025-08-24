import React from "react";

export const Banner = () => {
  return (
    <div className="bg-[#E5C643] text-white py-37.5 h-[623px] px-3">
      <div className=" flex flex-col gap-[37px] items-center justify-center ">
        <h1 className="font-black text-4xl xl:text-[55px] leading-12 xl:leading-[70px] tracking-[3%] text-center  max-w-[966px]">
          JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
        </h1>
        <p className="font-normal text-2xl xl:text-[32px] leading-[35px] text-center">
          Type your email down below and be young wild generation
        </p>
        <div className="relative mt-3 flex justify-center md:max-w-[574px] w-[90%] ">
          <input
            type="email"
            placeholder="Add your email here"
            className="px-[27px] pb-[35px] pt-[27px] rounded-[10px] bg-white md:w-144 h-[88px] w-[100%]"
          />
          <button className="bg-black rounded-[8px] absolute right-2.5 top-2.5 pl-9.5 pr-8.75  cursor-pointer font-medium text-[33px] text-white h-[67px] text-center">
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};
