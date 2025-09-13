"use client";

import FeaturesSection from "../../../components/sections/FeaturesSection";
import FAQSection from "../../../components/sections/FAQSection";
import ProductHero from "../../../components/sections/ProductHero";
import ProductFeatureImages from "../../../components/sections/ProductFeatureImages";
import Seo from "../../../components/Seo";

export default function SchedulingPage() {
  const schedulingFeatures = [
    {
      image: "/Products-features/scheduling/Scheduling-smart calender view.png",
      heading: "Smart Calendar View",
      description:
        "See all appointments at a glance with day, week, and month views. Quickly identify available slots and manage bookings with ease.",
    },
    {
      image: "/Products-features/scheduling/scheduling-automated reminders.png",
      heading: "Automated Reminders",
      description:
        "Reduce no-shows by sending instant confirmations and timely reminders via WhatsApp.",
    },
    {
      image:
        "/Products-features/scheduling/scheduling-team availabilty management.png",
      heading: "Team Availability Management",
      description:
        "Set working hours and availability for each staff member. Ensure fair distribution of appointments and prevent double-bookings.",
    },
    {
      image:
        "/Products-features/scheduling/Scheduling-integrated payments & invoices.png",
      heading: "Integrated Payments & Invoices",
      description:
        "Link appointments directly to services, payments, and invoices for a seamless end-to-end experience.",
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
    <>
      <Seo
        title="Appointment Scheduling Software for Salons - Cleomitra CRM"
        description="Advanced appointment scheduling for salons & spas. Smart calendar, automated reminders, team management. Best scheduling CRM for salons in India."
        keywords="appointment scheduling for salon, salon booking software, spa scheduling system, appointment management salon, booking calendar salon, scheduling crm"
        url="https://www.cleomitra.com/products/scheduling"
        siteName="Cleomitra"
      />
      <div className="bg-background pb-10">
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
        </main>
      </div>
    </>
  );
}
