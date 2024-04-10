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
            About Me
          </h1>
          <div className="lg:text-lg text-md leading-normal mt-4 font-normal text-black">
            We specialize in the innovative creation and expert design of
            dynamic websites and cutting-edge applications. Our software company
            is dedicated to delivering tailored solutions that meet the unique
            needs of our clients, ensuring top-notch performance and user
            satisfaction.
          </div>
          <div className="flex">
            <div>
              <h1 className="text-2xl pt-6 text-[red]">CORE VALUES</h1>
              <p className="pt-3">
                <b>Innovation</b>: We embrace creativity and strive to pioneer new
                ideas and technologies in web and application development.
              </p>
              <p className="pt-2">
                <b>Excellence</b>: We are committed to delivering high-quality
                products and services, consistently exceeding expectations and
                industry standards.{" "}
              </p>
              <p className="pt-2">
                <b>Collaboration</b>: We believe in the power of teamwork and
                foster an environment where collaboration and communication
                thrive, both internally and with our clients.{" "}
              </p>
              <p className="pt-2">
                <b>Integrity</b>: We conduct ourselves with honesty,
                transparency, and integrity in all our interactions, building
                trust and credibility with our stakeholders.{" "}
              </p>
              <p className="pt-2">
                <b>Customer-Centricity</b>: We prioritize the needs and
                satisfaction of our clients, dedicating ourselves to
                understanding their goals and delivering solutions that exceed
                their expectations.{" "}
              </p>
              <p className="pt-2">
                <b>Continuous Improvement</b>: We are dedicated to continuous
                learning and growth, constantly seeking ways to enhance our
                skills, processes, and products for the benefit of our clients
                and our company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Redefine;
