import React from "react";
import hero from "../../assets/hero.svg";

function HeroSection() {
  return (
    <div>
      <div className="bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-pink-400 via-gray-600 to-blue-500">
        <section className="flex pt-[7em] md:pt-[8em] pb-[2em] md:pb-[4em] lg:pb-[6em] mx-5 md:mx-12 lg:ml-12 lg:flex-row flex-col items-center justify-center">
          <div className="flex-1">
            <div className="mx-auto lg:text-left text-center">
              <h1 className="md:text-7xl text-5xl leading-normal text-white font-bold">
                WELCOME TO
                <span className="text-blue-900 hover:text-pink-400"> GENIZ </span>
                <br /> PROPERTIES
              </h1>
              <div className="lg:text-lg text-md leading-normal mt-4 font-normal text-white">
                Are you ready to find the perfect place to call home? Look no
                further!
              </div>
              <button className="font-bold bg-white text-blue-700 hover:bg-blue-700 hover:text-white py-3 mt-8 rounded-full text-center w-full lg:w-[15em]">
              View properties 
              </button>
            </div>
          </div>

          <div className="flex-1 lg:flex hidden items-center justify-center">
            <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
              <img
                className="lg:w-[90%] h-[30em] relative"
                src={hero}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HeroSection;
