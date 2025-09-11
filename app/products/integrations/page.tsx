"use client";

import ProductHero from "../../../components/sections/ProductHero";
import FAQSection from "../../../components/sections/FAQSection";
import StatisticsSection from "../../../components/sections/StatisticsSection";
import IntegrationsGrid from "../../../components/sections/IntegrationsGrid";

export default function IntegrationsPage() {
  // const integrationsImages = [
  //   "/Products-features/integrations/exotel.png",
  //   "/Products-features/integrations/gmail.png",
  //   "/Products-features/integrations/instagram.png",
  //   "/Products-features/integrations/twilio.png",
  //   "/Products-features/integrations/whatsapp.png",
  // ];

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
          title={`Integrations help you optimize
your sales workflow`}
          description={`With Cleomitra, every integration is
built to simplify workflows and
enhance client experience.`}
        />

        <IntegrationsGrid />

        <FAQSection faqs={integrationsFAQs} />

        <StatisticsSection />
      </main>
    </div>
  );
}
