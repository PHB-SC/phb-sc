import React from "react";
import {
  Contact,
  Footer,
  Gallery,
  Header,
  Heading,
  Jersey,
  Pemain,
} from "../../components";

const Home = () => {
  return (
    <div className="h-full ">
      <Header />
      <div id="heading">
        <Heading />
      </div>
      <div id="pemain">
        <Pemain />
      </div>
      <div id="jersey">
        <Jersey />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
