"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import LearningExperienceImage from "../assets/Frame 26.jpg";

gsap.registerPlugin(ScrollTrigger);

const LearningExperience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".learn-img",
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".learn-text",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
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
    <section
      ref={sectionRef}
      className="bg-white py-20 px-6 md:px-12 lg:px-24 border-b"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">
        <div className="learn-img relative w-full h-80 md:h-[420px]">
          <Image
            src={LearningExperienceImage}
            alt="Who We Are"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="learn-text">
          <p className="text-gray-700 mb-5 leading-relaxed font-semibold text-xl">
            At Founder’s Friday, Every Friday Is a Learning Experience!
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed font-semibold text-base md:text-lg">
            Join us in our mission to transform ideas into impact and shape the future of Nigeria’s startup landscape.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-12 py-3 bg-[#8300FF] text-white rounded-full hover:bg-[#6b00cc] transition font-medium"
            >
              Register
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningExperience;
