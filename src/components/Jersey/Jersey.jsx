import React from "react";
import jerseyPemain from "../../assets/jersey/jersey_phb.jpg";
import jerseyKiper from "../../assets/jersey/jersey_kiper.jpg";

const Jersey = () => {
  return (
    <div className="py-8 px-4 md:py-8 md:px-14 flex flex-col gap-8">
      <p className="text-red-600 font-bold text-xl md:text-2xl">
        PHB SC KIT 2024/2025
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
          <p className="text-red-600 font-bold text-center md:text-left">
            PHB SC Primary Jersey 2024 - Red
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
          <p className="text-red-600 font-bold text-center md:text-left">
            PHB SC Keeper Jersey 2024 - Yellow
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jersey;
