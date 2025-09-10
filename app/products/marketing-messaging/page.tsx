"use client";
import ProductHero from "../../../components/sections/ProductHero";
import FeaturesSection from "../../../components/sections/FeaturesSection";
import FAQSection from "../../../components/sections/FAQSection";
import ProductFeatureImages from "../../../components/sections/ProductFeatureImages";
import StatisticsSection from "../../../components/sections/StatisticsSection";

export default function MarketingMessagingPage() {
  const marketingMessagingImages = [
    "/Products-features/marketing & marketing/marketing and messaging-automated remiinder & followups.png",
    "/Products-features/marketing & marketing/marketing and messaging-bulk messaging & broadcasting.png",
    "/Products-features/marketing & marketing/marketing and messaging-personalized campaigns.png",
    "/Products-features/marketing & marketing/marketing and messaging-real time insights.png",
  ];

  const marketingFAQs = [
    {
      question: "How does email campaign automation work?",
      answer:
        "Our system allows you to set up automated email sequences based on customer behavior, preferences, and lifecycle stages to maximize engagement.",
    },
    {
      question: "Can I segment my audience for targeted messaging?",
      answer:
        "Yes, you can create detailed customer segments based on demographics, behavior, purchase history, and engagement to send highly targeted messages.",
    },
    {
      question: "What messaging channels are supported?",
      answer:
        "We support email, SMS, WhatsApp, social media messaging, and in-app notifications to reach customers on their preferred channels.",
    },
  ];

  return (
    <div className="bg-background">
      <main>
        <ProductHero
          title={`Marketing that connects — and 
            messaging that converts.`}
          description={`Reach your clients where they are. With Cleomitra, you can broadcast
             offers, send reminders, and personalize campaigns across WhatsApp,
              Instagram, email, and SMS — all from one platform.`}
        />
        <FeaturesSection
          imageSrc="/Products-features/marketing & marketing/marketing and messaging-hero section.png"
          imageAlt="Marketing & Messaging Feature Overview"
        />

        <ProductFeatureImages
          images={marketingMessagingImages}
          productName="Marketing & Messaging"
        />

        <FAQSection faqs={marketingFAQs} />

        <StatisticsSection />
      </main>
    </div>
  );
}
