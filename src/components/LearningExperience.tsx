"use client";

import Image from "next/image";
import LearningExperienceImage from "../assets/Frame 26.jpg";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";


const LearningExperience = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24 border-b">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">
        {/* Image Section */}
        <div className="relative w-full h-80 md:h-[420px]">
          <Image
            src={LearningExperienceImage}
            alt="Who We Are"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Content Section */}
        <div>
         
          <p className="text-base md:text-lg text-gray-700 mb-5 leading-relaxed" style={{fontWeight: "600", fontSize: 20}}>
            At Founder’s Friday, Every Friday Is a Learning Experience!
          </p>
          <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed" style={{fontWeight: "600", fontSize: 16}}>
            Join us in our mission to transform ideas into impact and shape the future of Nigeria’s startup landscape.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#8300FF] text-white rounded-[40px] hover:bg-[#6b00cc] transition"
              style={{paddingRight: 50, paddingLeft: 50}}
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
