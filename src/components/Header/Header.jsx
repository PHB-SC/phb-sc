import React from "react";
import logoPHB from "../../assets/logo.png";
import tagLine from "../../assets/tagline.png";
import { HiOutlineMenu } from "react-icons/hi";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [show, setShow] = React.useState(false);
  const location = useLocation();

  const pathname = location.pathname.split("/").pop();

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <div className="flex flex-row justify-between items-center py-4 px-6 md:py-4 md:px-16 bg-red-600">
      <div className="w-[80px] h-[80px] md:w-[120px] md:h-[120px]">
        <img src={logoPHB} alt="logo" className="w-full h-full" />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-white font-semibold my-4 md:my-0">
        <HiOutlineMenu
          className="text-2xl cursor-pointer md:hidden"
          onClick={handleToggle}
        />

        <div
          className={`flex-col gap-3 md:flex-row md:flex ${
            show ? "flex" : "hidden"
          } md:gap-6`}
        >
          <a
            href={pathname === "" ? "#heading" : "/phb-sc/"}
            className="text-sm md:text-base cursor-pointer"
          >
            HEADLINE
          </a>
          <a
            href={pathname === "" ? "#pemain" : "/phb-sc/"}
            className="text-sm md:text-base cursor-pointer"
          >
            TIM
          </a>
          <a
            href={pathname === "" ? "#jersey" : "/phb-sc/"}
            className="text-sm md:text-base cursor-pointer"
          >
            JERSEY
          </a>
          <a
            href={pathname === "" ? "#contact" : "/phb-sc/"}
            className="text-sm md:text-base cursor-pointer"
          >
            KONTAK
          </a>
          <a
            href={pathname === "" ? "#gallery" : "/phb-sc/"}
            className="text-sm md:text-base cursor-pointer"
          >
            GALLERY
          </a>
        </div>
      </div>

      <div className="w-[100px] h-[80px] md:w-[150px] md:h-[120px]">
        <img src={tagLine} alt="tagline" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Header;
