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

const AnimatedHeading = withAnimation(Heading);
const AnimatedPemain = withAnimation(Pemain);
const AnimatedJersey = withAnimation(Jersey);
const AnimatedContact = withAnimation(Contact);
const AnimatedGallery = withAnimation(Gallery);

const Home = () => {
  return (
    <div className="h-full">
      <Header />
      <div className="w-full h-[300px] md:h-[800px]">
        <img
          src={banner}
          alt="banner"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div id="heading">
        <AnimatedHeading />
      </div>
      <div id="pemain">
        <AnimatedPemain />
      </div>
      <div id="jersey">
        <AnimatedJersey />
      </div>
      <div id="contact">
        <AnimatedContact />
      </div>
      <div id="gallery">
        <AnimatedGallery />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
