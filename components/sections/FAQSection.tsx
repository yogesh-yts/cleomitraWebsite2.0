"use client";

import { useState, useRef, useEffect } from "react";
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
  const [heights, setHeights] = useState<{ [key: number]: number }>({});
  const contentRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const newHeights: { [key: number]: number } = {};
    faqs.forEach((_, index) => {
      if (contentRefs.current[index]) {
        newHeights[index] = contentRefs.current[index]!.scrollHeight;
      }
    });
    setHeights(newHeights);
  }, [faqs]);

  return (
    <section className="container-responsive py-15" aria-labelledby="faq-title">
      <div className="text-center mb-8">
        <h2
          id="faq-title"
          className="text-3xl md:text-4xl font-bold text-foreground"
        >
          {title}
        </h2>
      </div>

      <div className=" mx-auto space-y-4 py-2 md:py-6 rounded-lg">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-black-200 border border-gray-200 rounded-lg overflow-hidden transition-all duration-500 ease-out hover:shadow-md"
          >
            <button
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              <span className="text-base md:text-xl 2xl:text-2xl font-bold text-black">
                {faq.question}
              </span>
              <div
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-black" aria-hidden="true" />
                ) : (
                  <Plus className="w-5 h-5 text-black" aria-hidden="true" />
                )}
              </div>
            </button>

            <div
              style={{
                height: openIndex === index ? heights[index] : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              className="overflow-hidden transition-all duration-500 ease-out"
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
            >
              <div
                ref={(el) => {
                  contentRefs.current[index] = el;
                }}
                className="px-6 pb-4 text-base md:text-xl 2xl:text-2xl"
              >
                <p className="text-black/90">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
