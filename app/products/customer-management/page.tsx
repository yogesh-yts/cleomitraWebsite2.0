"use client";

import FeaturesSection from "@/components/sections/FeaturesSection";
import FAQSection from "@/components/sections/FAQSection";
import ProductHero from "@/components/sections/ProductHero";
import ProductFeatureImages from "@/components/sections/ProductFeatureImages";
import StatisticsSection from "@/components/sections/StatisticsSection";

const CustomerManagementPage = () => {
  const customerManagementFeatures = [
    {
      image: "/Products-features/customer management/customer management- centralized client profiles.png",
      heading: "Centralized Client Profiles",
      description: "Maintain comprehensive client profiles with all essential information in one place. Store contact details, preferences, notes, and interaction history to provide personalized service and build stronger customer relationships."
    },
    {
      image: "/Products-features/customer management/customer management- integrated communication.png",
      heading: "Integrated Communication Hub",
      description: "Communicate with clients seamlessly through multiple channels including WhatsApp, email, SMS, and phone calls, all from within their profile. Keep all conversations organized and accessible in one central location."
    },
    {
      image: "/Products-features/customer management/customer management- service & purchase history.png",
      heading: "Service & Purchase History",
      description: "Access complete service and purchase history for every client. Track past appointments, services rendered, products purchased, and payment history to provide informed recommendations and better customer service."
    },
    {
      image: "/Products-features/customer management/customer management- smart segmentation.png",
      heading: "Smart Customer Segmentation",
      description: "Automatically segment customers based on behavior, preferences, spending patterns, and engagement levels. Create targeted marketing campaigns, personalized offers, and tailored communication strategies for different customer groups."
    },
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
          title={`Client management keeps every detail in one place — and every experience personal.`}
          description={`Keep every client detail — from contact info to service history — in one place. With Cleomitra, you can turn first-time visitors into loyal clients.`}
        />
        <FeaturesSection
          imageSrc="/Products-features/customer management/customer management- hero secrion.png"
          imageAlt="Customer Management Feature Overview"
        />

        <ProductFeatureImages
          features={customerManagementFeatures}
          productName="Customer Management"
        />

        <FAQSection faqs={customerFAQs} />

        <StatisticsSection />
      </main>
    </div>
  );
};

export default CustomerManagementPage;
