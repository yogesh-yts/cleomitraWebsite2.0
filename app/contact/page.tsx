"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FAQSection from "@/components/sections/FAQSection";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessType: "",
    email: "",
    phoneNumber: "",
    countryCode: "+91",
    message: "",
  });

  const businessTypes = [
    { value: "salon-spa", label: "Salon/Spa" },
    { value: "barber-shop", label: "Barber Shop" },
    { value: "nail-studio", label: "Nail Studio" },
    { value: "makeup-studio", label: "Makeup Studio" },
    { value: "wellness-center", label: "Wellness Center" },
    { value: "independent-professional", label: "Independent Professional" },
    { value: "others", label: "Others" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactFAQs = [
    {
      question: "How can I get in touch with the Cleomitra team?",
      answer:
        "You can reach us through this contact form, email us directly at support@cleomitra.com, or schedule a demo. Our team typically responds within 24 hours during business days.",
    },
    {
      question: "Do you offer product demos?",
      answer:
        "Yes! We offer personalized product demos to show you how Cleomitra can work for your specific business needs. You can schedule a demo using the form above or by clicking the 'Get a Demo' button.",
    },
    {
      question: "What kind of businesses can use Cleomitra?",
      answer:
        "Cleomitra is designed for service-based businesses including salons, spas, clinics, consultancies, and any business that needs to manage appointments, customers, and communications in one place.",
    },
    {
      question: "How soon can I expect a response after contacting you?",
      answer:
        "We typically respond to all inquiries within 24 hours during business days (Monday-Friday). You can also reach us directly at support@cleomitra.com for any questions or assistance.",
    },
    {
      question: "Can I get support after office hours?",
      answer:
        "While our primary support hours are during business days, you can always send us an email at support@cleomitra.com anytime. We'll get back to you as soon as possible during our next business day.",
    },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section with Form */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/contact-bg.png"
            alt="Contact Background"
            fill
            className="object-cover"
            quality={100}
            priority
          />
        </div>

        <div className="relative container-responsive py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center overflow-visible">
            {/* Left Content */}
            <div className="text-left">
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Get in Touch with
                <br />
                Our Sales Team!
              </motion.h1>

              <motion.p
                className="text-lg text-black/50 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Have questions about Cleomitra or
                <br />
                need a quick demo? Our team is here
                <br />
                to guide you every step of the way.
              </motion.p>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {[
                  "Let us guide you through our features, pricing, and more!",
                  "We're here to ensure you have a seamless experience.",
                  "Let's talk about how we can collaborate.",
                  "Share your thoughts, ideas, or suggestions on how we can make cleomitra even better.",
                ].map((text, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Image
                      src="/check_circle.svg"
                      alt="Check"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <span className="text-foreground font-medium">{text}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Form */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 overflow-visible"
              style={{ overflow: "visible" }}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <form
                onSubmit={handleSubmit}
                className="space-y-6 overflow-visible"
                role="form"
                aria-labelledby="contact-form-title"
              >
                <h2 id="contact-form-title" className="sr-only">Contact Form</h2>
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-colors"
                    required
                    aria-describedby="name-error"
                  />
                  <div id="name-error" className="sr-only" aria-live="polite"></div>
                </div>

                {/* Business Type and Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-visible">
                  <div className="relative z-[100]">
                    <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Type <span className="text-red-500" aria-label="required">*</span>
                    </label>
                    <select
                      id="businessType"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-colors relative z-[45] bg-white"
                      required
                      aria-describedby="businessType-error"
                    >
                      <option value="">Select business type</option>
                      {businessTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                    <div id="businessType-error" className="sr-only" aria-live="polite"></div>
                  </div>

                  <div className="relative">
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number <span className="text-red-500" aria-label="required">*</span>
                    </label>
                    <div className="flex flex-1" role="group" aria-labelledby="phone-label">
                      <label htmlFor="countryCode" className="sr-only">Country Code</label>
                      <select
                        id="countryCode"
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleInputChange}
                        className="flex-shrink-0 px-3 py-3 border border-gray-300 rounded-l-lg bg-gray-50"
                        aria-label="Country code"
                      >
                        <option value="+91">+91</option>
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                      </select>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="98765 - 43210"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="flex-1 min-w-0 px-4 py-3 border border-l-0 border-gray-300 rounded-r-lg transition-colors"
                        required
                        aria-describedby="phone-error"
                      />
                    </div>
                    <div id="phone-error" className="sr-only" aria-live="polite"></div>
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Email Address{" "}
                    <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-colors"
                    required
                    aria-describedby="email-error"
                  />
                  <div id="email-error" className="sr-only" aria-live="polite"></div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-colors resize-none"
                    required
                    aria-describedby="message-error"
                  />
                  <div id="message-error" className="sr-only" aria-live="polite"></div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`w-full inline-flex items-center space-x-4 group font-medium justify-center px-9 py-3 rounded-lg  transition-colors bg-foreground text-background`}
                  aria-describedby="submit-description"
                >
                  <span>Submit</span>
                  <span
                    className={`rounded-full p-1.5 inline-flex items-center justify-center group-hover:translate-x-4 transform transition-transform duration-400 ease-in-out bg-white/20`}
                    aria-hidden="true"
                  >
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </span>
                </button>
                <div id="submit-description" className="sr-only">Submit the contact form to get in touch with our team</div>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form you agree to our friendly privacy
                  policy
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={contactFAQs} />
    </div>
  );
};

export default ContactPage;
