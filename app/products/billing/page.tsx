"use client";

import FeaturesSection from "../../../components/sections/FeaturesSection";
import FAQSection from "../../../components/sections/FAQSection";
import ProductHero from "../../../components/sections/ProductHero";
import ProductFeatureImages from "../../../components/sections/ProductFeatureImages";
import StatisticsSection from "../../../components/sections/StatisticsSection";

export default function BillingPage() {
  const billingFeatures = [
    {
      image: "/Products-features/billing/billing-discount & taxes.png",
      heading: "Discount & Taxes Management",
      description: "Apply flexible discounts, manage complex tax calculations, and handle multiple tax rates automatically. Create promotional offers, loyalty discounts, and ensure compliance with local tax regulations effortlessly."
    },
    {
      image: "/Products-features/billing/billing-flexible payment option.png",
      heading: "Flexible Payment Options",
      description: "Accept payments through multiple channels including credit cards, digital wallets, bank transfers, and installment plans. Provide your customers with convenient payment methods that suit their preferences."
    },
    {
      image: "/Products-features/billing/billing-linked to appointment and services.png",
      heading: "Linked to Appointments & Services",
      description: "Seamlessly connect billing with your scheduling system. Automatically generate invoices from completed appointments, link services to billing records, and ensure accurate service-to-payment tracking."
    },
    {
      image: "/Products-features/billing/billing-one click invoice.png",
      heading: "One-Click Invoice Generation",
      description: "Create professional invoices instantly with a single click. Customize invoice templates, add your branding, and send invoices directly to clients via email or WhatsApp with automated delivery confirmations."
    },
    {
      image: "/Products-features/billing/billing-revenue insights.png",
      heading: "Revenue Insights & Analytics",
      description: "Get comprehensive revenue analytics with detailed reporting on income trends, payment patterns, and financial performance. Track cash flow, identify revenue opportunities, and make informed business decisions."
    },
  ];

  const billingFAQs = [
    {
      question: "What payment methods are supported?",
      answer:
        "We support all major payment methods including credit cards, PayPal, bank transfers, and various digital wallets for maximum flexibility.",
    },
    {
      question: "Can I automate recurring billing?",
      answer:
        "Yes, our system supports automated recurring billing for subscriptions, memberships, and regular services with smart retry logic.",
    },
    {
      question: "How does invoice tracking work?",
      answer:
        "Our billing system provides real-time tracking of invoice status, payment confirmations, and automatic follow-ups for overdue payments.",
    },
  ];

  return (
    <div className="bg-background">
      <main>
        <ProductHero
          title={`Billing made simple — for you 
and your clients.`}
          description={`Generate invoices, track payments, and manage
revenue in one place. With Cleomitra, billing is fast, 
accurate, and fully connected.`}
        />
        <FeaturesSection
          imageSrc="/Products-features/billing/billing-hero section.png"
          imageAlt="Billing Feature Overview"
        />

        <ProductFeatureImages features={billingFeatures} productName="Billing" />

        <FAQSection faqs={billingFAQs} />

        <StatisticsSection />
      </main>
    </div>
  );
}
