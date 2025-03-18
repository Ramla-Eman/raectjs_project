import React from "react";
import heroImg from "../assets/phone.svg";

const Hero = ({ myTheme }) => {
  return (
    <section data-theme={myTheme}>
      <div className="bg-[var(--background)] py-[7rem] flex flex-col md:flex-row items-center justify-between gap-5 sm:px-[7rem] px-2">
        <div className="text-[var(--foreground)] lg:w-[45%] flex flex-col gap-2">
          <h1 className="font-semibold text-5xl">
            Visit Vila Shop Landing Page.
          </h1>
          <p className="text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            perferendis eveniet animi in, voluptas cumque iste eius recusandae
            illo incidunt?
          </p>
          <div className="flex gap-4">
            <button className="bg-[var(--foreground)] text-[var(--background)] rounded-[3px] px-[8px] py-[6px] text-xl">
              Learn More
            </button>
            <button className="rounded-[3px] px-[8px] py-[6px] text-xl text-white bg-[#EE400B]">Sign Up</button>
          </div>
        </div>
        <div>
          <img src={heroImg} alt="Phone" width={200} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
