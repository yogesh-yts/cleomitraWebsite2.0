"use client";

import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ProductShowcase from "@/components/sections/ProductShowcase";
import StatisticsSection from "@/components/sections/StatisticsSection";

const HomePage = () => {
  return (
    <div className="bg-background">
      <HeroSection />

      <FeaturesSection />

      <ProductShowcase
        title="Make every message a business opportunity with Cleomitra"
        subtitle="Transform customer conversations into revenue-generating opportunities with our intelligent messaging platform."
        backgroundColor="bg-green-100"
        textColor="text-green-800"
        features={[
          "AI-powered conversation analysis",
          "Real-time opportunity detection",
          "Automated follow-up sequences",
          "Revenue tracking and analytics",
        ]}
      />

      <ProductShowcase
        title="Send Broadcast Emails that actually get customers with Cleomitra"
        subtitle="Create and send targeted email campaigns that drive engagement and conversions."
        backgroundColor="bg-red-100"
        textColor="text-red-800"
        reverse={true}
        features={[
          "Advanced segmentation tools",
          "A/B testing capabilities",
          "Deliverability optimization",
          "Comprehensive email analytics",
        ]}
      />

      <ProductShowcase
        title="Effectively oversee your inventory and analyse using Cleomitra"
        subtitle="Take complete control of your inventory with smart tracking and insightful analytics."
        backgroundColor="bg-blue-100"
        textColor="text-blue-800"
        features={[
          "Real-time inventory tracking",
          "Low stock alerts",
          "Demand forecasting",
          "Multi-location management",
        ]}
      />

      <ProductShowcase
        title="Communicate effectively with your customers using Cleomitra"
        subtitle="Build stronger relationships through seamless, multi-channel customer communication."
        backgroundColor="bg-purple-100"
        textColor="text-purple-800"
        reverse={true}
        features={[
          "Unified communication dashboard",
          "Multi-channel support",
          "Customer history tracking",
          "Response automation",
        ]}
      />

      <StatisticsSection />
    </div>
  );
};

export default HomePage;
