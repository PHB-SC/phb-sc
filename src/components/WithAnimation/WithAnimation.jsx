/* eslint-disable react/display-name */
import React from "react";
import { useInView } from "react-intersection-observer";
import "tailwindcss/tailwind.css";

const withAnimation = (Component) => {
  return (props) => {
    const { ref, inView } = useInView({
      triggerOnce: false,
      threshold: 0.1,
    });

    return (
      <div
        ref={ref}
        className={`transition-opacity duration-1000 transform ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Component {...props} />
      </div>
    );
  };
};

export default withAnimation;
