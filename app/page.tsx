"use client";

// import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ProductShowcase from "@/components/sections/ProductShowcase";
import StatisticsSection from "@/components/sections/StatisticsSection";
import HeroLg from "@/components/sections/HeroLg";
import Seo from "@/components/Seo";
import {
  whatsappSliderData,
  emailSliderData,
  inventorySliderData,
  socialMediaSliderData,
} from "@/data/homepage-data";

const HomePage = () => {
  return (
    <>
      <Seo
        title="Cleomitra - Best CRM Software in India"
        description="Best CRM in India for salon management, spa, and service providers. All-in-one CRM with WhatsApp integration, inventory management, billing, email marketing & scheduling."
        keywords="best crm in india, top crm solutions, affordable crm, best crm for salon, salon management crm, crm with whatsapp integration, crm with inventory management, crm for franchise management"
        url="https://www.cleomitra.com"
        siteName="Cleomitra"
      />
      <div className="bg-background relative w-full">
        {/* <HeroSection /> */}
        <HeroLg />
        <FeaturesSection
          imageAlt="Features Overview"
          imageSrc="/Homepage/Frame 30.svg"
        />
        <ProductShowcase
          backgroundColor="bg-green"
          sliderData={whatsappSliderData}
          gradientButtonText="Make every message a business opportunity with Cleomitra"
        />
        <ProductShowcase
          backgroundColor="bg-orange"
          sliderData={emailSliderData}
          reverse={true}
          gradientButtonText="Send Broadcast Emails that actually get customers with Cleomitra"
        />{" "}
        <ProductShowcase
          backgroundColor="bg-blue"
          sliderData={inventorySliderData}
          gradientButtonText="Effectively oversee your inventory and analyse using Cleomitra"
        />{" "}
        <ProductShowcase
          backgroundColor="bg-maroon"
          sliderData={socialMediaSliderData}
          reverse={true}
          gradientButtonText="Communicate effectively with your customers using Cleomitra"
        />
        <StatisticsSection />
      </div>
    </>
  );
};

export default HomePage;
