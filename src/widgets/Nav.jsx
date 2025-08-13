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
              className="font-medium text-5.5 font-poppins text-black"
            >
              {link.title}
            </Link>
          ))}
          <button className="px-5 py-3 rounded-[7px] bg-black cursor-pointer mr-2.5 text-white">
            SIGN UP
          </button>
        </div>
        <button onClick={toggleNav} className="flex xl:hidden">
          {mobileNav ? <GrClose /> : <AiOutlineMenu size={40} />}
        </button>
        {mobileNav && (
          <div
            className={`flex flex-col gap-12 fixed ${
              mobileNav ? "top-[50px]" : "top-[-120px]"
            } transition-all duration-300`}
          >
            {links.map((link) => (
              <Link
                to={link.href}
                className="font-medium text-6.5 font-poppins text-black"
              >
                {link.title}
              </Link>
            ))}
            <button className="px-5 py-3 rounded-[7px] bg-black cursor-pointer mr-2.5 text-white">
              SIGN UP
            </button>
          </div>
        )}
      </Container>
    </nav>
  );
};
