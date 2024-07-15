import React from "react";
import {
  Contact,
  Footer,
  Header,
  Heading,
  Jersey,
  Pemain,
} from "../../components";

const Home = () => {
  return (
    <div className="h-full ">
      <Header />
      <Heading />
      <Pemain />
      <Jersey />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
