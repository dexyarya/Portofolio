import React from "react";
import { Link } from "react-scroll";
import { FiAlignRight } from "react-icons/fi";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <div className="fixed z-10  mt-0 shadow-lg left-0 right-0 flex py-3 bg-white  mb-3">
        <div className="container px-12 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link className="logo" to="home" smooth={true} duration={500}>
              <a
                className="md:text-lg cursor-pointer font-oswold leading-relaxed inline-block mr-4 py-2  whitespace-nowrap text-blue-600"
                href="../Herosection"
              >
                <p className="text-yellow-600 ">My Portofolio</p>
              </a>
            </Link>
            <button
              className="text-yellow-600 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FiAlignRight />
            </button>
          </div>
          <div
            className={"lg:flex " + (navbarOpen ? " flex" : " hidden")}
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item ">
                <Link to="home" smooth={true} className="home" duration={1000}>
                  <a
                    className="px-3 cursor-pointer py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:text-yellow-600 "
                    href="../Herosection"
                  >
                    <i className="fab fa-facebook-square text-lg leading-lg hover:text-yellow-600" />
                    <span className=" focus:text-yellow-600 ml-2 ">Home</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="about" to="about" smooth={true} duration={500}>
                  <a
                    className="px-3 cursor-pointer py-2 flex items-center text-xs active:text-yellow-600 uppercase font-bold leading-snug text-black hover:text-yellow-600"
                    href="../About"
                  >
                    <span className="ml-2">About</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="skill" to="skill" smooth={true} duration={500}>
                  <a
                    className="px-3 py-2 cursor-pointer flex items-center text-xs uppercase font-bold leading-snug text-black hover:text-yellow-600"
                    href="../Skill"
                  >
                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75" />
                    <span className="ml-2">Skill</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="contact"
                  to="contact"
                  smooth={true}
                  duration={500}
                >
                  <a
                    className="px-3 cursor-pointer py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:text-yellow-600"
                    href="../Contact"
                  >
                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75" />
                    <span className="ml-2">Contact</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
