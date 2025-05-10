"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaHandHoldingHeart } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import aboutUSImage from "../assets/about_us.png";
import Line1 from "../assets/Line 1.png";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!textRef.current || !imageRef.current || !sectionRef.current) return;

    const textEls = textRef.current.querySelectorAll(".fade-up");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      imageRef.current,
      { opacity: 0, x: -80 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
    );

    tl.fromTo(
      textEls,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
      },
      "-=0.5"
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#FDF7FF] py-20 px-6 md:px-12 lg:px-24 border-b"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">
        <div ref={imageRef} className="relative w-full h-80 md:h-[420px]">
          <Image
            src={aboutUSImage}
            alt="Who We Are"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div ref={textRef} className="relative">
         <Image
  src={Line1}
  alt="Line"
  className="hidden md:block absolute top-0 -left-10 h-[435px] object-contain"
  priority
/>


          <h2 className="fade-up text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Who Are We?
          </h2>
          <p className="fade-up text-base md:text-lg text-gray-500 mb-5 leading-relaxed">
            Born from the vibrant startup ecosystem of Abuja, we recognized the
            need for a consistent, high-quality networking platform where
            founders, innovators, and tech enthusiasts could connect, share
            ideas, and foster collaboration.
          </p>

          <div className="fade-up flex flex-wrap md:flex-row justify-between md:justify-start md:gap-4 mt-[49px] mb-[121px]">
  <Link
    href="/register"
    className="w-[48%] md:w-[190px] h-[55px] inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#8300FF] text-white rounded-[40px] hover:bg-[#6b00cc] transition"
  >
    Register
    <FaArrowRight className="text-sm" />
  </Link>
  <Link
    href="/donate"
    className="w-[48%] md:w-[190px] h-[55px] inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#8300FF] text-[#8300FF] rounded-[40px] hover:bg-[#f5eaff] transition"
  >
    Donate
    <FaHandHoldingHeart className="text-sm" />
  </Link>
</div>


          <h4 className="fade-up text-[18px] font-bold text-gray-900 leading-tight">
            Founder's Friday is more than just a meetup — it's a movement.
          </h4>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
