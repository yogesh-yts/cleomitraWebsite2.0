"use client";

import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ProductShowcase, {
  SliderData,
} from "@/components/sections/ProductShowcase";
import StatisticsSection from "@/components/sections/StatisticsSection";

const HomePage = () => {
  const sliderData: SliderData[] = [
    {
      id: 1,
      image: "/Homepage/Home page-business opportunity-1.png",
      title: "All messages in a single location.",
      subtitle:
        "Access all your chats from WhatsApp, Instagram, and your contacts seamlessly on a single screen, using any account you prefer.",
      name: "Swathy",
      stars: 5,
      testimonial:
        "Increased customer engagement by utilizing targeted email templates recommended by Cleomitra.",
    },
    {
      id: 2,
      image: "/Homepage/Home page-business opportunity-2.png",
      title: "Advanced Analytics Dashboard",
      subtitle:
        "Monitor your business performance with real-time analytics and comprehensive reporting tools.",
      name: "Rajesh",
      stars: 4,
      testimonial:
        "The analytics helped us identify key growth opportunities and improve our conversion rates significantly.",
    },
    {
      id: 3,
      image: "/Homepage/Home page-business opportunity-3.png",
      title: "Automated Marketing Campaigns",
      subtitle:
        "Create and manage automated marketing campaigns that drive engagement and boost sales.",
      name: "Priya",
      stars: 4,
      testimonial:
        "Automation saved us hours of manual work while delivering better results than ever before.",
    },
  ];

  return (
    <div className="bg-background">
      <HeroSection />
      <FeaturesSection
        imageAlt="Features Overview"
        imageSrc="/Homepage/Homepage hero sec.png"
      />
      <ProductShowcase
        backgroundColor="bg-green"
        sliderData={sliderData}
        gradientButtonText="Make every message a business opportunity with Cleomitra"
      />
      <ProductShowcase
        backgroundColor="bg-orange"
        sliderData={sliderData}
        reverse={true}
        gradientButtonText="Send Broadcast Emails that actually get customers with Cleomitra"
      />{" "}
      <ProductShowcase
        backgroundColor="bg-blue"
        sliderData={sliderData}
        gradientButtonText="Effectively oversee your inventory and analyse using Cleomitra"
      />{" "}
      <ProductShowcase
        backgroundColor="bg-maroon"
        sliderData={sliderData}
        reverse={true}
        gradientButtonText="Communicate effectively with your customers using Cleomitra"
      />
      <StatisticsSection />
    </div>
  );
};

export default HomePage;
