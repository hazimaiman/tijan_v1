import React from "react";
import { Typewriter } from "react-simple-typewriter";
import bgVideo from "../assets/background_telco.mp4";

const Hero = () => {
  return (
    // 👇 id="home" is the target; scroll-mt-* offsets the fixed navbar height
    <section
      id="home"
      className="relative min-h-screen overflow-hidden scroll-mt-24 md:scroll-mt-28"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-white">
        {/* ⛔ remove mt-[-96px]; ✅ use top padding to clear the navbar */}
        <div className="max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center pt-24 md:pt-28">
          <p className="text-[#1c9bf0] font-bold p-2">
            SCALING DESPITE NETWORK CHALLENGES
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            Grow with network.
          </h1>

          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
              Increase, Efficiently Telco for
            </p>
            <span className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2">
              <Typewriter
                words={["CT", "FB", "DC"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={120}
                deleteSpeed={140}
                delaySpeed={1000}
              />
            </span>
          </div>

          <p className="md:text-2xl text-xl font-bold text-gray-300">
            Maintaining and upgrading the Physical Infrastructure such as Cell
            Tower, Fiber Optics and Data Center
          </p>

          <button className="bg-[#1c9bf0] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
