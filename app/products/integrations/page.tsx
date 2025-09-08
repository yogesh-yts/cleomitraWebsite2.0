"use client";

import { motion } from "framer-motion";
import ProductHero from "../../../components/sections/ProductHero";
import FeaturesSection from "../../../components/sections/FeaturesSection";
import FAQSection from "../../../components/sections/FAQSection";
import ProductFeatureImages from "../../../components/sections/ProductFeatureImages";

export default function IntegrationsPage() {
  const integrationsImages = [
    "/Products-features/integrations/exotel.png",
    "/Products-features/integrations/gmail.png",
    "/Products-features/integrations/instagram.png",
    "/Products-features/integrations/twilio.png",
    "/Products-features/integrations/whatsapp.png"
  ];

  const integrationsFAQs = [
    {
      question: "How many integrations does Cleomitra support?",
      answer:
        "Cleomitra supports over 100+ popular integrations including payment processors, email services, social media platforms, and business tools.",
    },
    {
      question: "How long does it take to set up integrations?",
      answer:
        "Most integrations can be set up in seconds with our one-click connection system. Complex integrations typically take just a few minutes.",
    },
    {
      question: "Can I create custom integrations?",
      answer:
        "Yes, we provide API access and webhook support to create custom integrations tailored to your specific business needs.",
    },
  ];

  return (
    <div className="bg-background">
      <main>
        <ProductHero 
          title="Connect everything you use<br />in seconds, not hours."
          description="Integrations you can connect to cleomitra in seconds with our extensive library of business tools."
        />

        <FeaturesSection />
        
        <ProductFeatureImages 
          images={integrationsImages} 
          productName="Integrations"
        />
        
        <FAQSection faqs={integrationsFAQs} />
      </main>
    </div>
  );
}
