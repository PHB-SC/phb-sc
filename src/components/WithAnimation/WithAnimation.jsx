/* eslint-disable react/display-name */
import React from "react";
import { useInView } from "react-intersection-observer";
import "tailwindcss/tailwind.css";

const withAnimation = (Component, direction = "left") => {
  return (props) => {
    const { ref, inView } = useInView({
      triggerOnce: false,
      threshold: 0.1,
    });

    // Set the initial and final transform states based on the direction
    const initialTransform =
      direction === "left" ? "-translate-x-10" : "translate-x-10";
    const finalTransform = "translate-x-0";

    return (
      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          inView
            ? `opacity-100 ${finalTransform}`
            : `opacity-0 ${initialTransform}`
        }`}
      >
        <Component {...props} />
      </div>
    );
  };
};

export default withAnimation;
