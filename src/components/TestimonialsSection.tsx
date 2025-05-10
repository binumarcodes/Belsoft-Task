"use client";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import AvatarImg from "../assets/avatar1.png";
import Image from "next/image";

const testimonials = [
  {
    name: "Jane Doe",
    text: "Always a remarkable experience for my team and myself.",
    avatar: AvatarImg,
  },
  {
    name: "John Smith",
    text: "Great networking and learning opportunity!",
    avatar: AvatarImg,
  },
  {
    name: "Alice Johnson",
    text: "Definitely attending again next year!",
    avatar: AvatarImg,
  },
];

export default function AttendeeTestimonials() {
  return (
    <section className="w-full bg-white py-12 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Heading & Description Centered */}
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold text-black">
            What Do Our Attendees Have To Say?
          </h2>
          <p className="text-gray-600 mt-2">See what people are saying about us</p>
        </div>

        {/* Arrows aligned to the right */}
        <div className="absolute top-0 right-4 flex gap-2 mt-4">
          <button
            className="rounded-full hover:bg-gray-300 flex items-center justify-center"
            style={{ border: "2px solid #E2A7F7", padding: 10 }}
          >
            <FaArrowLeft color="#000" size={16} />
          </button>
          <button
            className="rounded-full hover:bg-gray-300 flex items-center justify-center"
            style={{ border: "2px solid #E2A7F7", padding: 10 }}
          >
            <FaArrowRight color="#000" size={16} />
          </button>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
          {testimonials.map((user, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 rounded-full border-4 border-purple-500 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src={user.avatar}
                  alt={user.name}
                  className="w-28 h-28 rounded-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-black">{user.name}</h3>
              <p className="text-gray-600 mt-2 max-w-xs mx-auto">{user.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
