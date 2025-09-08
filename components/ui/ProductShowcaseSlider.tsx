"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GradientTextButton from "./GradientTextButton";

interface SlideData {
  stepNumber: string;
  title: string;
  description: string;
  userCount: string;
  userLabel: string;
  testimonial: {
    name: string;
    rating: number;
    review: string;
    avatar: string;
  };
}

interface ProductShowcaseSliderProps {
  gradientText: string;
  backgroundColor: string;
  buttonText: string;
  buttonIcon?: React.ReactNode;
  slides: SlideData[];
}

const ProductShowcaseSlider = ({
  gradientText,
  backgroundColor,
  buttonText,
  buttonIcon,
  slides,
}: ProductShowcaseSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-yellow-400 ${index < rating ? "★" : "☆"}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="container-responsive section-spacing">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <motion.div
          className={`${backgroundColor} p-12 rounded-2xl`}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <GradientTextButton 
              text={gradientText} 
              className="mb-8 text-white"
            />
          </div>
        </motion.div>

        {/* Right Side - Slider */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Top Box - Slider Content */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border">
            {/* Step Number */}
            <div className="flex items-center mb-6">
              <div
                className={`${backgroundColor} text-white rounded-lg px-4 py-2 font-bold text-lg mr-4`}
              >
                {slides[currentSlide].stepNumber}
              </div>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-foreground mb-3">
              {slides[currentSlide].title}
            </h3>
            <p className="text-gray-600 mb-6">
              {slides[currentSlide].description}
            </p>

            {/* User Count */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-3xl font-bold text-foreground">
                  {slides[currentSlide].userCount}
                </div>
                <div className="text-gray-500 text-sm">
                  {slides[currentSlide].userLabel}
                </div>
              </div>
              <div className="flex space-x-2">
                {Array.from({ length: 4 }, (_, index) => (
                  <div
                    key={index}
                    className={`w-4 h-8 rounded ${
                      index <= currentSlide ? "bg-gray-400" : "bg-gray-200"
                    }`}
                  ></div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  {slides[currentSlide].testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {slides[currentSlide].testimonial.name}
                  </div>
                  <div className="flex">
                    {renderStars(slides[currentSlide].testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                {slides[currentSlide].testimonial.review}
              </p>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === currentSlide ? "bg-gray-800" : "bg-gray-300"
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Box - CTA Button */}
          <button className="w-full bg-gray-800 text-white py-4 px-6 rounded-2xl flex items-center justify-center space-x-3 hover:bg-gray-900 transition-colors">
            <span className="text-lg font-semibold">{buttonText}</span>
            {buttonIcon && <span>{buttonIcon}</span>}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcaseSlider;