import React, { useState } from "react";
import emailjs from "emailjs-com";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
const imageprofile = require("../Svg/contact-1.svg").default;

const Contact = () => {
  const [values, setValue] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = (values) => {
    const errors = [];

    if (!values.name) {
      errors.name = "name is reaquaired*";
    }

    if (!values.email) {
      errors.email = "email is reaquired";
    }

    if (!values.subject) {
      errors.subject = "subject is reaquired";
    }

    if (!values.message) {
      errors.message = "messageis reaquired";
    }

    return errors;
  };

  const handleChange = (name) => (e) => {
    setValue({ ...values, [name]: e.target.value });
  };

  const sendMail = async (e) => {
    e.preventDefault();

    setErrors(validate(values));
    if (errors) {
      let errorisi = "Tolong jangan di kosongkan ya";
      console.log(errorisi);
    } else {
      await emailjs
        .sendForm(
          "service_sccfbb8",
          "My_Gemail123",
          e.target,
          "user_qEB7e7gRAg9Z8Zf1yzCzr"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }

    e.target.reset("");
  };
  return (
    <section className="contact" id="contact">
      <div className="contact bg-white py-16 justify-content">
        <div classNmae=" container  lg:px-4 xl:px-32 mx-auto">
          <div className="hero-text text-center">
            <p className="font-oswold text-xl md:text-5xl text-black leading-tight">
              Contact
            </p>
          </div>
          <div className="hero md:mt-20 md:px-36 card-form flex flex-wrap justify-around">
            <div className="hero-form mx-10 md:w-10 md:w-1/2">
              <form className="md:w-50 m-10 rounded p-5" onSubmit={sendMail}>
                <div className="container">
                  <div className="input">
                    <input
                      className="bg-gray-200 aparance-none border-2 border-gray-200 md:text-xs rounded md: w-full py-2 md:px-10 leading-tight focus:outline-none focus:bg-white focus:border-yellow-600"
                      id="name"
                      vale={values.name}
                      onChange={handleChange("name")}
                      name="name"
                      error={errors.name}
                      type="text"
                      placeholder="Your Name*"
                    />

                    <p className="text-red-500 font-serif">{errors.name}</p>
                  </div>

                  <div className="input mt-5">
                    <input
                      className="bg-gray-200 aparance-none border-2 border-gray-200 md:text-xs rounded md: w-full py-2 md:px-10 leading-tight focus:outline-none focus:bg-white focus:border-yellow-600"
                      id="email"
                      error={errors.email}
                      vale={values.email}
                      onChange={handleChange("email")}
                      name="email"
                      type="email"
                      placeholder="Your Email*"
                    />
                  </div>
                  <p className="text-red-500 font-serif">{errors.email}</p>

                  <div className="input mt-5">
                    <input
                      className="bg-gray-200 aparance-none border-2 border-gray-200 md:text-xs rounded md: w-full py-2 md:px-10 leading-tight focus:outline-none focus:bg-white focus:border-yellow-600"
                      id="subject"
                      error={values.subject}
                      vale={values.email}
                      onChange={handleChange("subject")}
                      name="subject"
                      type="text"
                      placeholder="Your subject*"
                    />
                    <p className="text-red-500 font-serif">{errors.subject}</p>
                  </div>

                  <div className="input mt-5">
                    <textarea
                      className="bg-gray-200 aparance-none border-2 border-gray-200 md:text-xs rounded md: w-full py-2 md:px-10 leading-tight focus:outline-none focus:bg-white focus:border-yellow-600"
                      id="message"
                      error={values.message}
                      vale={values.message}
                      onChange={handleChange("message")}
                      name="message"
                      type="text"
                      rows="4"
                      placeholder="Type Your Message*"
                    />
                    <p className="text-red-500 font-serif">{errors.message}</p>
                  </div>
                  <button
                    type="submit"
                    className="btn bg-yellow-600 text-white font-bold py-2 px-4 rounded w-40 mt-5 hover:bg-yellow-500"
                  >
                    Send
                  </button>
                  <div className="sosmed flex mt-10 justify-around justify-items-center w-40">
                    <div className="text-yellow-700 hover:text-yellow-600  md:text-2xl">
                      <a href="https://github.com/dexyarya">
                        <BsGithub />
                      </a>
                    </div>
                    <div className="text-yellow-700 hover:text-yellow-600  md:text-2xl">
                      <a href="https://www.linkedin.com/in/dexy-arya/">
                        <BsLinkedin />
                      </a>
                    </div>
                    <div className="text-yellow-700 hover:text-yellow-600 md:text-2xl">
                      <a href="https://www.instagram.com/dexy.ar/">
                        <BsInstagram />
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="hero-image p-5 md:w-1/3 md:m-10">
              <img src={imageprofile} alt="iamge-contact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
