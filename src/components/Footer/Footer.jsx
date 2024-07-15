import React from "react";
import logo from "../../assets/logo.png";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex flex-col h-[130px] bg-red-600 mt-[60px] relative">
      <img
        src={logo}
        alt="logo"
        className="md:w-[120px] md:h-[120px] w-[80px] h-[80px] absolute top-[-35%] left-[50%] translate-x-[-50%]"
      />
      <div className="flex flex-row px-[20px] md:px-[200px] justify-between items-center h-full">
        <p className="text-white text-xs md:text-lg">
          © 2024 Pemuda Harapan Bangsa
        </p>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <p className="text-white text-xs md:text-lg">Contact us: </p>
          <div
            onClick={() => window.open("https://www.instagram.com/phb.sc/")}
            className="flex flex-row items-center gap-1 cursor-pointer"
          >
            <BsInstagram size={20} className="text-white" />
            <p className="text-white text-xs md:text-lg">@PHB.SC</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
