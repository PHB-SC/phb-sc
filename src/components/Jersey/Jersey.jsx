import React from "react";
import jerseyPemain from "../../assets/jersey/jersey_posc_2025.png";
import jerseyKiper from "../../assets/jersey/jersey_gk_2025.png";

const Jersey = () => {
  return (
    <div className="py-8 px-4 md:py-8 md:px-14 flex flex-col gap-8">
      <p className="text-primary font-bold text-xl md:text-2xl">
        POSC KIT 2025/2026
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-[40px]">
        <div className="flex flex-col gap-5 md:gap-[20px]">
          <div className="w-[250px] h-[300px] md:w-[300px] md:h-[400px] rounded-md overflow-hidden">
            <img
              src={jerseyPemain}
              alt="Jersey Pemuda Harapan Bangsa"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-primary font-bold text-center md:text-left">
            POSC Primary Jersey 2025 - Blue &{" "}
            <span className="text-secondary">Red</span>
          </p>
        </div>

        <div className="flex flex-col gap-5 md:gap-[20px]">
          <div className="w-[250px] h-[300px] md:w-[300px] md:h-[400px] rounded-md overflow-hidden">
            <img
              src={jerseyKiper}
              alt="Jersey Pemuda Harapan Bangsa"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-primary font-bold text-center md:text-left">
            POSC Keeper Jersey 2025 - <span className="text-black">Black</span>{" "}
            & <span className="text-gray-700">Grey</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jersey;
