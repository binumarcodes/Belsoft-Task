"use client";

import Image from "next/image";
import Link from "next/link";

import Group3 from "../assets/Group 3.png"
import Ellipse3 from "../assets/Ellipse 3.png"; // Example logos
import Ellipse1 from "../assets/Ellipse 1.png";
import Ellipse2 from "../assets/Ellipse 2.png";
import Ellipse4 from "../assets/Ellipse 4.png";
import Ellipse5 from "../assets/Ellipse 5.png";

const Hero = () => {
  return (
    <section className="bg-[#FDF7FF] py-20 px-6 md:px-12 lg:px-24 text-center md:text-left" style={{paddingTop: 120}}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div>
          <p className="text-sm font-medium text-[#000000] mb-2" style={{fontWeight: "600"}}>
            Join our premier monthly meetup for startup founders and tech visionaries
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#5C00B3] leading-tight mb-6">
            Connect, Collaborate, Innovate!
          </h1>
          <p className="text-base text-gray-700 mb-6">
            Every last Friday of the month, we bring together the brightest minds in our local tech ecosystem. Whether you're a seasoned entrepreneur or just starting your journey, Founder's Friday is your launchpad for new ideas, valuable connections, and game-changing opportunities.
          </p>

          <Link
            href="/register"
            className="inline-flex items-center gap-2 text-[#8300FF] border-2 border-[#8300FF] px-6 py-3 rounded-full font-medium text-base hover:bg-[#8300FF] hover:text-white transition"
          >
            Register For Our Next Event →
          </Link>

          <p className="mt-4 text-sm text-[#6750A4]" style={{fontWeight: "600", fontSize: 12}}>
            Join Us for our next meetup on the 26th of July 2024
          </p>

          {/* Collaborators */}
          <div className="mt-10 flex items-center gap-6 flex-wrap justify-center md:justify-start">
            <Image src={Ellipse3} alt="Collaborator 1" width={50} height={50} />
            <Image src={Ellipse1} alt="Collaborator 2" width={50} height={50} />
            <Image src={Ellipse2} alt="Collaborator 3" width={50} height={50} />
            <Image src={Ellipse4} alt="Collaborator 4" width={50} height={50} />
            <Image src={Ellipse5} alt="Collaborator 5" width={50} height={50} />
          </div>
            <p className="text-sm text-gray-600" style={{ fontWeight: "600", marginTop: 31, color: "#000", fontSize: 14}}>Become a collaborator today 🔗</p>
        </div>

        {/* Right Column – Images */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-[90%] h-auto">
              <Image src={Group3} alt="Founder's Friday 4" width={700} height={746} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
