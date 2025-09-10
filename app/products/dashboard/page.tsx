"use client";

import ProductHero from "../../../components/sections/ProductHero";
import FeaturesSection from "../../../components/sections/FeaturesSection";
import FAQSection from "../../../components/sections/FAQSection";
import ProductFeatureImages from "../../../components/sections/ProductFeatureImages";
import StatisticsSection from "../../../components/sections/StatisticsSection";

export default function DashboardPage() {
  const dashboardImages = [
    "/Products-features/dashboard/Dashboard-client & service insights.png",
    "/Products-features/dashboard/Dashboard-real time overview.png",
    "/Products-features/dashboard/Dashboard-team & branch performance.png",
  ];

  const dashboardFAQs = [
    {
      question: "What analytics are available in the dashboard?",
      answer:
        "Our dashboard provides comprehensive analytics including sales funnel analysis, customer engagement metrics, revenue tracking, and business performance indicators.",
    },
    {
      question: "Can I customize my dashboard view?",
      answer:
        "Yes, you can customize your dashboard by rearranging widgets, choosing relevant metrics, and creating personalized views for different team members.",
    },
    {
      question: "How often is dashboard data updated?",
      answer:
        "Dashboard data is updated in real-time, ensuring you always have the latest information about your business performance and customer activities.",
    },
  ];

  return (
    <div className="bg-background">
      <main>
        <ProductHero
          title={`Stay on top of your business with 
  real-time insights`}
          description={`From revenue to appointments, Cleomitra 
  dashboards bring every metric into one clear view
so you can make smarter, faster decisions.`}
        />
        <FeaturesSection
          imageSrc="/Products-features/dashboard/Dashboard-herosection.png"
          imageAlt="Dashboard Feature Overview"
        />

        <ProductFeatureImages
          images={dashboardImages}
          productName="Dashboard"
        />

        <FAQSection faqs={dashboardFAQs} />

        <StatisticsSection />
      </main>
    </div>
  );
}
