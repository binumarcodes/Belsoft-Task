"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is Founder's Friday?",
    answer:
      "Founder's Friday is a weekly gathering of entrepreneurs, developers, and tech enthusiasts to connect, learn, and grow.",
  },
  {
    question: "Is registration required?",
    answer:
      "Yes, registering helps us prepare adequately and give attendees the best experience.",
  },
  {
    question: "How much does it cost to attend?",
    answer:
      "Attendance is usually free unless stated otherwise for special editions or workshops.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-[#FEF6FF] py-20 px-6 md:px-12 lg:px-24 border-t border-b">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">
          FAQs
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className="flex items-start justify-between p-6 hover:shadow-md transition cursor-pointer border-b border-gray-300"
            >
              <div className="flex items-start gap-4 w-full">
                {/* Purple dot */}
                <div className="w-3 h-3 rounded-full bg-[#8300FF] mt-2" />

                {/* Question and answer */}
                <div className="w-full">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  {openIndex === index && (
                    <p className="text-gray-700 text-sm md:text-base mt-2">
                      {faq.answer}
                    </p>
                  )}
                </div>
              </div>

              {/* Toggle icon */}
              <div className="ml-4 mt-1">
                {openIndex === index ? (
                  <FaChevronUp className="text-gray-500" />
                ) : (
                  <FaChevronDown className="text-gray-500" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
