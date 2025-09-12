"use client";

import ProductHero from "../../../components/sections/ProductHero";
import FeaturesSection from "../../../components/sections/FeaturesSection";
import FAQSection from "../../../components/sections/FAQSection";
import ProductFeatureImages from "../../../components/sections/ProductFeatureImages";

export default function DashboardPage() {
  const dashboardFeatures = [
    {
      image: "/Products-features/dashboard/Dashboard-real time overview.png",
      heading: "Real-Time Overview",
      description:
        "See your key metrics — revenue, appointments, Service/products, Inventory and client activity — all updated instantly.",
    },
    {
      image:
        "/Products-features/dashboard/Dashboard-team & branch performance.png",
      heading: "Team & Branch Performance",
      description:
        "Track staff productivity and branch-level results to identify what’s working and where to improve.",
    },
    {
      image:
        "/Products-features/dashboard/Dashboard-client & service insights.png",
      heading: "Client & Service Insights",
      description:
        "Understand client trends, service demand, and product usage to plan smarter offers and inventory.",
    },
  ];

  const dashboardFAQs = [
    {
      question: "What kind of data can I see on my dashboard?",
      answer:
        "Your Cleomitra dashboard displays comprehensive business data including real-time revenue metrics, appointment bookings, client engagement rates, inventory levels, team performance statistics, customer satisfaction scores, marketing campaign results, and financial analytics. All data is visualized through interactive charts and graphs for easy interpretation.",
    },
    {
      question: "Can I customize my dashboard view?",
      answer:
        "Yes! Cleomitra's dashboard offers limited customization options including choosing which metrics to display, creating different views for different team roles, and setting up personalized KPI tracking to match your business preferences and workflow needs.",
    },
    {
      question: "How is the dashboard different from reports?",
      answer:
        "The dashboard provides real-time, at-a-glance insights with interactive widgets and live data updates, perfect for daily monitoring and quick decision-making. Reports, on the other hand, offer detailed, comprehensive analysis with historical data comparisons, exportable formats, and in-depth breakdowns ideal for strategic planning and detailed business analysis.",
    },
  ];

  return (
    <div className="bg-background pb-10">
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
          features={dashboardFeatures}
          productName="Dashboard"
        />

        <FAQSection faqs={dashboardFAQs} />

      </main>
    </div>
  );
}
