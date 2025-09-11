"use client";

import FeaturesSection from "../../../components/sections/FeaturesSection";
import FAQSection from "../../../components/sections/FAQSection";
import ProductHero from "../../../components/sections/ProductHero";
import ProductFeatureImages from "../../../components/sections/ProductFeatureImages";
import StatisticsSection from "../../../components/sections/StatisticsSection";

export default function SchedulingPage() {
  const schedulingFeatures = [
    {
      image: "/Products-features/scheduling/Scheduling-smart calender view.png",
      heading: "Smart Calendar View",
      description: "Get a comprehensive overview of your schedule with our intuitive calendar interface. Easily manage appointments, view availability, and organize your time efficiently with drag-and-drop functionality and multiple calendar views."
    },
    {
      image: "/Products-features/scheduling/scheduling-automated reminders.png",
      heading: "Automated Reminders",
      description: "Never miss an appointment again with intelligent automated reminders. Send customizable SMS, email, and WhatsApp notifications to clients, reducing no-shows by up to 80% and improving client satisfaction."
    },
    {
      image: "/Products-features/scheduling/Scheduling-integrated payments & invoices.png",
      heading: "Integrated Payments & Invoices",
      description: "Streamline your billing process with built-in payment processing and automated invoice generation. Accept payments at booking, send invoices automatically, and track payment status all within your scheduling system."
    },
    {
      image: "/Products-features/scheduling/scheduling-team availabilty management.png",
      heading: "Team Availability Management",
      description: "Coordinate your entire team's schedule effortlessly. Manage staff availability, assign appointments, track working hours, and ensure optimal resource allocation across multiple locations and service providers."
    },
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
          features={schedulingFeatures}
          productName="Scheduling"
        />

        <FAQSection faqs={schedulingFAQs} />

        <StatisticsSection />
      </main>
    </div>
  );
}
