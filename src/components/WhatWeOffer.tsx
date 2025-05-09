"use client";

import { FaPlus } from "react-icons/fa";

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
  return (
    <section className="bg-[#FDF7FF] py-20 px-6 md:px-12 lg:px-24 border-t border-b">
      <div className="max-w-6xl mx-auto">
        {/* Fixed broken class/style mix */}
        <h2 className="text-4xl font-bold text-center mb-12 text-black">
          What We Offer
        </h2>

        <div className="space-y-6">
          {offerings.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-6 hover:shadow-md transition"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#3C3641",
              }}
            >
              <div className="flex items-center gap-4 w-full">
                {/* Purple dot */}
                <div className="w-3 h-3 rounded-full bg-[#8300FF]" />

                {/* Title and centered description */}
                <div className="flex items-center justify-between w-full gap-6">
                  <h3 className="text-lg font-semibold text-gray-900 whitespace-nowrap">
                    {item.title}:
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base w-full max-w-3xl">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Plus icon */}
              <FaPlus className="text-gray-400 text-sm md:text-lg ml-4" size={25} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
