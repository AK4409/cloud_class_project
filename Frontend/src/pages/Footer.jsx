import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="border bg-linear-[270deg,#DF8908_30%,#B415FF_100%] pb-10">
        
      <div className="grid grid-cols-3">
        <div className="w-xl">
        <h1 className="text-4xl font-bold text-blue-600 flex items-center justify-center m-5">
            ANUJ KARN
          </h1>
          <p className="ml-5 text-white text-justify leading-8">
            I designed highly scalable and responsive web applications using
            MERN. I have two year of experience in full Stack. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo debitis nemo excepturi, repellendus suscipit veritatis esse eius aperiam. Necessitatibus sequi porro numquam animi odit dicta autem qui itaque iusto nemo.
          </p>
        </div>
        <div className="flex gap-4 justify-center text-xl text-white p-25 ml-30 pl-30">
          <a href="https://www.facebook.com/" target="_blank">
            <FaFacebook />
          </a>

          <a href="https://www.instagram.com/" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://www.github.com/" target="_blank">
            <FaGithub />
          </a>
        </div>
        <div>
          <p className="text-white pt-24">@All right reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
