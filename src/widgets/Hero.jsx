import React from "react";
import { Container } from "../components/Container";

export const Hero = () => {
  return (
    <Container className=" ">
      <div className="bg-[#F4F6F5] flex flex-col pt-22 px-20 items-center justify-between rounded-[59px] relative w-full xl:flex-row">
        <div className="flex flex-col gap-6 xl:gap-10 justify-center items-center">
          <h1 className="max-w-118.5 italic text-4xl xl:text-[96px] leading-15 text-center  font-black xl:leading-[110px] xl:text-left">
            LET’S EXPLORE UNIQUE CLOTHES.
          </h1>
          <p className="text-xl xl:text-[32px] font-normal text-[#191818] text-center xl:text-left">
            Live for Influential and Innovative fashion!
          </p>
          <button className="bg-black  py-3 px-4 xl:py-4.5 xl:px-10 font-medium text-xl xl:text-[30px] text-white w-max cursor-pointer rounded-xl">
            Shop Now
          </button>
        </div>
        <img
          src="/qiz.png"
          alt=""
          className="object-cover w-[90%] 2xl:max-w-[871px]"
        />
        <div className="hidden xl:flex">
          <img
            src="/star.svg"
            alt=""
            className="absolute left-1/2 top-15 -translate-x-1/2 "
          />
          <img src="/star.svg" alt="" className="absolute right-60 top-25 " />
          <img
            src="/star.svg"
            alt=""
            className="absolute bottom-23 right-20 "
          />
          <img src="/star.svg" alt="" className="absolute right-197 bottom-8" />
        </div>
      </div>
    </Container>
  );
};
