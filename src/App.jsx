import React from "react";
import { Hero } from "./widgets/Hero";
import { Brands } from "./widgets/Brands";
import { Arrival } from "./widgets/Arrival";
import { Payday } from "./widgets/Payday";
import { Young } from "./widgets/Young";
import { Download } from "./widgets/Download";
import { Banner } from "./widgets/Banner";

const App = () => {
  return (
    <>
      <Hero />
      <Brands />
      <Arrival />
      <Payday />
      {/* <img src="Banner.jpg" alt="" className="mt-47" /> */}
      <Young />
      <Download />
      <Banner />
    </>
  );
};

export default App;
