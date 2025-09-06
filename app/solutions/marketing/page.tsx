import SolutionPageTemplate from '../../../components/sections/SolutionPageTemplate';

export default function MarketingPage() {
  const heroImage = (
    <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      
      <div className="bg-gradient-to-r from-pink-100 to-red-100 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Application Settings</h3>
          <div className="flex space-x-2">
            <button className="text-xs bg-white px-3 py-1 rounded border">Settings</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium mb-3">Marketing Campaigns</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Email Marketing</span>
                  <span className="text-green-600">Active</span>
                </div>
                <div className="flex justify-between">
                  <span>Social Media</span>
                  <span className="text-blue-600">Running</span>
                </div>
                <div className="flex justify-between">
                  <span>Content Strategy</span>
                  <span className="text-purple-600">Planning</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium mb-3">Performance Metrics</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span>Reach</span>
                <span className="font-bold text-primary">45.2K</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>Engagement</span>
                <span className="font-bold text-green-600">8.7%</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>Conversions</span>
                <span className="font-bold text-purple-600">234</span>
              </div>
            </div>
            
            <div className="mt-4 relative">
              <div className="h-32 bg-gradient-to-t from-pink-200 to-transparent rounded flex items-end justify-center">
                <div className="text-xs text-gray-600">Campaign Performance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const faqItems = [
    {
      question: "How can Cleomitra help improve my marketing ROI?",
      answer: "Cleomitra provides comprehensive analytics and automation tools that help you track campaign performance, optimize targeting, and increase conversion rates across all marketing channels."
    },
    {
      question: "Can I integrate with existing marketing tools?",
      answer: "Yes, Cleomitra integrates seamlessly with popular marketing platforms including email marketing services, social media management tools, and analytics platforms."
    },
    {
      question: "What marketing automation features are available?",
      answer: "Our platform offers email sequences, social media scheduling, lead nurturing workflows, and personalized customer journey automation to streamline your marketing efforts."
    }
  ];

  const industryTypes = [
    "Beauty Salon",
    "Hair Salon", 
    "Spa & Wellness Center",
    "Nail Salon",
    "Barber Shop",
    "Tattoo and Piercing Studio"
  ];

  return (
    <SolutionPageTemplate
      heroTitle="Marketing made effortless — with every channel in one place"
      heroSubtitle="Streamline your marketing efforts with automated campaigns, multi-channel messaging, and performance analytics that drive real results for your business."
      heroBackgroundColor="bg-gradient-to-br from-pink-100 to-red-100"
      heroImage={heroImage}
      statistics={{
        revenue: "20%",
        bookings: "18%", 
        sales: "32%"
      }}
      faqItems={faqItems}
      industryTypes={industryTypes}
    />
  );
}