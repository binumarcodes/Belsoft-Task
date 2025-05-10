"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Vector from "../assets/Vector 2.png";
import Community from "../assets/community.png";

gsap.registerPlugin(ScrollTrigger);

const RegisterSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".register-animate",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
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
      className="bg-[#FEF6FF] py-20 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="register-animate text-4xl md:text-5xl font-bold mb-4 text-black">
          Register And Be Part of Our Community
        </h2>
        <p className="register-animate text-gray-600 max-w-xl mx-auto mb-12">
          Join our community of over 1000+ founders, developers, and tech junkies in general. Be inspired by people who live to inspire!
        </p>

        <div className="relative w-full flex justify-center items-center mb-12">
  <Image
    src={Vector}
    alt="Vector Line"
    className="register-animate w-full max-w-[1200px] h-auto object-contain"
    width={1200}
    height={100}
    priority
  />
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[65%] w-full flex justify-center">
    <Image
      src={Community}
      alt="Community Avatars"
      className="register-animate w-full max-w-[1000px] object-contain"
      width={1000}
      height={100}
      priority
    />
  </div>
</div>

<div className="register-animate flex justify-center">
  <button className="mt-4 px-6 md:px-12 py-3 rounded-full border border-purple-500 text-purple-600 font-semibold hover:bg-purple-50 transition flex items-center gap-2">
    Register Now <FaArrowRight className="text-xl" />
  </button>
</div>


        <div className="register-animate flex justify-center">
          <button className="mt-4 px-6 py-3 rounded-full border border-purple-500 text-purple-600 font-semibold hover:bg-purple-50 transition flex items-center gap-2" style={{ paddingRight: 50, paddingLeft: 50 }}>
            Register Now <FaArrowRight className="text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
