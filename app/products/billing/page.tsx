"use client";

import FeaturesSection from "../../../components/sections/FeaturesSection";
import FAQSection from "../../../components/sections/FAQSection";
import ProductHero from "../../../components/sections/ProductHero";
import ProductFeatureImages from "../../../components/sections/ProductFeatureImages";
import Seo from "../../../components/Seo";

export default function BillingPage() {
  const billingFeatures = [
    {
      image: "/Products-features/billing/billing-one click invoice.png",
      heading: "One-Click Invoicing",
      description:
        "Create invoices instantly from completed appointments or product sales — no duplicate work.",
    },
    {
      image: "/Products-features/billing/billing-flexible payment option.png",
      heading: "Flexible Payment Options",
      description:
        "Accept payments via cash, card, UPI, or integrated gateways, making it easy for clients to pay their way.",
    },
    {
      image:
        "/Products-features/billing/billing-linked to appointment and services.png",
      heading: "Linked to Appointments & Services",
      description:
        "Every invoice is automatically tied to services, providers, and clients, ensuring accurate revenue tracking.",
    },
    {
      image: "/Products-features/billing/billing-discount & taxes.png",
      heading: "Discounts & Taxes",
      description:
        "Apply discounts and taxes effortlessly — Cleomitra handles the calculations for you.",
    },

    {
      image: "/Products-features/billing/billing-revenue insights.png",
      heading: "Revenue Insights",
      description:
        "Monitor earnings, outstanding payments, and staff performance with clear billing reports and dashboards.",
    },
  ];

  const billingFAQs = [
    {
      question: "Can I generate invoices without an appointment?",
      answer:
        "Absolutely! Cleomitra's billing system allows you to create standalone invoices for product sales, consultations, packages, or any other services that don't require appointment scheduling. You can generate invoices manually for walk-in customers, retail purchases, or custom services with just a few clicks.",
    },
    {
      question: "Does Cleomitra support multiple payment methods?",
      answer:
        "Yes! Cleomitra supports a wide range of payment methods including credit cards, debit cards, digital wallets (PayPal, Apple Pay, Google Pay), bank transfers, cash payments, and installment plans. This flexibility allows your customers to pay using their preferred method, improving satisfaction and reducing payment delays.",
    },
    {
      question: "How does billing connect with other modules?",
      answer:
        "Cleomitra's billing module is fully integrated with all other systems. It automatically pulls appointment data for service billing, syncs with inventory for product sales, connects with customer management for payment history, links with marketing for promotional discounts, and feeds data to the dashboard for financial reporting. This seamless integration ensures accurate billing and comprehensive business insights.",
    },
  ];

  return (
    <>
      <Seo
        title="Billing Software for Salons & Spas - Cleomitra CRM"
        description="Streamline your salon billing with Cleomitra's integrated billing software. Generate invoices, track payments, manage discounts & taxes. Best billing CRM for salons in India."
        keywords="billing software for salon, salon billing system, spa billing software, invoice generator for salon, best billing crm india, payment tracking software"
        url="https://www.cleomitra.com/products/billing"
        siteName="Cleomitra"
      />
      <div className="bg-background pb-10">
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

        <ProductFeatureImages
          features={billingFeatures}
          productName="Billing"
        />

        <FAQSection faqs={billingFAQs} />
        </main>
      </div>
    </>
  );
}
