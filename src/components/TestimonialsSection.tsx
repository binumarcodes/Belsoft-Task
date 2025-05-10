"use client";

import { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import AvatarImg from "../assets/avatar1.png";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Mr Belba Ngoy",
    text: "Always a remarkable experience for my team and myself.",
    avatar: AvatarImg,
  },
  {
    name: "John Smith",
    text: "Great networking and learning opportunity!",
    avatar: AvatarImg,
  },
  {
    name: "Alice Johnson",
    text: "Definitely attending again next year!",
    avatar: AvatarImg,
  },
  {
    name: "Fatima Musa",
    text: "I met so many amazing people here!",
    avatar: AvatarImg,
  },
  {
    name: "Daniel Obi",
    text: "The speakers were insightful and motivating.",
    avatar: AvatarImg,
  },
];

export default function AttendeeTestimonials() {
  const sectionRef = useRef(null);
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handleNext = () => {
    setStartIndex((prev) => (prev + visibleCount) % testimonials.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) =>
      (prev - visibleCount + testimonials.length) % testimonials.length
    );
  };

  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + visibleCount
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testimonial-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [startIndex]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FEF6FF] py-16 px-4 sm:px-6 lg:px-12 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 px-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            What Do Our Attendees Have To Say?
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            See what people are saying about us
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-8 sm:absolute sm:top-4 sm:right-4">
          <button
            onClick={handlePrev}
            className="p-3 border-2 border-[#E2A7F7] rounded-full hover:bg-gray-300 transition"
          >
            <FaArrowLeft className="text-black" size={24} />
          </button>
          <button
            onClick={handleNext}
            className="p-3 border-2 border-[#E2A7F7] rounded-full hover:bg-gray-300 transition"
          >
            <FaArrowRight className="text-black" size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {visibleTestimonials.map((user, index) => (
            <div key={index} className="testimonial-card text-center p-4">
<div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-purple-500 mx-auto mb-6 overflow-hidden p-2">
                <Image
                  src={user.avatar}
                  alt={user.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-black">
                {user.name}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mt-4 max-w-md mx-auto">
                {user.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
