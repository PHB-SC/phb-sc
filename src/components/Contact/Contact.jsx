import React from "react";
import foto from "../../assets/main/goal.jpg";
import { MdWhatsapp } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="py-16 px-4 md:py-[100px] md:px-8 flex flex-col md:flex-row gap-8 md:gap-[100px] items-center">
      <div className="w-full md:w-1/2 h-64 md:h-[300px] bg-red-50 rounded-r-full overflow-hidden">
        <img
          src={foto}
          alt="dapa jingkrak"
          className="w-full h-full object-cover object-top"
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
              window.open("https://chat.whatsapp.com/GG0WneB0WM7AHzYkKTos3C")
            }
            className="p-4 md:p-[20px] flex flex-row gap-2 md:gap-[10px] items-center bg-primary rounded-lg cursor-pointer"
          >
            <MdWhatsapp size={30} className="text-white" />
            <p className="text-white font-bold">Join Group POSC</p>
          </div>

          <div
            onClick={() =>
              window.open(
                "https://www.instagram.com/pemudaolahraga.sc?igsh=MWJ6NGU5ZzEwcGcyYw==",
              )
            }
            className="p-4 md:p-[20px] flex flex-row gap-2 md:gap-[10px] items-center bg-primary rounded-lg cursor-pointer"
          >
            <BsInstagram size={30} className="text-white" />
            <p className="text-white font-bold">Instagram POSC</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
