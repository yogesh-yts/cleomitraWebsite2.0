"use client";

import ProductHero from "../../../components/sections/ProductHero";
import FeaturesSection from "../../../components/sections/FeaturesSection";
import FAQSection from "../../../components/sections/FAQSection";
import ProductFeatureImages from "../../../components/sections/ProductFeatureImages";
import StatisticsSection from "../../../components/sections/StatisticsSection";

export default function InventoryPage() {
  const inventoryFeatures = [
    {
      image: "/Products-features/inventory/Inventory-low stock alert.png",
      heading: "Low Stock Alerts",
      description: "Stay ahead of stockouts with intelligent low stock alerts. Receive automatic notifications via email, SMS, or WhatsApp when inventory levels reach your predefined thresholds, ensuring you never miss a restocking opportunity."
    },
    {
      image: "/Products-features/inventory/Inventory-product and service linking.png",
      heading: "Product and Service Linking",
      description: "Seamlessly connect your inventory with services and bundled products. Create composite items, link services to physical products, and manage complex product relationships with ease for comprehensive business operations."
    },
    {
      image: "/Products-features/inventory/Inventory-real time stock tracking.png",
      heading: "Real-Time Stock Tracking",
      description: "Monitor your inventory levels in real-time across all locations and channels. Track stock movements, transfers, and adjustments instantly with live updates that keep your team informed and your operations running smoothly."
    },
    {
      image: "/Products-features/inventory/Inventory-sales & usage reports.png",
      heading: "Sales & Usage Reports",
      description: "Generate comprehensive reports on inventory performance, sales velocity, and usage patterns. Analyze trends, identify best-selling items, and make data-driven decisions to optimize your inventory management strategy."
    },
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
          features={inventoryFeatures}
          productName="Inventory"
        />

        <FAQSection faqs={inventoryFAQs} />

        <StatisticsSection />
      </main>
    </div>
  );
}
