"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
      <div className="flex-1 pt-36 padding-x">
        <h3 className="2xl:text-[72px] sm:text-[64px] text-[50px] text-black-100 font-extrabold">
          Forge Your Strength with Me!
        </h3>
        <p className="text-[27px] text-black-100 font-light mt-5">
          Unleash your inner athlete with my comprehensive training platform.
          From personalized workout plans to expert guidance, I'll help you
          build strength and crush your fitness goals
        </p>
        <CustomButton
          title="Explore program"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={() => {
            handleScroll;
          }}
        />
      </div>
      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
          <Image
            src="/hero.jpg"
            alt="Ana's pic"
            className="mt-20 object-contain rounded-lg"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
