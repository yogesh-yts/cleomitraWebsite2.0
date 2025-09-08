"use client";

import FeaturesSection from "@/components/sections/FeaturesSection";
import FAQSection from "@/components/sections/FAQSection";
import ProductHero from "@/components/sections/ProductHero";
import ProductFeatureImages from "@/components/sections/ProductFeatureImages";

const CustomerManagementPage = () => {
  const customerManagementImages = [
    "/Products-features/customer management/customer management- centralized client profiles.png",
    "/Products-features/customer management/customer management- hero secrion.png",
    "/Products-features/customer management/customer management- integrated communication.png",
    "/Products-features/customer management/customer management- service & purchase history.png",
    "/Products-features/customer management/customer management- smart segmentation.png"
  ];

  const customerFAQs = [
    {
      question: "How does Cleomitra help me know my clients better?",
      answer:
        "Cleomitra provides comprehensive client profiles with detailed history, preferences, and interaction data to help you understand your clients better and provide personalized service.",
    },
    {
      question: "Can I customize client management features myself?",
      answer:
        "Yes, Cleomitra offers customizable client management features that you can tailor to your business needs and workflow preferences.",
    },
    {
      question: "Can I communicate with clients directly from Cleomitra?",
      answer:
        "Absolutely! Cleomitra provides integrated communication tools that allow you to interact with clients through multiple channels directly from the platform.",
    },
  ];

  return (
    <div className="bg-background">
      <main>
        <ProductHero
          title="Client management keeps every detail in one<br />place — and every experience personal."
          description="Maintain customer details organized and accessible with comprehensive client management tools."
        />
        <FeaturesSection />
        
        <ProductFeatureImages 
          images={customerManagementImages} 
          productName="Customer Management"
        />
        
        <FAQSection faqs={customerFAQs} />
      </main>
    </div>
  );
};

export default CustomerManagementPage;
