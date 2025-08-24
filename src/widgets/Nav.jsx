import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    window.addEventListener("click", () => {
      setMobileNav(false);
    });
  });

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
        <div className="flex items-center gap-8">
          <div className="hidden xl:flex gap-15 items-center ">
            {links.map((link) => (
              <Link
                to={link.href}
                key={link.id}
                className="font-medium text-5.5 font-poppins text-black"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <button className="hidden px-5 py-3 rounded-[7px] bg-black cursor-pointer mr-2.5 text-white md:block">
            SIGN UP
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleNav();
            }}
            className="flex xl:hidden z-20 cursor-pointer"
          >
            {mobileNav ? <GrClose size={40} /> : <AiOutlineMenu size={40} />}
          </button>
        </div>
        <div
          onClick={(e) => e.stopPropagation()}
          className={`fixed bg-black h-full w-[70%] right-0 bottom-0 top-0  ${
            mobileNav ? "left-0" : "-left-full"
          } flex flex-col gap-8 items-center justify-center transition-all duration-300`}
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
          <button className="block px-5 py-3 rounded-[7px] bg-white cursor-pointer mr-2.5 text-black md:hidden">
            SIGN UP
          </button>
        </div>
      </Container>
    </nav>
  );
};
