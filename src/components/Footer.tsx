"use client";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#FEF6FF] border-t border-[#B86DFF]">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-center">
          <Image src={Logo} alt="Logo" width={60} height={60} />
          <div className="ml-2">
            <h1 className="text-xl font-bold text-black">Founder’s</h1>
            <h1 className="text-xl font-bold text-black">Friday</h1>
          </div>
        </div>

        <p className="text-2xl font-bold text-center text-black mt-14 mb-6 max-w-xl mx-auto">
          Want To Be A Part Of Abuja’s Biggest Tech Community?
        </p>
        <div className="text-center">
          <button className="border-2 border-purple-600 text-purple-600 font-medium px-5 py-2 rounded-full flex items-center gap-2 mx-auto">
            Register For Our Next Event
            <span className="ml-1 text-sm">&gt;&gt;</span>
          </button>
        </div>
      </div>

      <div className="w-4/5 mx-auto border-t border-[#B86DFF] my-6"></div>

      <div className="max-w-6xl mx-auto px-4 pb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="p-2.5 bg-[#9524FF] rounded-full">
            <FaFacebookF className="text-white" />
          </div>
          <div className="p-2.5 bg-[#9524FF] rounded-full">
            <FaTwitter className="text-white" />
          </div>
          <div className="p-2.5 bg-[#9524FF] rounded-full">
            <FaInstagram className="text-white" />
          </div>
        </div>

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
