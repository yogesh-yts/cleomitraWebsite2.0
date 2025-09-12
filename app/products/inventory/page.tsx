"use client";

import ProductHero from "../../../components/sections/ProductHero";
import FeaturesSection from "../../../components/sections/FeaturesSection";
import FAQSection from "../../../components/sections/FAQSection";
import ProductFeatureImages from "../../../components/sections/ProductFeatureImages";

export default function InventoryPage() {
  const inventoryFeatures = [
    {
      image:
        "/Products-features/inventory/Inventory-real time stock tracking.png",
      heading: "Real-Time Stock Tracking",
      description:
        "Monitor product levels instantly, from shampoos to spa essentials, so you never run out during a busy day.",
    },
    {
      image: "/Products-features/inventory/Inventory-low stock alert.png",
      heading: "Low Stock Alerts",
      description:
        "Get automatic notifications when items are running low, helping you reorder on time and avoid shortages.",
    },
    {
      image:
        "/Products-features/inventory/Inventory-product and service linking.png",
      heading: "Product & Service Linking",
      description:
        "Track inventory usage by linking products to services — ensuring accurate cost tracking and revenue mapping.",
    },

    {
      image: "/Products-features/inventory/Inventory-sales & usage reports.png",
      heading: "Sales & Usage Reports",
      description:
        "Understand product trends with detailed reports, helping you reduce waste and boost profitability.",
    },
  ];

  const inventoryFAQs = [
    {
      question: "Can I track which services use which products?",
      answer:
        "Absolutely! Cleomitra allows you to link specific products to services, creating detailed usage tracking. You can see which products are consumed during each service, track consumption patterns, calculate service costs more accurately, and ensure you always have the right products in stock for your most popular services.",
    },
    {
      question: "Does the system alert me when stock is low?",
      answer:
        "Yes! Cleomitra provides intelligent low stock alerts that notify you when inventory levels reach your predefined minimum thresholds. You can receive alerts via email, SMS, or in-app notifications, set different alert levels for different products, and even automate reorder suggestions to prevent stockouts.",
    },
    {
      question: "Can I see inventory performance over time?",
      answer:
        "Definitely! Cleomitra offers comprehensive inventory analytics and reporting that show performance trends over time. You can view sales velocity, turnover rates, seasonal patterns, best-performing products, slow-moving inventory, and profitability analysis. These insights help you optimize purchasing decisions and inventory management strategies.",
    },
  ];

  return (
    <div className="bg-background pb-10">
      <main>
        <ProductHero
          title={`Streamlined inventory management — 
  built for control and clarity`}
          description={`Cleomitra simplifies the way you manage 
products by centralizing stock tracking 
and sales monitoring.`}
        />

        <FeaturesSection
          imageSrc="/Products-features/inventory/Inventory-hero sectionpng.png"
          imageAlt="Inventory Feature Overview"
        />

        <ProductFeatureImages
          features={inventoryFeatures}
          productName="Inventory"
        />

        <FAQSection faqs={inventoryFAQs} />
      </main>
    </div>
  );
}
