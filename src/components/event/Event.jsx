import React from "react";

import { BiCalendar, BiMapPin } from "react-icons/bi";
import { BsClock, BsWhatsapp } from "react-icons/bs";
import { eventDetails } from "../../mock/event";
import { CiCircleInfo } from "react-icons/ci";
import moment from "moment";
const EventPoster = () => {
  const handleJoinGroup = () => {
    window.open("https://tinyurl.com/GroupPOSC", "_blank");
  };

  const now = moment();

  return (
    <div className="flex flex-col py-8 px-4 md:py-8 md:px-14 bg-primary">
      <p className="text-white font-bold text-xl md:text-2xl ">
        MAIN BARENG POSC
      </p>
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-center text-white">
        <div className="p-6 lg:w-[37.5rem] w-[25rem]">
          <img
            src={eventDetails.poster}
            alt="Event Poster"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="space-y-6 item justify-center flex flex-col">
          <h1 className="text-3xl text-center font-bold">
            {eventDetails.title}
          </h1>
          {eventDetails.isAvailable &&
          moment(eventDetails.date).isAfter(now) ? (
            <div className="bg-green-100 text-green-600 p-2 rounded-lg text-center">
              Available
            </div>
          ) : (
            <div className="bg-red-100 text-red-600 p-2 rounded-lg text-center">
              Closed
            </div>
          )}
          <div className="space-y-4 items-center lg:items-start flex flex-col">
            <div className="flex items-center gap-2">
              <BiMapPin className="text-white" />
              <span className="font-semibold">{eventDetails.location}</span>
            </div>

            <div className="flex items-center gap-2">
              <BiCalendar className="text-white" />
              <span className="font-semibold">
                {moment(eventDetails.date).format("dddd, DD MMMM YYYY")}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <BsClock className="text-white" />
              <span className="font-semibold">{eventDetails.time}</span>
            </div>
          </div>

          <div className="space-y-2 flex flex-col items-center lg:items-start">
            <h2 className="text-xl font-semibold">Registration Fees:</h2>
            <div className="pl-4">
              <p className="font-semibold">
                Goalkeeper: {eventDetails.fees.goalkeeper}
              </p>
              <p className="font-semibold">
                Player: {eventDetails.fees.player}
              </p>
            </div>
          </div>

          <div className="space-y-2 flex flex-col items-center lg:items-start">
            <h2 className="text-xl font-semibold">Includes:</h2>
            <div className="grid grid-cols-2 gap-2">
              {eventDetails.includes.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CiCircleInfo className="w-4 h-4 text-white" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleJoinGroup}
            className="w-full bg-green-500 text-white py-4 font-bold rounded-lg"
          >
            <div className="flex items-center gap-2 justify-center">
              <BsWhatsapp className="w-6 h-6" />
              <p>Join WhatsApp Group</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventPoster;
