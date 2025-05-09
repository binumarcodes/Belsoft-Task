"use client";

import Image from "next/image";
import aboutUSImage from "../assets/about_us.png";
import Line1 from "../assets/Line 1.png";
import Link from "next/link";
import { FaArrowRight, FaHandHoldingHeart, FaMoneyBillWave } from "react-icons/fa";
import { MdMoney } from "react-icons/md";
import { PiMoney } from "react-icons/pi";

const AboutUs = () => {
  return (
    <section className="bg-[#FDF7FF] py-20 px-6 md:px-12 lg:px-24 border-b">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">
        {/* Image Section */}
        <div className="relative w-full h-80 md:h-[420px]">
          <Image
            src={aboutUSImage}
            alt="Who We Are"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Content Section */}
        <div style={{position: "relative"}}>
          <Image
            src={Line1}
            alt="Who We Are"
            className="object-contain"
            priority
            style={{ position: "absolute", top: 0, left: -40, height: 435}}
          />
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Who Are We?
          </h2>
          <p className="text-base md:text-lg text-gray-500 mb-5 leading-relaxed">
            Born from the vibrant startup ecosystem of Abuja, we recognized the need for a consistent, high-quality networking platform where founders, innovators, and tech enthusiasts could connect, share ideas, and foster collaboration.
          </p>


          {/* Buttons */}
          <div className="flex flex-wrap gap-4" style={{ marginTop: 49, marginBottom: 121}}>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#8300FF] text-white rounded-[40px] hover:bg-[#6b00cc] transition"
              style={{
                width: 190,
                height: 55,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              Register
              <FaArrowRight className="text-sm" />
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#8300FF] text-[#8300FF] rounded-[40px] hover:bg-[#f5eaff] transition"
              style={{
                width: 190,
                height: 55,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              Donate
              <FaHandHoldingHeart className="text-sm" />
            </Link>
          </div>
        <h4 className="text-4xl font-bold text-gray-900 mb-6 leading-tight" style={{fontSize: 18}}>
            Founder's Friday is more than just a meetup — it's a movement.
          </h4>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
