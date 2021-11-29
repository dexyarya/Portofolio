import React from "react";
import TextLoop from "react-text-loop";

const image1 = require("../img/image.png").default;
const Herosection = () => {
  return (
    <section className="home" id="home">
      <div className="hero bg-hero-image2 bg-50% bg-center py-16  justify-content ">
        <div className="hero  py-16">
          {/* container */}
          <div className="container  px-8 sm:px-8 lg:px-16 xl:px-20 mx-auto">
            {/* hero wrapper */}
            <div className="hero-wrapper flex flex-wrap items-center justify-around">
              {/* hero text */}
              <div className="hero-text ">
                <p className=" font-serif text-xl md:text-4xl max-w-l text-gray-900 leading-tight">
                  Hey There
                </p>
                <p className=" font-oswold text-xl md:text-7xl max-w-l text-gray-900 leading-tight">
                  I'am Dexy Arya
                </p>
                <TextLoop className=" z-0" interval={3000}>
                  <p className=" font-oswold text-xl md:text-2xl text-gray-800 text-base leading-relaxed mt-8 font-serif">
                    Juior Frontend Developer
                  </p>
                  <p className=" font-oswold text-xl md:text-2xl text-gray-800 text-base leading-relaxed mt-8 font-serif">
                    Grapic Designer
                  </p>
                </TextLoop>
                <div className="get-app flex space-x-5 mt-10 justify-center md:justify-start" />
              </div>
              <div className=" hero-image">
                <img className=" hero-image" src={image1} alt="profil" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
