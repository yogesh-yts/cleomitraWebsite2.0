"use client";

import FeaturesSection from "@/components/sections/FeaturesSection";
import FAQSection from "@/components/sections/FAQSection";
import ProductHero from "@/components/sections/ProductHero";
import ProductFeatureImages from "@/components/sections/ProductFeatureImages";
import Seo from "@/components/Seo";

const CustomerManagementPage = () => {
  const customerManagementFeatures = [
    {
      image:
        "/Products-features/customer management/customer management- centralized client profiles.png",
      heading: "Centralized Client Profiles",
      description:
        "Keep all client details — contact info, preferences, service history, and notes — in one easy-to-access place.",
    },
    {
      image:
        "/Products-features/customer management/customer management- service & purchase history.png",
      heading: "Service & Purchase History",
      description:
        "Track every appointment and product purchase to deliver tailored recommendations and better client experiences.",
    },
    {
      image:
        "/Products-features/customer management/customer management- integrated communication.png",
      heading: "Integrated Communication",
      description:
        "Send reminders, promotions, and follow-ups directly via WhatsApp, Instagram, or email — without switching tools.",
    },

    {
      image:
        "/Products-features/customer management/customer management- smart segmentation.png",
      heading: "Smart Segmentation",
      description:
        "Organize clients by habits, loyalty, or spending patterns to target them with the right offers at the right time.",
    },
  ];

  const customerFAQs = [
    {
      question: "How does Cleomitra help me know my clients better?",
      answer:
        "Cleomitra creates comprehensive client profiles that store every interaction, service history, preferences, and personal notes in one centralized location. Our smart analytics provide insights into client behavior, spending patterns, and engagement levels, helping you understand what drives loyalty and satisfaction for each individual client.",
    },
    {
      question: "How does client management improve retention?",
      answer:
        "Effective client management improves retention by enabling personalized experiences, timely follow-ups, and proactive service. Cleomitra tracks client preferences and history, sends automated reminders, and helps you identify at-risk clients early so you can take action to keep them engaged and satisfied.",
    },
    {
      question: "Can I communicate with clients directly from Cleomitra?",
      answer:
        "Yes! Cleomitra offers integrated multi-channel communication directly within the platform. You can send appointment reminders, promotional messages, and personalized follow-ups via WhatsApp, email, or SMS without switching between different tools, keeping all client conversations organized in one place.",
    },
  ];

  return (
    <>
      <Seo
        title="Customer Management Software for Salons - Cleomitra CRM"
        description="Manage salon clients with Cleomitra's customer management system. Centralized profiles, service history, communication tools. Best customer CRM for salons in India."
        keywords="customer management for salon, client management software, salon customer database, customer retention software, best customer crm india"
        url="https://www.cleomitra.com/products/customer-management"
        siteName="Cleomitra"
      />
      <div className="bg-background pb-10">
        <main>
          <ProductHero
            title={`Client management keeps every detail in one place — and every experience personal.`}
            description={`Keep every client detail — from contact info to service history — in one place. With Cleomitra, you can turn first-time visitors into loyal clients.`}
          />
          <FeaturesSection
            imageSrc="/Products-features/customer management/More Customer details.svg"
            imageAlt="Customer Management Feature Overview"
          />

          <ProductFeatureImages
            features={customerManagementFeatures}
            productName="Customer Management"
          />

          <FAQSection faqs={customerFAQs} />
        </main>
      </div>
    </>
  );
};

export default CustomerManagementPage;
