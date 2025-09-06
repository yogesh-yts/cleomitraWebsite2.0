import SolutionPageTemplate from '../../../components/sections/SolutionPageTemplate';

export default function SalonSpaPage() {
  const heroImage = (
    <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Salon Report</h3>
          <div className="text-sm text-gray-500">Today's Overview</div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-primary mb-1">1,240</div>
            <div className="text-sm text-gray-500">Total Clients</div>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">234</div>
            <div className="text-sm text-gray-500">Appointments</div>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-purple-600 mb-1">$2.4K</div>
            <div className="text-sm text-gray-500">Revenue</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium mb-3">Service Performance</h4>
            <div className="space-y-2">
              {[
                { service: "Hair Cut & Style", bookings: 45, revenue: "$1,350" },
                { service: "Facial Treatment", bookings: 32, revenue: "$960" },
                { service: "Massage Therapy", bookings: 28, revenue: "$840" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center text-sm">
                  <span>{item.service}</span>
                  <div className="text-right">
                    <div className="font-medium">{item.bookings} bookings</div>
                    <div className="text-green-600">{item.revenue}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium mb-3">Monthly Trends</h4>
            <div className="h-24 bg-gradient-to-r from-blue-100 to-purple-100 rounded flex items-end justify-between px-2">
              <div className="w-3 bg-blue-500 rounded-t" style={{height: '40%'}}></div>
              <div className="w-3 bg-blue-500 rounded-t" style={{height: '60%'}}></div>
              <div className="w-3 bg-blue-500 rounded-t" style={{height: '80%'}}></div>
              <div className="w-3 bg-blue-500 rounded-t" style={{height: '70%'}}></div>
              <div className="w-3 bg-blue-500 rounded-t" style={{height: '90%'}}></div>
            </div>
            <div className="flex justify-center mt-2">
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const faqItems = [
    {
      question: "How does Cleomitra help salon owners manage appointments?",
      answer: "Our scheduling system allows clients to book online 24/7, sends automated reminders, manages staff calendars, and reduces no-shows significantly."
    },
    {
      question: "Can I track inventory for salon products?",
      answer: "Yes, Cleomitra includes comprehensive inventory management to track product levels, set reorder alerts, and manage supplier relationships."
    },
    {
      question: "How does the system help with customer retention?",
      answer: "We provide customer profiles, service history, preference tracking, and automated marketing campaigns to keep clients engaged and coming back."
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
      heroTitle="Ownership made effortless — without sacrificing control."
      heroSubtitle="Take complete control of your salon or spa operations with comprehensive management tools designed specifically for beauty and wellness businesses."
      heroBackgroundColor="bg-gradient-to-br from-blue-50 to-cyan-100"
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