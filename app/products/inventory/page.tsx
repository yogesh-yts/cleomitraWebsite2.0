'use client';

import { motion } from 'framer-motion';
import ProductHero from '../../../components/sections/ProductHero';
import FeaturesSection from '../../../components/sections/FeaturesSection';
import FAQSection from '../../../components/sections/FAQSection';
import ProductFeatureImages from '../../../components/sections/ProductFeatureImages';

export default function InventoryPage() {
  const inventoryImages = [
    "/Products-features/inventory/Inventory-hero sectionpng.png",
    "/Products-features/inventory/Inventory-low stock alert.png",
    "/Products-features/inventory/Inventory-product and service linking.png",
    "/Products-features/inventory/Inventory-real time stock tracking.png",
    "/Products-features/inventory/Inventory-sales & usage reports.png"
  ];

  const inventoryFAQs = [
    {
      question: "How does real-time inventory tracking work?",
      answer: "Our system automatically updates inventory levels in real-time as sales are made, products are received, and stock is adjusted across all locations."
    },
    {
      question: "Can I manage multiple locations?",
      answer: "Yes, our inventory system supports multi-location management with individual stock levels, transfers, and reporting for each location."
    },
    {
      question: "What kind of reports can I generate?",
      answer: "Generate detailed reports including stock levels, sales velocity, reorder recommendations, and profitability analysis for informed decision making."
    }
  ];

  return (
    <div className="bg-background">
      
      <main>
        <ProductHero 
          title="Inventory management that<br />keeps your business stocked."
          description="Oversee your inventory and track performance with comprehensive stock management tools."
        />

        <FeaturesSection />
        
        <ProductFeatureImages 
          images={inventoryImages} 
          productName="Inventory"
        />
        
        <FAQSection faqs={inventoryFAQs} />
      </main>
    </div>
  );
}