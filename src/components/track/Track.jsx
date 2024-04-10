import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import Redefine from "./redefine";

function Track() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <section>
      <Redefine />
      <div className="mx-auto px-5 md:py-5">
        <div className="flex flex-col md:flex-row mx-auto text-center justify-center">
          <div className="p-4 w-full">
            <div
              className="flex flex-col w-full h-[300px] m-auto border-2 items-center justify-center hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg"
              style={{
                backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                color: mode === "dark" ? "white" : "",
              }}
            >
              <svg
                className="text-pink-600 w-12 h-12 mb-3 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>

              <h2
                className="title-font font-medium text-lg text-gray-900"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Our Vision
              </h2>
              <p className="leading-relaxed">
                Our vision is to revolutionize the digital landscape by crafting
                exceptional web experiences and innovative applications that
                redefine industry standards. Through our commitment to
                creativity, quality, and user-centric design, we aim to empower
                businesses and individuals to thrive in the ever-evolving
                digital world.
              </p>
            </div>
          </div>

          <div
            className="flex flex-col w-full h-[300px] m-auto border-2 items-center justify-center hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg"
            style={{
              backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
              color: mode === "dark" ? "white" : "",
            }}
          >
            <svg
              className="text-pink-600 w-12 h-12 mb-3 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>

            <h2
              className="title-font font-medium text-lg text-gray-900"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Our Mission
            </h2>
            <p className="leading-relaxed">
              Our mission is to revolutionize the digital landscape by crafting
              exceptional web and application solutions that empower businesses
              to thrive in the ever-evolving technological ecosystem. We are
              committed to pushing the boundaries of creativity and innovation,
              delivering superior products that exceed expectations and drive
              success for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Track;
