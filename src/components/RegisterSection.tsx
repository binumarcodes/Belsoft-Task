"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

import Vector from "../assets/Vector 2.png"
import Community from "../assets/community.png"

const RegisterSection = () => {
  return (
    <section className="bg-[#FEF6FF] py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4  text-black">
          Register And Be Part of Our Community
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          Join our community of over 1000+ founders, developers, and tech junkies in general. Be inspired by people who live to inspire!
        </p>

        {/* Vector line background with community image on top */}
        <div className="relative w-full flex justify-center items-center mb-12">
          {/* Vector line image */}
          <Image
            src={Vector} // Replace with your vector line image path
            alt="Vector Line"
            width={900}
            height={100}
            className="w-full max-w-5xl h-auto object-contain"
            style={{minWidth: 1800}}
          />

          {/* Community avatar image on top */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[65%]">
  <Image
    src={Community}
    alt="Community Avatars"
    width={1400}
    height={100}
    className="object-contain w-auto h-auto"
    style={{ minWidth: 1400 }}
  />
</div>

        </div>

        {/* Call to action button */}
        <div className="flex justify-center">
  <button className="mt-4 px-6 py-3 rounded-full border border-purple-500 text-purple-600 font-semibold hover:bg-purple-50 transition flex items-center gap-2" style={{paddingRight: 50, paddingLeft: 50}}>
    Register Now <FaArrowRight className="text-xl" />
  </button>
</div>

      </div>
    </section>
  );
};

export default RegisterSection;
