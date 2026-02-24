import React from "react";
import Analytics from "../components/Analytics";
import Cards from "../components/Cards";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
    </>
  );
};

export default HomePage;
