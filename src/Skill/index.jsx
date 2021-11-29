import React from "react";
import { DiHtml5, DiCss3, DiJavascript1 } from "react-icons/di";

const Skill = () => {
  return (
    <section className="skill" id="skill">
      <div className="skill bg-black bacdrop-blur py-16 justify-content ">
        <div className="container px-6 sm:px-8 lg:px-4 xl:-32 mx-auto">
          <div className="hero-text text-center mb-10">
            <p className="font-oswold text-xl md:text-5xl text-white leading-tight">
              My Skill
            </p>
          </div>
          <div className="flex flex-wrap text-center  item-center justify-around md:mx-44 px-2 ">
            <div className=" card transition dratipn-500 ease-in-out bg-gray-800 md:max-w-xs py-1 px-8  shadow-lg rounded-lg my-12 hover:bg-yellow-600 transform hover:-translate-y-1 hover:scale-110 ...">
              <div>
                <div className="group flex-col  justify-center md:my-20 md:mx-20">
                  <div className="flex text-9xl text-gray-600  justify-center md:text-10xl font-semibold group-hover:text-white ...">
                    <DiHtml5 />
                  </div>
                  <p className="font-semibold text-2xl text-gray-600 group-hover:text-white ...">
                    HTML
                  </p>
                </div>
              </div>
            </div>

            <div className=" card transition dratipn-500 ease-in-out bg-gray-800 md:max-w-xs py-1 px-8  shadow-lg rounded-lg my-12 hover:bg-yellow-600 transform hover:-translate-y-1 hover:scale-110 ...">
              <div>
                <div className="group flex-col  justify-center md:my-20 md:mx-20">
                  <div className="flex text-9xl text-gray-600  justify-center md:text-10xl font-semibold group-hover:text-white ...">
                    <DiCss3 />
                  </div>
                  <p className="font-semibold text-2xl text-gray-600 group-hover:text-white ...">
                    CSS
                  </p>
                </div>
              </div>
            </div>

            <div className=" card transition dratipn-500 ease-in-out bg-gray-800 md:max-w-xs py-1 px-8  shadow-lg rounded-lg my-12 hover:bg-yellow-600 transform hover:-translate-y-1 hover:scale-110 ...">
              <div>
                <div className="group flex-col  justify-center md:my-20 md:mx-20">
                  <div className="flex text-9xl text-gray-600  justify-center md:text-10xl font-semibold group-hover:text-white ...">
                    <DiJavascript1 />
                  </div>
                  <p className="font-semibold text-2xl text-gray-600 group-hover:text-white ...">
                    Javascript
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
