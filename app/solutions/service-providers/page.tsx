import SolutionPageTemplate from '../../../components/sections/SolutionPageTemplate';

export default function ServiceProvidersPage() {
  const heroImage = (
    <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Mobile App 1 */}
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-sm">Cleomitra</h4>
              <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
            </div>
            
            <div className="space-y-3">
              <div className="h-20 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold">1,250</div>
                  <div className="text-xs text-gray-600">Active Clients</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-gray-50 p-2 rounded text-center">
                  <div className="text-lg font-bold text-green-600">85%</div>
                  <div className="text-xs text-gray-500">Satisfaction</div>
                </div>
                <div className="bg-gray-50 p-2 rounded text-center">
                  <div className="text-lg font-bold text-blue-600">42</div>
                  <div className="text-xs text-gray-500">Services</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile App 2 */}
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-sm">Appointments</h4>
              <div className="text-xs text-gray-500">Today</div>
            </div>
            
            <div className="space-y-2">
              {[
                { time: "9:00 AM", client: "John D.", service: "Haircut" },
                { time: "10:30 AM", client: "Sarah M.", service: "Color" },
                { time: "2:00 PM", client: "Mike R.", service: "Trim" }
              ].map((apt, i) => (
                <div key={i} className="bg-gray-50 p-2 rounded text-xs">
                  <div className="flex justify-between">
                    <span className="font-medium">{apt.time}</span>
                    <span className="text-gray-500">{apt.service}</span>
                  </div>
                  <div className="text-gray-600">{apt.client}</div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-3 bg-purple-500 text-white py-2 rounded-lg text-xs">
              View All
            </button>
          </div>

          {/* Mobile App 3 */}
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-sm">Notifications</h4>
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
            
            <div className="space-y-2">
              <div className="bg-blue-50 p-2 rounded text-xs">
                <div className="font-medium">New Booking</div>
                <div className="text-gray-600">Emma Wilson - 3:30 PM</div>
                <div className="text-gray-500">2 min ago</div>
              </div>
              
              <div className="bg-green-50 p-2 rounded text-xs">
                <div className="font-medium">Payment Received</div>
                <div className="text-gray-600">$85 from David K.</div>
                <div className="text-gray-500">5 min ago</div>
              </div>
              
              <div className="bg-gray-50 p-2 rounded text-xs">
                <div className="font-medium">Review Posted</div>
                <div className="text-gray-600">5 stars from Lisa M.</div>
                <div className="text-gray-500">1 hour ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const faqItems = [
    {
      question: "How does Cleomitra help service providers stay organized?",
      answer: "Our platform provides a centralized dashboard for managing appointments, client information, service history, and business analytics all in one place."
    },
    {
      question: "Can I accept online bookings from clients?",
      answer: "Yes, Cleomitra offers online booking functionality that allows your clients to schedule appointments 24/7 while you maintain control over availability."
    },
    {
      question: "How does the mobile app help me on the go?",
      answer: "Our mobile app lets you manage appointments, communicate with clients, process payments, and access customer information from anywhere."
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
      heroTitle="Service made simple — without losing connection."
      heroSubtitle="Deliver exceptional service experiences while maintaining personal connections with your clients through streamlined management tools."
      heroBackgroundColor="bg-gradient-to-br from-purple-100 to-pink-100"
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