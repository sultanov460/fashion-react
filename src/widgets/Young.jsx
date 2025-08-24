import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Container } from "../components/Container";

export const Young = () => {
  const arr = [
    {
      id: 1,
      title: "Trending on instagram",
      href: "trending.jpg",
    },
    {
      id: 2,
      title: "All Under $40",
      href: "allunder.jpg",
    },
  ];
  return (
    <div className="mt-47.5">
      <Container>
        <h1 className="font-black text-5xl text-black mb-30 tracking-[6%]">
          Young’s Favourite
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-12">
          {arr.map((card) => (
            <div key={card.id} className="max-w-[834px]">
              <img src={card.href} alt={card.title} />
              <div className="flex justify-between items-center mt-7">
                <div className="flex flex-col gap-2 items-start">
                  <h5 className="font-normal text-[32px] text-[#191919]">
                    {card.title}
                  </h5>
                  <button className="cursor-pointer font-medium text-2xl text-[#7F7F7F]">
                    Explore Now!
                  </button>
                </div>
                <FaArrowRight size={25} className="cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
