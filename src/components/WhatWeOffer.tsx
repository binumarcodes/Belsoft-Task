"use client";

import { useEffect, useRef } from "react";
import { FaPlus } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const offerings = [
  {
    title: "Monthly Meetups",
    description:
      "Our cornerstone event, held on the last Friday of every month, featuring keynote speakers, panel discussions, and ample networking opportunities.",
  },
  {
    title: "Diverse Network",
    description:
      "Connect with a wide range of professionals, from early-stage founders to seasoned entrepreneurs, investors, and industry experts.",
  },
  {
    title: "Knowledge Sharing",
    description:
      "Participate in learning sessions, expert talks, and collaborative activities to grow with the community.",
  },
  {
    title: "Collaboration Opportunities",
    description:
      "Find potential co-founders, mentors, or partners for your next big venture.",
  },
  {
    title: "Community Support",
    description:
      "Be part of a supportive ecosystem that celebrates successes and provides guidance through challenges.",
  },
];

const WhatWeOffer = () => {
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

  return (
    <section
      ref={sectionRef}
      className="bg-[#FDF7FF] py-20 px-6 md:px-12 lg:px-24 border-y border-[#3C3641]"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">
          What We Offer
        </h2>

        <div className="space-y-6">
          {offerings.map((item, index) => (
           <div
  key={index}
  ref={(el) => {
    itemRefs.current[index] = el;
  }}
  className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 border-b border-[#3C3641] hover:shadow-md transition opacity-0"
>
  <div className="flex items-start gap-4 w-full">
    <div className="w-3 h-3 rounded-full bg-[#8300FF] mt-1 md:mt-2" />
    <div className="flex flex-col w-full">
      <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
        {item.title}
      </h3>
      <p className="text-gray-700 text-sm md:text-base">
        {item.description}
      </p>
    </div>
  </div>
  <div className="self-end md:self-center">
    <FaPlus className="text-gray-400 text-lg md:text-xl" />
  </div>
</div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
