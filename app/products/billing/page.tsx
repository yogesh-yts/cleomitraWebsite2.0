'use client';

import FeaturesSection from '../../../components/sections/FeaturesSection';
import FAQSection from '../../../components/sections/FAQSection';
import ProductHero from '../../../components/sections/ProductHero';
import ProductFeatureImages from '../../../components/sections/ProductFeatureImages';

export default function BillingPage() {
  const billingImages = [
    "/Products-features/billing/billing-discount & taxes.png",
    "/Products-features/billing/billing-flexible payment option.png",
    "/Products-features/billing/billing-hero section.png",
    "/Products-features/billing/billing-linked to appointment and services.png",
    "/Products-features/billing/billing-one click invoice.png",
    "/Products-features/billing/billing-revenue insights.png"
  ];

  const billingFAQs = [
    {
      question: "What payment methods are supported?",
      answer: "We support all major payment methods including credit cards, PayPal, bank transfers, and various digital wallets for maximum flexibility."
    },
    {
      question: "Can I automate recurring billing?",
      answer: "Yes, our system supports automated recurring billing for subscriptions, memberships, and regular services with smart retry logic."
    },
    {
      question: "How does invoice tracking work?",
      answer: "Our billing system provides real-time tracking of invoice status, payment confirmations, and automatic follow-ups for overdue payments."
    }
  ];

  return (
    <div className="bg-background">
      <main>
        <ProductHero
          title="Professional billing with<br />built-in tracking and flexibility."
          description="Professional invoicing with built-in tracking and flexibility to manage all your billing needs."
        />
        <FeaturesSection />
        
        <ProductFeatureImages 
          images={billingImages} 
          productName="Billing"
        />
        
        <FAQSection faqs={billingFAQs} />
      </main>
    </div>
  );
}