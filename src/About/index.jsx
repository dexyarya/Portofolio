import React from "react";
const image2 = require("../img/foto.JPG").default;

const About = () => {
  return (
    <section className="about" id="about">
      <div className="hero mt-5 bg-white  backdrop-blur-xl py-16 justify-content">
        <div className="container  px-6 sm:px-8 lg:px-4 xl:px-32 mx-auto">
          <div className="hero-text text-center mb-8">
            <p className=" font-oswold text-xl md:text-5xl  text-black leading-tight">
              About Me
            </p>
          </div>
          <div className=" md:flex flex-shrink-0 max-w-xs mx-auto bg-white item-center overflow-hidden md:max-w-6xl">
            <div className="p-8 md:flex-shrink-0">
              <img
                className=" rounded-xl transition dratipn-500 transform hover:-translate-y-1 hover:scale-110  md:h-full  w-full  object-cover md:w-96"
                src={image2}
                alt="Dexy Arya"
              />
            </div>
            <div className="p-8 flex-1 ">
              <div className="tracking-wide text-justify text-black md:text-justify md:text-xl max-w-l font-serif">
                My name is Dexy Arya, I am a fresh graduate from Amikom
                University Yogyakarta, I am a junior frontend developer and
                graphic designer, I am currently studying ReactJS and I am
                currently studying a CSS framework such as Taillwind and UI
                Materials
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
