import React from "react";
import logoPHB from "../../assets/logo.png";
import sponsor from "../../assets/dafema.png";
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
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center py-4 px-6 md:py-6 md:px-16 bg-primary sticky top-0 z-[999]">
        <div
          onClick={() => window.open("/")}
          className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] absolute top-1 cursor-pointer"
        >
          <img src={logoPHB} alt="logo" className="w-full h-full" />
        </div>
        <div />
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
              href={pathname === "" ? "#heading" : "/"}
              className="text-sm md:text-base cursor-pointer"
            >
              HEADLINE
            </a>
            <a
              href={pathname === "" ? "#pemain" : "/"}
              className="text-sm md:text-base cursor-pointer"
            >
              TIM
            </a>
            <a
              href={pathname === "" ? "#jersey" : "/"}
              className="text-sm md:text-base cursor-pointer"
            >
              JERSEY
            </a>
            <a
              href={pathname === "" ? "#contact" : "/"}
              className="text-sm md:text-base cursor-pointer"
            >
              KONTAK
            </a>
            <a
              href={pathname === "" ? "#gallery" : "/"}
              className="text-sm md:text-base cursor-pointer"
            >
              GALLERY
            </a>
          </div>
        </div>

        <div />
        <div className="absolute w-[150px] h-[50px] md:w-52 md:h-16  right-1 top-5 md:top-1">
          <img src={sponsor} alt="tagline" className="w-full h-full" />
        </div>
      </div>
      <div className="w-full h-[5px] bg-secondary"></div>
      <div className="w-full h-[5px] bg-white"></div>
    </div>
  );
};

export default Header;
