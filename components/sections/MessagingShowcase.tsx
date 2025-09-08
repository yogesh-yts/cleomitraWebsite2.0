"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import ProductShowcaseSlider from "../ui/ProductShowcaseSlider";
import { messagingShowcaseData } from "../../data/showcaseData";

const MessagingShowcase = () => {
  return (
    <ProductShowcaseSlider
      gradientText="All messages in a single location"
      backgroundColor="bg-green-500"
      buttonText="Start Free Trail Today"
      buttonIcon={<ArrowRight className="w-5 h-5" />}
      slides={messagingShowcaseData}
    />
  );
};

export default MessagingShowcase;