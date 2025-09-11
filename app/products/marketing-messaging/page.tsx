"use client";
import ProductHero from "../../../components/sections/ProductHero";
import FeaturesSection from "../../../components/sections/FeaturesSection";
import FAQSection from "../../../components/sections/FAQSection";
import ProductFeatureImages from "../../../components/sections/ProductFeatureImages";
import StatisticsSection from "../../../components/sections/StatisticsSection";

export default function MarketingMessagingPage() {
  const marketingMessagingFeatures = [
    {
      image: "/Products-features/marketing & marketing/marketing and messaging-automated remiinder & followups.png",
      heading: "Automated Reminders & Follow-ups",
      description: "Set up intelligent automated reminders for appointments, payments, and follow-ups. Reduce no-shows, improve customer retention, and maintain engagement with personalized automated messaging sequences."
    },
    {
      image: "/Products-features/marketing & marketing/marketing and messaging-bulk messaging & broadcasting.png",
      heading: "Bulk Messaging & Broadcasting",
      description: "Reach thousands of customers instantly with targeted bulk messaging campaigns. Send promotional offers, announcements, and updates across multiple channels including WhatsApp, SMS, and email simultaneously."
    },
    {
      image: "/Products-features/marketing & marketing/marketing and messaging-personalized campaigns.png",
      heading: "Personalized Campaigns",
      description: "Create highly targeted marketing campaigns using customer data and behavior insights. Deliver personalized content that resonates with individual customers, increasing engagement and conversion rates."
    },
    {
      image: "/Products-features/marketing & marketing/marketing and messaging-real time insights.png",
      heading: "Real-Time Campaign Insights",
      description: "Track campaign performance with detailed analytics and real-time insights. Monitor open rates, click-through rates, conversions, and customer engagement to optimize your marketing strategies effectively."
    },
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
          features={marketingMessagingFeatures}
          productName="Marketing & Messaging"
        />

        <FAQSection faqs={marketingFAQs} />

        <StatisticsSection />
      </main>
    </div>
  );
}
