"use client";

import { useEffect, useRef } from "react";
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
];

export default function AttendeeTestimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#FEF6FF] py-12 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold text-black">
            What Do Our Attendees Have To Say?
          </h2>
          <p className="text-gray-600 mt-2">
            See what people are saying about us
          </p>
        </div>

        <div className="absolute top-4 right-4 flex gap-2">
          <button className="p-2 border-2 border-[#E2A7F7] rounded-full hover:bg-gray-300">
            <FaArrowLeft className="text-black" size={16} />
          </button>
          <button className="p-2 border-2 border-[#E2A7F7] rounded-full hover:bg-gray-300">
            <FaArrowRight className="text-black" size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
  {testimonials.map((user, index) => (
    <div key={index} className="testimonial-card text-center">
      <div className="w-40 h-40 rounded-full border-4 border-purple-500 mx-auto mb-6 flex items-center justify-center">
        <Image
          src={user.avatar}
          alt={user.name}
          className="w-36 h-36 rounded-full object-cover"
        />
      </div>
      <h3 className="text-2xl font-semibold text-black">{user.name}</h3>
      <p className="text-lg text-gray-700 mt-4 max-w-md mx-auto">{user.text}</p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
