"use client";
import ProductHero from "../../../components/sections/ProductHero";
import FeaturesSection from "../../../components/sections/FeaturesSection";
import FAQSection from "../../../components/sections/FAQSection";
import ProductFeatureImages from "../../../components/sections/ProductFeatureImages";

export default function MarketingMessagingPage() {
  const marketingMessagingFeatures = [
    {
      image:
        "/Products-features/marketing & marketing/marketing and messaging-bulk messaging & broadcasting.png",
      heading: "Bulk Messaging & Broadcasting",
      description:
        "Reach hundreds of clients instantly with offers, reminders, and updates, without juggling multiple apps.",
    },
    {
      image:
        "/Products-features/marketing & marketing/marketing and messaging-personalized campaigns.png",
      heading: "Personalized Campaigns",
      description:
        "Segment clients by preferences, habits, or history to send targeted messages that truly resonate.",
    },
    {
      image:
        "/Products-features/marketing & marketing/marketing and messaging-automated remiinder & followups.png",
      heading: "Automated Reminders & Follow-ups",
      description:
        "Never miss a touchpoint — from appointment confirmations to post-service follow-ups, Cleomitra keeps clients engaged.",
    },

    {
      image:
        "/Products-features/marketing & marketing/marketing and messaging-real time insights.png",
      heading: "Real-Time Campaign Insights",
      description:
        "Track campaign performance with detailed analytics and real-time insights. Monitor open rates, click-through rates, conversions, and customer engagement to optimize your marketing strategies effectively.",
    },
  ];

  const marketingFAQs = [
    {
      question:
        "Can I send WhatsApp and Instagram messages directly from Cleomitra?",
      answer:
        "Absolutely! Cleomitra provides native integration with WhatsApp Business API and Instagram messaging, allowing you to send messages, create broadcast campaigns, and manage conversations directly from our unified platform without switching between multiple apps or tools.",
    },
    {
      question: "How does Cleomitra personalize marketing?",
      answer:
        "Cleomitra uses customer data, purchase history, preferences, and behavior patterns to create highly personalized marketing campaigns. Our smart segmentation automatically groups customers based on their interests, spending habits, and engagement levels, ensuring each message is tailored and relevant to the recipient.",
    },
    {
      question: "Will I know if my campaigns are working?",
      answer:
        "Yes! Cleomitra provides comprehensive real-time analytics and campaign insights. You can track open rates, click-through rates, conversion rates, response rates, and customer engagement metrics. Our detailed reporting helps you understand what's working and optimize your campaigns for better results.",
    },
  ];

  return (
    <div className="bg-background pb-10">
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

      </main>
    </div>
  );
}
