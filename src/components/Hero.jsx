import React from "react";
import { Typewriter } from "react-simple-typewriter";
import bgVideo from "../assets/background_telco.mp4";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden scroll-mt-24 md:scroll-mt-28"
    >
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
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/65 to-slate-950/75" />

      <div className="relative z-10 text-white">
        <div className="mx-auto flex h-screen w-full max-w-[980px] flex-col justify-center px-4 pt-24 text-center sm:px-6 md:pt-28">
          <p className="p-2 text-sm font-bold tracking-[0.16em] text-[#1c9bf0] sm:text-base">
            SCALING DESPITE NETWORK CHALLENGES
          </p>

          <h1 className="py-3 text-3xl font-bold leading-tight sm:py-4 sm:text-5xl md:py-6 md:text-7xl">
            Grow with network.
          </h1>

          <p className="text-xl font-semibold text-white/95 sm:text-3xl md:text-5xl">
            Increasing Efficiency for
          </p>

          <div className="mt-2 flex h-12 items-center justify-center sm:h-16 md:h-24">
            <span className="inline-flex min-w-[12ch] justify-center whitespace-nowrap text-[1.65rem] font-bold leading-tight text-[#1c9bf0] sm:text-4xl md:text-5xl">
              <Typewriter
                words={["Cell Towers", "Fiber Optics", "Data Centers"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={120}
                deleteSpeed={140}
                delaySpeed={1000}
              />
            </span>
          </div>

          <p className="mx-auto mt-2 max-w-3xl text-base font-medium leading-relaxed text-slate-200 sm:text-lg md:text-2xl">
            Maintaining and upgrading the physical infrastructure such as cell
            towers, fiber optics and data centers.
          </p>

          <button className="mx-auto my-8 w-[210px] rounded-full bg-[#1c9bf0] py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
