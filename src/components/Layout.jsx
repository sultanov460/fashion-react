import React from "react";
import { Nav } from "../widgets/Nav";
import { Outlet } from "react-router-dom";
import { Footer } from "../widgets/Footer";

export const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};
