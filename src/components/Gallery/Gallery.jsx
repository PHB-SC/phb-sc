import React from "react";
import { GalleryCard } from "../GalleryCard";
import { GalleryData } from "../../mock/gallery";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();
  return (
    <div className="py-8 px-4 md:py-8 md:px-14 flex flex-col gap-10">
      <p className="text-red-600 font-bold text-xl md:text-[40px] text-center">
        PHB GALLERY
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-[20px] md:gap-[40px]">
        {GalleryData.map((item, index) => (
          <GalleryCard
            key={index}
            {...item}
            length={item.images.length}
            onClick={() => navigate(`/gallery/${item.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
