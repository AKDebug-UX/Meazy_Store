import React from "react";
import architecture from "../../assets/r-architecture.jpg";

function Redefine() {
  return (
    <section className="flex pt-[7em] md:pt-[8em] pb-[2em] md:pb-[4em] lg:pb-[6em] mx-5 md:mx-12 lg:ml-12 lg:flex-row flex-col items-start justify-center">
      <div className="flex-1 lg:flex hidden md:mt-0 mt-6 flex justify-center items-center">
        <img
          className="lg:w-[90%] h-[30em] relative rounded-md"
          src={architecture}
        />
      </div>

      <div className="flex-1">
        <div className="mx-auto text-left">
          <h1 className="md:text-5xl text-4xl leading-normal text-[red] font-bold">
            we redefine the real estate experience
          </h1>
          <div className="lg:text-lg text-md leading-normal mt-4 font-normal text-black">
            Whether you’re seeking a home, a strategic investment, or a
            commercial space to propel your business, Geniz Properties is your
            trusted partner in turning visions into reality.
          </div>
          <div className="flex">
            <div>
              <h1 className="text-2xl pt-6 text-[red]">CORE VALUES</h1>
              <p className="pt-3">G - Genuinity</p>
              <p className="pt-2">E - Efficiency</p>
              <p className="pt-2">N - Nexus</p>
              <p className="pt-2">I - Integrity</p>
              <p className="pt-2">Z - Zeal</p>
            </div>
            <div className="flex-1 flex lg:hidden mt-6 flex justify-center items-center">
              <img
                className="w-[90%] h-[14em] relative rounded-md"
                src={architecture}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Redefine;
