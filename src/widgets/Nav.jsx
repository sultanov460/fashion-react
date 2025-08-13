import React, { useState } from "react";
import { Container } from "../components/Container";
import { Logo } from "../assets/icons/Logo";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

export const Nav = () => {
  const [mobileNav, setMobileNav] = useState(false);

  function toggleNav() {
    setMobileNav(!mobileNav);
  }

  const links = [
    {
      id: 1,
      title: "CATALOGUE",
      href: "#",
    },
    {
      id: 2,
      title: "FASHION",
      href: "#",
    },
    {
      id: 3,
      title: "FAVOURITE",
      href: "#",
    },
    {
      id: 4,
      title: "LIFESTYLE",
      href: "#",
    },
  ];
  return (
    <nav className="py-10">
      <Container className="flex justify-between text-black items-center ">
        <Link to={"/"}>
          <Logo />
        </Link>
        <div className="hidden xl:flex  gap-15 items-center">
          {links.map((link) => (
            <Link
              to={link.href}
              key={link.id}
              className="font-medium text-5.5 font-poppins text-black"
            >
              {link.title}
            </Link>
          ))}
          <button className="px-5 py-3 rounded-[7px] bg-black cursor-pointer mr-2.5 text-white">
            SIGN UP
          </button>
        </div>
        <button
          onClick={toggleNav}
          className="flex xl:hidden z-20 cursor-pointer"
        >
          {mobileNav ? (
            <GrClose color="#fff" size={40} />
          ) : (
            <AiOutlineMenu size={40} />
          )}
        </button>
        <div
          className={`fixed bg-black h-1/2 left-0 bottom-0 right-0 rounded-b-3xl ${mobileNav ? "top-0" : "-top-full"} flex flex-col gap-8 items-center justify-center transition-all duration-300`}
        >
          {links.map((link) => (
            <Link
              to={link.href}
              key={link.id}
              className="font-medium text-xl font-poppins text-white"
            >
              {link.title}
            </Link>
          ))}
          <button className="px-5 py-3 rounded-[7px] bg-white cursor-pointer mr-2.5 text-black">
            SIGN UP
          </button>
        </div>
      </Container>
    </nav>
  );
};
