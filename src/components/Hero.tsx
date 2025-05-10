"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

import Group3 from "../assets/Group 3.png";
import VectorLine from "../assets/Vector 1.png";

import Ellipse3 from "../assets/Ellipse 3.png";
import Ellipse1 from "../assets/Ellipse 1.png";
import Ellipse2 from "../assets/Ellipse 2.png";
import Ellipse4 from "../assets/Ellipse 4.png";
import Ellipse5 from "../assets/Ellipse 5.png";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      });

      gsap.from(".hero-image", {
        opacity: 0,
        scale: 0.95,
        duration: 1.5,
        ease: "power2.out",
      });

      gsap.from(".hero-avatars img", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        delay: 1,
        ease: "power2.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
  ref={heroRef}
  className="bg-[#FDF7FF] pt-[120px] pb-20 px-6 md:px-12 lg:px-24 text-center md:text-left"
>
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    {/* Left Content */}
    <div>
      <p className="hero-text text-sm font-semibold text-black mb-2">
        Join our premier monthly meetup for startup founders and tech visionaries
      </p>
      <h1 className="hero-text text-4xl md:text-5xl font-extrabold text-[#5C00B3] leading-tight mb-6">
        Connect, Collaborate, Innovate!
      </h1>
      <p className="hero-text text-base text-gray-700 mb-6">
        Every last Friday of the month, we bring together the brightest minds in our local tech ecosystem. Whether you're a seasoned entrepreneur or just starting your journey, Founder's Friday is your launchpad for new ideas, valuable connections, and game-changing opportunities.
      </p>

      <Link
        href="/register"
        className="hero-text inline-flex items-center gap-2 text-[#8300FF] border-2 border-[#8300FF] px-6 py-3 rounded-full font-medium text-base hover:bg-[#8300FF] hover:text-white transition"
      >
        Register For Our Next Event →
      </Link>

      <p className="hero-text mt-4 text-xs font-semibold text-[#6750A4]">
        Join Us for our next meetup on the 26th of July 2024
      </p>

      <div className="hero-avatars mt-10 flex flex-wrap justify-center md:justify-start items-center gap-4">
        {[Ellipse3, Ellipse1, Ellipse2, Ellipse4, Ellipse5].map((img, i) => (
          <Image key={i} src={img} alt={`Collaborator ${i + 1}`} width={48} height={48} className="w-12 h-12" />
        ))}
      </div>

      <p className="hero-text mt-8 text-sm font-semibold text-black">
        Become a collaborator today 🔗
      </p>
    </div>

    {/* Right Content - Hidden on Mobile */}
    <div className="relative justify-center items-center hidden md:flex">
      <Image
        src={VectorLine}
        alt="Vector Line"
        className="absolute z-0 w-[90%] max-w-[600px] h-auto -left-10 top-1/2 -translate-y-1/2 rotate-[10deg] pointer-events-none"
      />
      <div className="hero-image relative z-10 w-full max-w-[500px] h-auto">
        <Image
          src={Group3}
          alt="Founder's Friday"
          width={700}
          height={746}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </div>
  </div>
</section>

  );
};

export default Hero;
