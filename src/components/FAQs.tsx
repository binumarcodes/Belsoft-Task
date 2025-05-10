"use client";

import { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      itemRefs.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#FEF6FF] py-20 px-6 md:px-12 lg:px-24 border-t border-b"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">
          FAQs
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              ref={(el) => {
  itemRefs.current[index] = el;
}}

              onClick={() => toggleFAQ(index)}
              className="flex items-start justify-between p-6 hover:shadow-md transition cursor-pointer border-b border-gray-300 opacity-0"
            >
              <div className="flex items-start gap-4 w-full">
                <div className="w-3 h-3 rounded-full bg-[#8300FF] mt-2" />
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
