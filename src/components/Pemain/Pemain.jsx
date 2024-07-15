import React from "react";
import { pemain } from "../../mock/pemain";
import fulltim from "../../assets/pemain/fulltim.jpg";

const Pemain = () => {
  return (
    <div className="py-8 px-4 md:py-8 md:px-14 flex flex-col gap-8">
      <p className="text-red-600 font-bold text-xl md:text-2xl">
        Tim Utama Pemuda Harapan Bangsa SC
      </p>
      <div className="flex flex-col px-6 md:px-8 gap-6 md:gap-8">
        <div className="w-full bg-red-600 h-64 md:h-[800px]">
          <img
            src={fulltim}
            alt="Tim Pemuda Harapan Bangsa"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="flex gap-6 md:gap-[68px] items-center justify-between overflow-x-auto">
          {pemain.map((pemain) => (
            <div
              key={pemain.id}
              className="flex-none flex flex-col gap-5 md:gap-8 w-36 md:w-auto"
            >
              <div className="h-[100px] md:w-[150px] md:h-[150px] rounded-lg overflow-hidden">
                <img
                  src={pemain.image}
                  alt={pemain.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex w-full gap-1 justify-between items-center">
                <div className="flex flex-col">
                  <p className="font-bold text-sm md:text-base">
                    {pemain.name}
                  </p>
                  <p className="text-xs md:text-sm text-gray-600">
                    {pemain.role}
                  </p>
                </div>
                <p className="text-lg md:text-2xl font-bold">{pemain.no}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pemain;
