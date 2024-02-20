"use client"

import Image from "next/image";
import CustomButton from "./CustomButton";
const Hero = () => {
    const handleScroll=() => {

    }
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Forge Your Strength with Me!</h1>
        <p className="hero__subtitle">
          Unleash your inner athlete with my comprehensive training platform.
          From personalized workout plans to expert guidance, I'll help you
          build strength and crush your fitness goals
        </p>
        <CustomButton
          title = "Explore program"
          containerStyles="bg-primary-blue 
          text-white rounded-full mt-10"
          handleClick = {() => {handleScroll}}
        />
      </div>
    </div>
  );
};

export default Hero;
