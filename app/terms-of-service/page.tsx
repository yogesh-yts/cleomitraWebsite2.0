"use client";

import React, { useState } from "react";

const TermsOfService: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // Get the current month and year dynamically
  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleString("default", {
    month: "long",
  })}, ${currentDate.getFullYear()}`;

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="bg-white text-black pt-10 pb-30 px-4 ">
      <main
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 border border-black/10"
        role="main"
        aria-labelledby="terms-title"
      >
        <div className="text-center mb-6">
          <h1 id="terms-title" className="text-3xl font-bold">
            TERMS OF USE
          </h1>
          <p className="text-black/70">Last Updated: {formattedDate}</p>
        </div>

        <div className="mb-6">
          <p className="text-black/80">
            Welcome to CLEOMITRA, the comprehensive customer relationship management (CRM) platform.
            These Terms of Use govern your access to and use of our services
            across all platforms, including our Android application, iOS
            application, and web interface.
          </p>
        </div>

        {/* Accordion Section */}
        <div className="space-y-4">
          {[
            {
              title: "1. ACCEPTANCE OF TERMS",
              content:
                "By accessing or using CLEOMITRA's applications or website, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you must not use our services.",
            },
            {
              title: "2. SERVICE DESCRIPTION",
              content:
                "CLEOMITRA is a customer relationship management (CRM) platform designed to help businesses manage customer relationships, appointments, communications, inventory, and business operations efficiently.",
            },
            {
              title: "3. ACCOUNT REGISTRATION",
              content: `3.1. To access certain features of CLEOMITRA, you must register for an account.
                        3.2. You agree to provide accurate, current, and complete information during registration.
                        3.3. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.`,
            },
            // Additional sections...
          ].map((section, index) => (
            <div
              key={index}
              className="bg-white border border-black/10 rounded-lg"
            >
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full text-left px-4 py-3 font-semibold flex justify-between items-center"
                aria-expanded={expandedSection === section.title}
                aria-controls={`section-content-${index}`}
              >
                <span>{section.title}</span>
                <span>{expandedSection === section.title ? "-" : "+"}</span>
              </button>
              {expandedSection === section.title && (
                <div
                  id={`section-content-${index}`}
                  className="px-4 py-3 text-black/80"
                >
                  <p>{section.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-black/70 text-sm">
            By using CLEOMITRA, you acknowledge that you have read, understood,
            and agree to be bound by these Terms of Use.
          </p>
          <hr className="my-4 border-black/10" />
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;
