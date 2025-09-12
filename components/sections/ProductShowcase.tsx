"use client";

import React from "react";
import GradientTextButton from "../ui/GradientTextButton";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import "material-symbols/outlined.css";
import ButtonWithIcon from "../ui/ButtonWithIcon";

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
        className={`flex flex-col lg:flex-row gap-5 items-stretch ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Left div - Image with background */}
        <motion.div
          className={`flex flex-1 lg:flex-[0.6] ${backgroundColor} py-15 pl-16 rounded-2xl`}
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
          className="flex-1 lg:flex-[0.4] flex flex-col gap-5 "
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
          <div className="flex-1 flex flex-col space-y-4  bg-black rounded-2xl pt-4 pb-2">
            <div className="p-5">
              <div className="flex items-center mb-4">
                {sliderData.map((slide, index) => (
                  <React.Fragment key={slide.id}>
                    <button
                      className={`w-12 h-12 ${
                        index === activeSlide ? backgroundColor : "bg-gray-400"
                      } rounded-lg flex items-center justify-center text-white font-bold cursor-pointer`}
                      onClick={() => setActiveSlide(index)}
                      aria-label={`View ${slide.title} slide`}
                      aria-pressed={index === activeSlide}
                    >
                      <span aria-hidden="true">{slide.id}</span>
                    </button>
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
                <p className="text-gray-300 text-sm ">
                  {currentSlide.subtitle}
                </p>
              </div>
            </div>
            <div className="px-5 bg-white/10 pb-8 pt-2">
              <div className="space-y-4">
                <div className="flex justify-between items-center leading-normal">
                  <div className=" rounded-lg py-4 inline-block">
                    <div className="text-2xl font-bold text-white">40+</div>
                    <div className="text-gray-400 text-sm">Users</div>
                  </div>
                  <div
                    className="w-28 h-10 relative rounded-lg"
                    role="img"
                    aria-label="User avatars animation"
                  >
                    {[0.3, 0.4, 0.5, 0.6].map((opacity, index) => (
                      <div
                        key={index}
                        className={`w-10 h-10 absolute top-0 rounded-lg bg-gray-300 animate-pulse`}
                        style={{
                          left: `${index * 24}px`,
                          opacity,
                          animationDelay: `${index * 0.2}s`,
                          animationDuration: "2s",
                        }}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              </div>
              {/* Bottom section - Profile with testimonial */}
              <div className="flex flex-row p-4 rounded-xl items-start justify-between gap-6 bg-gray/20 ">
                {/* Profile */}
                <div
                  className={`w-12 h-12 ${backgroundColor} rounded-lg flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}
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
            <div className="flex  flex-row items-center justify-between  space-x-4 p-5 mt-auto">
              {/* Dot indicators */}
              <div className="flex space-x-2">
                {sliderData.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full cursor-pointer ${
                      index === activeSlide ? "bg-white" : "bg-gray-500"
                    }`}
                    onClick={() => setActiveSlide(index)}
                  ></div>
                ))}
              </div>

              {/* Arrow buttons */}
              <div className="flex space-x-2">
                <button
                  className="w-10 h-10  rounded-full flex items-center justify-center text-white hover:bg-white/20 border-1 border-white/20"
                  onClick={prevSlide}
                >
                  <span className="material-symbols-outlined text-lg">
                    arrow_back
                  </span>
                </button>
                <button
                  className="w-10 h-10  rounded-full flex items-center justify-center text-white hover:bg-white/20 border-1 border-white/20"
                  onClick={nextSlide}
                >
                  <span className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>

          <ButtonWithIcon
            text="Start Free Trial Today"
            className="bg-black text-white w-full"
            href="/contact"
            iconBg="bg-white/20"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
