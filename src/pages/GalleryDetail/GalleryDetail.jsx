import React from "react";
import { Footer, Header } from "../../components";
import { useLocation } from "react-router-dom";
import { GalleryData } from "../../mock/gallery";

const GalleryDetail = () => {
  const location = useLocation();

  const id = location.pathname.split("/").pop();

  const selectedData = GalleryData.find((item) => item.id === id);

  const [selectedImage, setSelectedImage] = React.useState({
    image: selectedData.images[0],
    index: 0,
  });

  return (
    <div className="h-screen">
      <Header />
      <div className="flex flex-col md:flex-row gap-6 md:gap-[30px] px-4 md:px-[300px] py-6 md:py-[30px]">
        <div className="flex flex-col bg-blue-300 w-full md:w-[70%]">
          <div className="h-[300px] md:h-[525px]">
            <img
              src={selectedImage.image}
              alt="main"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 md:p-[16px] bg-red-600 flex flex-row gap-4 md:gap-[30px] overflow-x-auto">
            {selectedData.images.map((item, index) => (
              <div
                key={index}
                className={`w-[120px] h-[90px] md:w-[213px] md:h-[170px] flex-shrink-0 cursor-pointer ${
                  selectedImage.index === index &&
                  "border-[3px] border-[#9C824A] opacity-80"
                }`}
                onClick={() =>
                  setSelectedImage({
                    image: item,
                    index: index,
                  })
                }
              >
                <img
                  src={item}
                  alt="thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 md:gap-[15px] justify-center">
          <h1 className="text-xl md:text-2xl font-bold text-red-600">
            {selectedData.title}
          </h1>
          <p className="text-gray-600 font-semibold">{selectedData.date}</p>
          <p className="text-black">Match: {selectedData.match}</p>
          <p>Score: {selectedData.score}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GalleryDetail;
