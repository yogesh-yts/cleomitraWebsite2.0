"use client";

import { motion } from "framer-motion";
import FAQSection from "./FAQSection";

interface SolutionPageTemplateProps {
  heroTitle: string;
  heroSubtitle: string;
  heroBackgroundColor: string;
  heroImage?: React.ReactNode;
  statistics: {
    revenue: string;
    bookings: string;
    sales: string;
  };
  faqItems: Array<{
    question: string;
    answer: string;
  }>;
  industryTypes: string[];
}

const SolutionPageTemplate = ({
  heroTitle,
  heroSubtitle,
  heroBackgroundColor,
  heroImage,
  statistics,
  faqItems,
  industryTypes,
}: SolutionPageTemplateProps) => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className={`${heroBackgroundColor} py-20`}>
        <div className="container-responsive">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {heroTitle}
            </motion.h1>

            <motion.p
              className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {heroSubtitle}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button className="bg-foreground text-background px-8 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium">
                Start Free Trial
              </button>
              <button className="text-gray-600 hover:text-foreground transition-colors font-medium">
                Get a Demo
              </button>
            </motion.div>

            {/* Hero Image/Dashboard */}
            <motion.div
              className="relative max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {heroImage}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Everything you need section */}
      <section className="container-responsive section-spacing">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Everything you need to run — and
            <br />
            grow — your business.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-lg"></div>
              </div>
              <p className="text-sm text-gray-600">
                Schedule without the stress
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-red-500 rounded-lg"></div>
              </div>
              <p className="text-sm text-gray-600">Engage on every channel</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
              </div>
              <p className="text-sm text-gray-600">
                Grow together with insights
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Feature Sections */}
      <div className="container-responsive space-y-24">
        {/* Keep your calendar and clients in sync */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Keep your calendar
              <br />
              and clients in sync.
            </h2>
            <button className="bg-foreground text-background px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
              Start Free Trial
            </button>
          </div>
          <div className="bg-gray-100 p-8 rounded-2xl">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-64 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Calendar Interface</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Run your business, not your clockroom */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Run your business, not
              <br />
              your clockroom.
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Streamline daily operations with inventory management, staff
              scheduling, and automated workflows that keep your business
              running smoothly.
            </p>
            <button className="bg-foreground text-background px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
              Start Free Trial
            </button>
          </div>
          <div className="lg:order-1 bg-gray-100 p-8 rounded-2xl">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-64 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Business Management</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Reach clients where they are */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Reach clients where
              <br />
              they are.
            </h2>
            <button className="bg-foreground text-background px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
              Start Free Trial
            </button>
          </div>
          <div className="bg-gray-100 p-8 rounded-2xl">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-64 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Communication Channels</span>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Statistics Section */}
      <section className="container-responsive section-spacing">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Cleomitra is your complete solution for
            <br />
            running a seamless and efficient business.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-2xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl md:text-6xl font-bold text-foreground mb-2">
                {statistics.revenue}
              </div>
              <div className="text-gray-600">More Revenue</div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl md:text-6xl font-bold text-foreground mb-2">
                {statistics.bookings}
              </div>
              <div className="text-gray-600">Bookings Increased</div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl md:text-6xl font-bold text-foreground mb-2">
                {statistics.sales}
              </div>
              <div className="text-gray-600">Sales Increased</div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqItems} />

      {/* Industry Types Section */}
      <section className="container-responsive section-spacing">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Complete software solution
            <br />
            tailored for your industry
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {industryTypes.map((industry, index) => (
              <motion.div
                key={industry}
                className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-gray-700 font-medium">{industry}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Final Stats Section */}
      <section className="container-responsive section-spacing">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-green-500 rounded-lg"></div>
            <div className="w-12 h-12 bg-yellow-500 rounded-lg"></div>
            <div className="w-12 h-12 bg-red-500 rounded-lg"></div>
            <div className="w-12 h-12 bg-blue-500 rounded-lg"></div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Discover cleomitra a customer
            <br />
            experience platform, made by 15+
            <br />
            passionate people
          </h2>
        </motion.div>
      </section>
    </div>
  );
};

export default SolutionPageTemplate;
