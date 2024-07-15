import React from "react";
import game1 from "../../assets/gallery/game-1/p1.jpg";
import { BiImage } from "react-icons/bi";

const GalleryCard = ({
  title = "PANENKA FUN FOOTBALL",
  match = "GAME 1",
  date = "14 Juli 2024",
  thumbnail = game1,
  length = "9",
  onClick = () => {},
}) => {
  return (
    <div
      onClick={onClick}
      className=" bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
    >
      <div className="relative">
        <img src={thumbnail} alt="Match" className="w-full h-48 object-cover" />
        <div className="absolute top-0 left-0 m-2 bg-red-600 text-white rounded-full px-2 py-1 text-xs items-center flex">
          <BiImage size={18} className="inline-block w-4 h-4 mr-1" />
          <span>{length}</span>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <div className="flex flex-row justify-between">
          <p className=" text-gray-600">{match}</p>

          <p className="text-gray-600">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
