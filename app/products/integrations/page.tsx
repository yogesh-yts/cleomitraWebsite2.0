"use client";

import ProductHero from "../../../components/sections/ProductHero";
import FAQSection from "../../../components/sections/FAQSection";
import IntegrationsGrid from "../../../components/sections/IntegrationsGrid";
import Seo from "../../../components/Seo";

export default function IntegrationsPage() {
  const integrationsFAQs = [
    {
      question: "Why should I connect my tools with Cleomitra?",
      answer:
        "Connecting your existing tools with Cleomitra eliminates data silos and creates a unified workflow. You can sync customer data, automate processes between platforms, reduce manual data entry, and get a complete view of your business operations. This integration saves time, reduces errors, and helps you provide better customer service by having all information in one centralized location.",
    },
    {
      question: "Do I need technical knowledge to set up integrations?",
      answer:
        "No! Cleomitra is designed for non-technical users. Most integrations can be set up with simple one-click connections or easy step-by-step wizards. Our intuitive interface guides you through the process, and our support team is available to help if needed. No coding or technical expertise is required to connect your favorite business tools.",
    },
    {
      question: "How do integrations improve client experience?",
      answer:
        "Integrations create seamless client experiences by ensuring consistent information across all touchpoints. Your clients receive faster responses, personalized service based on complete data history, automated appointment reminders, synchronized communication across channels, and smoother booking processes. This unified approach reduces waiting times and provides a more professional, cohesive experience.",
    },
  ];

  return (
    <>
      <Seo
        title="CRM Integrations for Salon & Business Tools - Cleomitra"
        description="Seamless CRM integrations for salons. Connect payment gateways, social media, email marketing tools. Best integrated CRM solution for salons in India."
        keywords="crm integrations, salon software integrations, business tool integrations, payment gateway integration, social media crm integration, integrated salon management"
        url="https://www.cleomitra.com/products/integrations"
        siteName="Cleomitra"
      />
      <div className="bg-background pb-10">
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

        </main>
      </div>
    </>
  );
}
