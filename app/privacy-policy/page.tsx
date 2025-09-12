"use client";

import React, { useState } from "react";

const PrivacyPolicy: React.FC = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleString("default", {
    month: "long",
  })} ${currentDate.getFullYear()}`;

  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="text-black px-4 pt-10 pb-30">
      <main
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 border border-black/10"
        role="main"
        aria-labelledby="privacy-policy-title"
      >
        <div className="text-center mb-6">
          <h1 id="privacy-policy-title" className="text-3xl font-bold">
            Privacy Policy
          </h1>
          <p className="text-black">Last Updated: {formattedDate}</p>
        </div>

        <div className="mb-6">
          <p className="text-black/80">
            At CLEOMITRA, we value your privacy and are committed to protecting
            your personal information. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you use
            our CLEOMITRA customer relationship management (CRM) platform (&quot;App&quot; &amp;
            &quot;Web&quot;). Please read this privacy policy carefully. If you
            do not agree with the terms of this privacy policy, please do not
            access the App.
          </p>
        </div>

        {/* Accordion Section */}
        <div className="space-y-4 ">
          {[
            {
              title: "Information We Collect",
              content: (
                <>
                  <h3 className="font-bold text-lg mb-2">
                    Personal Information
                  </h3>
                  <p>
                    We may collect personal information that you voluntarily
                    provide when using our App, including:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>
                      Contact Information: Name, email, phone, business address
                    </li>
                    <li>
                      Business Information: Company name, service offerings,
                      pricing
                    </li>
                    <li>
                      Financial Information: Payment processing details, bank
                      account info
                    </li>
                    <li>
                      Customer Information: Interaction history, preferences, and
                      contact details
                    </li>
                  </ul>
                </>
              ),
            },
            {
              title: "How We Use Your Information",
              content: (
                <>
                  <p>
                    We use the information we collect for various business
                    purposes, including to:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Provide and maintain our App</li>
                    <li>Improve our services</li>
                    <li>Communicate with you</li>
                    <li>Marketing and promotion</li>
                    <li>Security and fraud prevention</li>
                    <li>Legal compliance</li>
                  </ul>
                </>
              ),
            },
            {
              title: "Data Security",
              content: (
                <>
                  <p>
                    We implement appropriate technical and organizational
                    measures to protect the security of your personal
                    information.
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Encryption: Data in transit and at rest</li>
                    <li>
                      Access controls: Limited access to authorized personnel
                    </li>
                    <li>
                      Regular audits: Periodic review of security practices
                    </li>
                    <li>Data backups: Regular backups to prevent data loss</li>
                  </ul>
                </>
              ),
            },
            {
              title: "Your Rights",
              content: (
                <>
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Access the personal data we store about you</li>
                    <li>Request corrections or updates to your data</li>
                    <li>Ask for your data to be deleted</li>
                    <li>Withdraw your consent to data processing</li>
                  </ul>
                  <p className="mt-2">
                    For any requests, contact us at{" "}
                    <strong>support@cleomitra.com</strong>
                  </p>
                </>
              ),
            },
          ].map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-black/10"
            >
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full text-left px-4 py-3 font-semibold rounded-lg flex justify-between items-center border border-black/10"
                aria-expanded={expandedSection === section.title}
                aria-controls={`section-content-${index}`}
              >
                <span>{section.title}</span>
                <span>{expandedSection === section.title ? "-" : "+"}</span>
              </button>
              {expandedSection === section.title && (
                <div
                  id={`section-content-${index}`}
                  className="px-4 py-3 text-black/70"
                >
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-black/70 text-sm">
            © {currentDate.getFullYear()} CLEOMITRA. All Rights Reserved.
          </p>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
