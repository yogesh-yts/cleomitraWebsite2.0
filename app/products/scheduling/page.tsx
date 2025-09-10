"use client";

import FeaturesSection from "../../../components/sections/FeaturesSection";
import FAQSection from "../../../components/sections/FAQSection";
import ProductHero from "../../../components/sections/ProductHero";
import ProductFeatureImages from "../../../components/sections/ProductFeatureImages";
import StatisticsSection from "../../../components/sections/StatisticsSection";

export default function SchedulingPage() {
  const schedulingImages = [
    "/Products-features/scheduling/scheduling-automated reminders.png",
    "/Products-features/scheduling/Scheduling-integrated payments & invoices.png",
    "/Products-features/scheduling/Scheduling-smart calender view.png",
    "/Products-features/scheduling/scheduling-team availabilty management.png",
  ];

  const schedulingFAQs = [
    {
      question: "How does Cleomitra scheduling help clients?",
      answer:
        "Cleomitra's scheduling system provides clients with easy booking options, calendar synchronization, and automated reminders to ensure they never miss appointments.",
    },
    {
      question: "Can I manage staff and resources easily?",
      answer:
        "Yes, our scheduling system allows you to manage multiple staff members, resources, and locations from a single dashboard with real-time availability updates.",
    },
    {
      question: "How does scheduling connect with other features?",
      answer:
        "Scheduling integrates seamlessly with customer management, billing, and communication features to provide a complete business management solution.",
    },
  ];

  return (
    <div className="bg-background">
      <main>
        <ProductHero
          title={`Scheduling: Keep Your Calendar in 
Sync and Your Clients on Time`}
          description={`Simplify bookings with a clean calendar view,
             automated reminders, and smart scheduling tools — 
             all in one place.`}
        />

        <FeaturesSection
          imageSrc="/Products-features/scheduling/scheduling-hero section.png"
          imageAlt="Scheduling Feature Overview"
        />

        <ProductFeatureImages
          images={schedulingImages}
          productName="Scheduling"
        />

        <FAQSection faqs={schedulingFAQs} />

        <StatisticsSection />
      </main>
    </div>
  );
}
