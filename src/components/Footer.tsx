"use client";

import { FaArrowRight, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import Logo from "../assets/logo.png"
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#B86DFF]">
      {/* Top section */}
      <div className="max-w-6xl mx-auto px-4 py-10 lg:text-left">
        {/* Logo */}
                  <div className="flex items-center">
          <Image src={Logo} alt="Logo" width={60} height={60} />
          <div>
          <h1 className="text-xl font-bold ml-2 text-black">
          Founder’s
          </h1>
          <h1 className="text-xl font-bold ml-2 text-black">
          Friday
          </h1>
          </div>
        </div>


        {/* CTA */}
        <div>
  <p className="text-lg font-semibold mb-2 text-center text-black mx-auto max-w-xl" style={{ fontSize: 25, fontWeight: 700, marginTop: 55, marginBottom: 25 }}>
  Want To Be A Part Of Abuja’s Biggest Tech Community?
</p>
<div className="text-center">
  <button className="border-2 border-purple-600 text-purple-600 font-medium px-5 py-2 rounded-full flex items-center gap-2 mx-auto">
    Register For Our Next Event
    <span className="ml-1 text-sm">&gt;&gt;</span>
  </button>
</div>

</div>

      </div>

      {/* Divider */}
<div className="w-4/5 mx-auto border-t border-[#B86DFF] my-6"></div>

      {/* Bottom section */}
      <div className="max-w-6xl mx-auto px-4 pb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
  {/* Socials in container */}
 <div className="flex items-center gap-4 px-4 py-2 rounded-md">
  <div style={{ padding: 10, background: "#9524FF", borderRadius: 50 }}>
    <FaFacebookF className="text-white" />
  </div>
  <div style={{ padding: 10, background: "#9524FF", borderRadius: 50 }}>
    <FaTwitter className="text-white" />
  </div>
  <div style={{ padding: 10, background: "#9524FF", borderRadius: 50 }}>
    <FaInstagram className="text-white" />
  </div>
</div>


  {/* Page links */}
  <div className="flex gap-6 text-sm font-medium">
    <a href="#" className="text-[#8300FF]">Home</a>
    <a href="#" className="text-gray-700">About</a>
    <a href="#" className="text-gray-700">Events</a>
    <a href="#" className="text-gray-700">Contact</a>
  </div>
</div>


    </footer>
  );
}
