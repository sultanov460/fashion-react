import React from "react";
import { Container } from "../components/Container";

export const Footer = () => {
  return (
    <div className="h-full flex  items-center bg-black pt-30 pb-37 justify-between xl:max-h-[545px]">
      <Container className="flex gap-10 items-center justify-center xl:justify-between flex-col xl:flex-row text-center xl:text-left">
        <div className="max-w-[415px] flex flex-col gap-8 xl:text-left">
          <h1 className="font-black text-[40px] text-white">FASHION</h1>
          <p className="font-normal leading-[40px] tracking-[2%] text-[24px] text-[#8E8E8E]">
            Complete your style with awesome clothes from us.
          </p>
          <img src="/logos.svg" alt="" />
        </div>
        {/* Justify dont workin */}
        <div className="flex gap-15 flex-col 2xl:gap-47 xl:flex-row">
          <div className="flex flex-col gap-8">
            <h5 className="font-normal text-[24px] text-[#D9D9D9]">Company</h5>
            <a href="#" className="text-[#8E8E8E] text-[24px] font-normal">
              About
            </a>
            <a href="#" className="text-[#8E8E8E] text-[24px] font-normal">
              Contact us
            </a>
            <a href="#" className="text-[#8E8E8E] text-[24px] font-normal">
              Support
            </a>
            <a href="#" className="text-[#8E8E8E] text-[24px] font-normal">
              Careers
            </a>
          </div>
          <div className="flex flex-col gap-8">
            <h5 className="font-normal text-[24px] text-[#D9D9D9]">
              Quick Link
            </h5>
            <a href="" className="text-[#8E8E8E] text-[24px] font-normal">
              Share Location
            </a>
            <a href="" className="text-[#8E8E8E] text-[24px] font-normal">
              Orders Tracking
            </a>
            <a href="" className="text-[#8E8E8E] text-[24px] font-normal">
              Size Guide
            </a>
            <a href="" className="text-[#8E8E8E] text-[24px] font-normal">
              FAQs
            </a>
          </div>
          <div className="flex flex-col gap-8">
            <h5 className="font-normal text-[24px] text-[#D9D9D9]">Legal</h5>
            <a href="" className="text-[#8E8E8E] text-[24px] font-normal">
              Terms & conditions
            </a>
            <a href="" className="text-[#8E8E8E] text-[24px] font-normal">
              Privacy Policy
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};
