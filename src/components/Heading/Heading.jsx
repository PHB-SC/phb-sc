import React from "react";
import cingek from "../../assets/cingek.jpg";

const Heading = () => {
  return (
    <div className="p-4 md:p-9 bg-red-600 flex flex-col md:flex-row gap-4 md:gap-13">
      <div className="md:flex-[6] h-[300px] md:h-[500px] rounded-[12px] overflow-hidden">
        <img
          src={cingek}
          alt="foto_cinge"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="md:flex-[4] flex flex-col gap-4 p-2">
        <div className="flex justify-between items-center w-full">
          <p className="text-white/60 text-sm md:text-lg">14 Juli 2024</p>
          <div className="py-1 px-4 bg-white rounded-[4px]">
            <p className="text-sm md:text-base text-red-600">BERITA</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-lg md:text-2xl text-white font-bold uppercase">
            {`"Saya sangat senang" - reaksi Haikal 'CINGE' Yudha Prawira setelah bermain
            dalam debut pertamanya di Pemuda Harapan Bangsa Sports Club`}
          </h1>
          <p className="text-white font-light text-sm md:text-base">
            {`Haikal 'CINGE' Yudha Prawira merasa sangat gembira setelah permainan
            pertamanya untuk PHB SC meski ia mengalami kelelahan pegal linu,
            asam urat, mual mual. tetapi menurut dia pertandingan tadi sangat
            menarik`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Heading;
