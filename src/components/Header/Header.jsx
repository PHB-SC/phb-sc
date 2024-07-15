import React from "react";
import logoPHB from "../../assets/logo.png";
import tagLine from "../../assets/tagline.png";
import { HiOutlineMenu } from "react-icons/hi";

const Header = () => {
  const [show, setShow] = React.useState(false);

  return (
    <div className="flex flex-row justify-between items-center py-4 px-6 md:py-4 md:px-16 bg-red-600">
      <div className="w-[80px] h-[80px] md:w-[120px] md:h-[120px]">
        <img src={logoPHB} alt="logo" className="w-full h-full" />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-white font-semibold my-4 md:my-0">
        <HiOutlineMenu
          className="text-2xl cursor-pointer md:hidden"
          onClick={() => setShow(!show)}
        />

        <div
          className={`flex-col gap-3 md:flex-row md:flex ${
            show ? "flex" : "hidden"
          } md:gap-6`}
        >
          <a href="/phb-sc/" className="text-sm md:text-base cursor-pointer">
            BERANDA
          </a>
          <a className="text-sm md:text-base cursor-pointer">PERTANDINGAN</a>
          <a className="text-sm md:text-base cursor-pointer">TIM</a>
          <a className="text-sm md:text-base cursor-pointer">KONTAK</a>
          <a className="text-sm md:text-base cursor-pointer">GALLERY</a>
        </div>
      </div>

      <div className="w-[100px] h-[80px] md:w-[150px] md:h-[120px]">
        <img src={tagLine} alt="tagline" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Header;
