import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Container } from "../components/Container";
export const Arrival = () => {
  const arrival = [
    {
      id: 1,
      image: "/hoodie.jpg",
      title: "Hoodies & Sweetshirt",
    },
    {
      id: 2,
      image: "/coats.jpg",
      title: "Coats & Parkas",
    },
    {
      id: 3,
      image: "/tees.jpg",
      title: "Tees & T-Shirt",
    },
  ];
  return (
    <div className="mt-[69px]">
      <Container>
        <h1 className="font-black text-5xl text-black mb-30 tracking-[6%]">
          NEW ARRIVALS
        </h1>
        <div className="flex gap-22.5 flex-wrap justify-center">
          {arrival.map((card) => (
            <div key={card.id} className="max-w-[484px]">
              <img src={card.image} alt={card.title} />
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
