"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  faqs: FAQItem[];
}

const FAQSection = ({
  title = "Frequently Asked Questions",
  faqs,
}: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container-responsive py-15">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          {title}
        </h2>
      </div>

      <div className=" mx-auto space-y-4 p-6 rounded-lg">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-black-200  sborder border-gray-200 rounded-lg overflow-hidden transition-all duration-300 ease-in-out"
          >
            <button
              className="w-full px-6 py-4 text-left flex items-center justify-between"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-foreground">
                {faq.question}
              </span>
              {openIndex === index ? (
                <Minus className="w-5 h-5 text-gray-500" />
              ) : (
                <Plus className="w-5 h-5 text-gray-500" />
              )}
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-4  ">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
