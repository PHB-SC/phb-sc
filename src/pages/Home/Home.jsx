import React from "react";
import {
  Contact,
  Footer,
  Gallery,
  Header,
  Heading,
  Jersey,
  Pemain,
  withAnimation,
} from "../../components";
import banner from "../../assets/banner_phb.png";

const AnimatedHeading = withAnimation(Heading, "left");
const AnimatedPemain = withAnimation(Pemain, "right");
const AnimatedJersey = withAnimation(Jersey, "left");
const AnimatedContact = withAnimation(Contact, "right");
const AnimatedGallery = withAnimation(Gallery, "left");

const Home = () => {
  return (
    <div className="h-full overflow-hidden">
      <Header />
      <div className="w-full bg-red-600  h-[300px] md:h-[800px]">
        <img
          src={banner}
          alt="banner"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div id="heading">
        <AnimatedHeading />
      </div>
      <div id="pemain" className="bg-white">
        <AnimatedPemain />
      </div>
      <div id="jersey" className="bg-white">
        <AnimatedJersey />
      </div>
      <div id="contact" className="bg-white">
        <AnimatedContact />
      </div>
      <div id="gallery" className="bg-white">
        <AnimatedGallery />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
