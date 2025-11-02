import React from "react";
import aboutImage from "../assets/15.jpg.jpeg";
import homeImage from "../assets/home.png.jpeg"

const About = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat bg-fixed max-w-7xl mx-auto"
      style={{ backgroundImage: `url(${aboutImage})` }}
    >
      <div className="flex flex-col md:flex-row items-center px-6 md:px-16 py-20 text-black">
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold font-Garamond">
            The better way <br /> to buy real estate.
          </h2>
          <p className="text-lg leading-relaxed">
            We are dedicated to helping you find your dream property. With years
            of experience and a trusted reputation, we connect clients to the
            best real estate opportunities. Whether you're buying, selling, or
            renting we make it seamless and stress-free.
          </p>
          <button className="m-4 px-6 py-3 bg-indigo-500 rounded-lg hover:bg-indigo-700 transition text-white">
            Contact Me
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-end mb-8 md:mb-0">
          <img
            src={homeImage}
            alt="About"
            className="rounded-2xl shadow-lg w-80 md:w-96 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
