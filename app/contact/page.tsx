"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FAQSection from "@/components/sections/FAQSection";
import StartFreeTrialButton from "@/components/ui/StartFreeTrialButton";
import GetDemoButton from "@/components/ui/GetDemoButton";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessType: "",
    email: "",
    phoneNumber: "",
    countryCode: "+91",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactFAQs = [
    {
      question: "How can I get in touch with the Cleomitra team?",
      answer: "You can reach us through this contact form, email us directly, or schedule a demo. Our team typically responds within 24 hours during business days."
    },
    {
      question: "Do you offer product demos?",
      answer: "Yes! We offer personalized product demos to show you how Cleomitra can work for your specific business needs. You can schedule a demo using the form above or by clicking the 'Get a Demo' button."
    },
    {
      question: "What kind of businesses can use Cleomitra?",
      answer: "Cleomitra is designed for service-based businesses including salons, spas, clinics, consultancies, and any business that needs to manage appointments, customers, and communications in one place."
    },
    {
      question: "How soon can I expect a response after contacting you?",
      answer: "We typically respond to all inquiries within 24 hours during business days (Monday-Friday). For urgent matters, you can also reach out through our live chat support."
    },
    {
      question: "Can I get support after office hours?",
      answer: "While our primary support hours are during business days, we offer 24/7 chat support for urgent technical issues. You can also submit a ticket through our help center anytime."
    }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section with Form */}
      <section className="relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300"></div>
        
        <div className="relative container-responsive py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Get in Touch with<br />
                Our Sales Team!
              </motion.h1>

              <motion.p
                className="text-lg text-gray-700 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Have questions about Cleomitra or<br />
                need a quick demo? Our team is here<br />
                to guide you every step of the way.
              </motion.p>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-foreground font-medium">Let us guide you through our features, pricing, and more!</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-foreground font-medium">We're here to ensure you have a seamless experience.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-foreground font-medium">Let's talk about how we can collaborate.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-foreground font-medium">Share your thoughts, ideas, or suggestions on how we can make cleomitra even better.</span>
                </div>
              </motion.div>
            </div>

            {/* Right Form */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    required
                  />
                </div>

                {/* Business Type and Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      required
                    >
                      <option value="">Select business type</option>
                      <option value="salon">Salon</option>
                      <option value="spa">Spa</option>
                      <option value="clinic">Clinic</option>
                      <option value="consultancy">Consultancy</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleInputChange}
                        className="px-3 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50"
                      >
                        <option value="+91">+91</option>
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                      </select>
                      <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="98765 - 43210"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="flex-1 px-4 py-3 border border-l-0 border-gray-300 rounded-r-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-foreground text-background py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                >
                  Submit →
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form you agree to our friendly privacy policy
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={contactFAQs} />

      {/* CTA Section */}
      <section className="bg-foreground text-background py-20">
        <div className="container-responsive text-center">
          <div className="mb-6">
            <span className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              You
            </span>
          </div>
          
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to elevate your business<br />
            with Cleomitra and experience<br />
            unparalleled growth?
          </motion.h2>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <StartFreeTrialButton />
            <GetDemoButton />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;