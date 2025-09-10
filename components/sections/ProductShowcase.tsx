"use client";

import React from "react";
import GradientTextButton from "../ui/GradientTextButton";
import StartFreeTrialButton from "../ui/StartFreeTrialButton";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import "material-symbols/outlined.css";

export interface SliderData {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  name: string;
  stars: number;
  testimonial: string;
}

interface ProductShowcaseProps {
  backgroundColor: string;

  reverse?: boolean;

  gradientButtonText?: string;
  sliderData: SliderData[];
}

const ProductShowcase = ({
  backgroundColor = "bg-green",
  reverse = false,

  gradientButtonText = "Effectively oversee your inventory and analyse using Cleomitra",
  sliderData,
}: ProductShowcaseProps) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + sliderData.length) % sliderData.length
    );
  };

  const currentSlide = sliderData[activeSlide];
  return (
    <section className="container-responsive py-15">
      <GradientTextButton
        text={gradientButtonText}
        className="mb-9 text-center"
      />
      <div
        className={`flex flex-col md:flex-row gap-5 items-stretch ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Left div - Image with background */}
        <motion.div
          className={`flex flex-1 md:flex-[0.6] ${backgroundColor} py-15 pl-16 rounded-2xl`}
          initial={{
            x: reverse ? "-20vw" : "20vw",
            y: 0,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src={currentSlide.image}
            alt="Product Image"
            width={1010}
            height={1100}
            className="rounded-l-2xl w-full h-auto"
            quality={100}
          />
        </motion.div>

        {/* Right div - Content and testimonial sections */}
        <motion.div
          className="flex-1 md:flex-[0.4] flex flex-col gap-5"
          initial={{
            x: reverse ? "20vw" : "-20vw",
            y: 0,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex-1 flex flex-col space-y-4  bg-black rounded-2xl">
            <div className="p-5">
              <div className="flex items-center mb-4">
                {sliderData.map((slide, index) => (
                  <React.Fragment key={slide.id}>
                    <div
                      className={`w-12 h-12 ${
                        index === activeSlide ? backgroundColor : "bg-gray-400"
                      } rounded-lg flex items-center justify-center text-white font-bold cursor-pointer`}
                      onClick={() => setActiveSlide(index)}
                    >
                      {slide.id}
                    </div>
                    {index < sliderData.length - 1 && (
                      <div className="flex-1 h-0 border-t-2 border-dotted border-white/20 mx-4"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {currentSlide.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {currentSlide.subtitle}
                </p>
              </div>
            </div>
            <div className="p-5 bg-white/10">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className=" rounded-lg p-4 inline-block">
                    <div className="text-2xl font-bold text-white">40+</div>
                    <div className="text-gray-400 text-sm">Users</div>
                  </div>
                  <Image
                    src="/Group 608.png"
                    alt="Product Image"
                    width={1010}
                    height={1100}
                    className="rounded-lg w-28 h-10"
                    quality={100}
                  />
                </div>
              </div>
              {/* Bottom section - Profile with testimonial */}
              <div className="flex flex-row p-4 rounded-xl items-center justify-between gap-6 bg-gray/20 ">
                {/* Profile */}
                <div
                  className={`w-12 h-12 ${backgroundColor} rounded-full flex items-center justify-center text-white font-bold text-lg`}
                >
                  {currentSlide.name.charAt(0)}
                </div>

                <div className="">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-semibold text-white">
                      {currentSlide.name}
                    </span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`material-symbols-outlined text-base ${
                            i < currentSlide.stars
                              ? "text-yellow"
                              : "text-gray-500"
                          }`}
                        >
                          {i < currentSlide.stars ? "star" : "star_border"}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm max-w-md">
                    {currentSlide.testimonial}
                  </p>
                </div>
              </div>

              {/* Slider controls */}
            </div>
            <div className="flex  flex-row items-center justify-between  space-x-4 p-5">
              {/* Dot indicators */}
              <div className="flex space-x-2">
                {sliderData.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full cursor-pointer ${
                      index === activeSlide ? "bg-white" : "bg-gray-500"
                    }`}
                    onClick={() => setActiveSlide(index)}
                  ></div>
                ))}
              </div>

              {/* Arrow buttons */}
              <div className="flex space-x-2">
                <button
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-600"
                  onClick={prevSlide}
                >
                  <span className="material-symbols-outlined text-lg">
                    arrow_back
                  </span>
                </button>
                <button
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-600"
                  onClick={nextSlide}
                >
                  <span className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>

          <StartFreeTrialButton className="bg-foreground text-background hover:bg-gray-800 px-6 py-3 rounded-2xl w-full mt-auto">
            Start Free Trial Today
          </StartFreeTrialButton>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
