import React from "react";

import HeroImage from "../assets/ordinary.jpg";
import HeroWidget from "../components/HeroWidget";

const Home = () => {
  return (
    <>
      <section className=" ml-4 mr-4 md:mr-20 md:ml-20 lg:ml-32 lg:mr-32 mt-4 mb-4 bg-rosePink rounded-3xl flex justify-between items-center overflow-hidden">
        <div className="p-16 md:p-20 lg:p-28 lg:w-3/5">
          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-normal">
            For Healthy, Beautiful, & Radiant Skin
          </h1>
          <p className="text-md mt-2 md:text-lg lg:mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </div>
        <img
          src={HeroImage}
          alt="hero"
          className="hidden md:overflow-hidden lg:overflow-hidden lg:block lg:w-2/5 xl:w-2/5"
        />
      </section>
      <section className="flex flex-col md:flex-row ml-4 mr-4 md:mr-20 md:ml-20 lg:ml-32 lg:mr-32 mb-2 ">
        <HeroWidget
          text={"Curated Products"}
          styling="bg-subtlePink w-full md:w-1/3 text-coffeePot2 mr-2"
        />
        <HeroWidget
          text={"Skincare"}
          styling="bg-coffeePot1 w-full md:w-1/3  mr-2 text-white "
        />
        <HeroWidget
          text={"Affordable Prices"}
          styling="bg-coffeePot2 w-full md:w-1/3 text-white"
        />
      </section>
    </>
  );
};

export default Home;
