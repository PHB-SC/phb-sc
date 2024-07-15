import React from "react";
import foto from "../../assets/main/dapa_jingkrak.jpg";
import { MdEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="py-16 px-4 md:py-[100px] md:px-8 flex flex-col md:flex-row gap-8 md:gap-[100px] items-center">
      <div className="w-full md:w-1/2 h-64 md:h-[300px] bg-red-50 rounded-r-full overflow-hidden">
        <img
          src={foto}
          alt="dapa jingkrak"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-5 md:gap-[20px] text-center md:text-left">
        <div>
          <p className="text-2xl md:text-3xl font-bold">
            Ingin Bermain Bersama / Melawan Kami?
          </p>
          <p className="text-base md:text-lg font-normal">
            Kontak kami jika ingin bermain bersama / melawan kami
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-2 items-center justify-center md:justify-start">
          <div
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&to=pemudaharapanbangsa2@gmail.com&su=Bermain%20Bersama%20PHB&body=Halo%20Saya%20ingin%20Bermain%20Bersama/Melawan",
              )
            }
            className="p-4 md:p-[20px] flex flex-row gap-2 md:gap-[10px] items-center bg-red-600 rounded-lg cursor-pointer"
          >
            <MdEmail size={30} className="text-white" />
            <p className="text-white font-bold">Email PHB SC</p>
          </div>

          <div
            onClick={() => window.open("https://www.instagram.com/phb.sc/")}
            className="p-4 md:p-[20px] flex flex-row gap-2 md:gap-[10px] items-center bg-red-600 rounded-lg cursor-pointer"
          >
            <BsInstagram size={30} className="text-white" />
            <p className="text-white font-bold">Instagram PHB SC</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
