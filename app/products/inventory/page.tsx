"use client";

import ProductHero from "../../../components/sections/ProductHero";
import FeaturesSection from "../../../components/sections/FeaturesSection";
import FAQSection from "../../../components/sections/FAQSection";
import ProductFeatureImages from "../../../components/sections/ProductFeatureImages";
import StatisticsSection from "../../../components/sections/StatisticsSection";

export default function InventoryPage() {
  const inventoryImages = [
    "/Products-features/inventory/Inventory-low stock alert.png",
    "/Products-features/inventory/Inventory-product and service linking.png",
    "/Products-features/inventory/Inventory-real time stock tracking.png",
    "/Products-features/inventory/Inventory-sales & usage reports.png",
  ];

  const inventoryFAQs = [
    {
      question: "How does real-time inventory tracking work?",
      answer:
        "Our system automatically updates inventory levels in real-time as sales are made, products are received, and stock is adjusted across all locations.",
    },
    {
      question: "Can I manage multiple locations?",
      answer:
        "Yes, our inventory system supports multi-location management with individual stock levels, transfers, and reporting for each location.",
    },
    {
      question: "What kind of reports can I generate?",
      answer:
        "Generate detailed reports including stock levels, sales velocity, reorder recommendations, and profitability analysis for informed decision making.",
    },
  ];

  return (
    <div className="bg-background">
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
          images={inventoryImages}
          productName="Inventory"
        />

        <FAQSection faqs={inventoryFAQs} />

        <StatisticsSection />
      </main>
    </div>
  );
}
