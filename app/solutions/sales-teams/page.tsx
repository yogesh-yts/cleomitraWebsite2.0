import SolutionPageTemplate from '../../../components/sections/SolutionPageTemplate';

export default function SalesTeamsPage() {
  const heroImage = (
    <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      
      <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Sales Management</h3>
          <div className="text-sm text-gray-500">Q4 2024</div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-4 space-y-3">
              <h4 className="font-medium text-sm">Pipeline Stages</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span>Leads</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">124</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Qualified</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">67</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Proposal</span>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">23</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Closed</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">45</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium">Deal Progress</h4>
                <div className="text-sm text-gray-500">Updated 2 min ago</div>
              </div>
              
              <div className="space-y-3">
                {[
                  { client: "Acme Corp", value: "$15,000", stage: "Negotiation", progress: 75, color: "bg-green-500" },
                  { client: "Tech Solutions", value: "$8,500", stage: "Proposal", progress: 50, color: "bg-yellow-500" },
                  { client: "Digital Agency", value: "$12,300", stage: "Discovery", progress: 25, color: "bg-blue-500" },
                  { client: "Startup Inc", value: "$5,800", stage: "Follow-up", progress: 90, color: "bg-purple-500" }
                ].map((deal, i) => (
                  <div key={i} className="border rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <div className="font-medium text-sm">{deal.client}</div>
                        <div className="text-xs text-gray-500">{deal.stage}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-green-600">{deal.value}</div>
                        <div className="text-xs text-gray-500">{deal.progress}% complete</div>
                      </div>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`${deal.color} h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${deal.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="bg-blue-50 p-3 rounded text-center">
                  <div className="text-xl font-bold text-blue-600">$156K</div>
                  <div className="text-xs text-gray-600">Pipeline Value</div>
                </div>
                <div className="bg-green-50 p-3 rounded text-center">
                  <div className="text-xl font-bold text-green-600">68%</div>
                  <div className="text-xs text-gray-600">Close Rate</div>
                </div>
                <div className="bg-purple-50 p-3 rounded text-center">
                  <div className="text-xl font-bold text-purple-600">23</div>
                  <div className="text-xs text-gray-600">Active Deals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const faqItems = [
    {
      question: "How does Cleomitra improve sales team performance?",
      answer: "Our CRM provides sales pipeline management, lead tracking, performance analytics, and automation tools that help sales teams close more deals efficiently."
    },
    {
      question: "Can I track individual sales rep performance?",
      answer: "Yes, Cleomitra offers detailed analytics on individual and team performance including conversion rates, deal values, and sales activity metrics."
    },
    {
      question: "How does the system help with lead management?",
      answer: "Our platform captures leads from multiple sources, scores them based on engagement, and provides automated follow-up sequences to nurture prospects."
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
      heroTitle="Selling made seamless — without the pressure"
      heroSubtitle="Empower your sales team with intuitive CRM tools, pipeline management, and performance tracking that drives consistent results."
      heroBackgroundColor="bg-gradient-to-br from-green-100 to-teal-100"
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