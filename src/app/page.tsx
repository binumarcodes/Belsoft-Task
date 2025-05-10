import AboutUs from "@/components/AboutUs";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LearningExperience from "@/components/LearningExperience";
import Navbar from "@/components/Navbar";
import RegisterSection from "@/components/RegisterSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhatWeOffer from "@/components/WhatWeOffer";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <AboutUs />
    <WhatWeOffer />
    <RegisterSection />
    <LearningExperience />
    <TestimonialsSection />
    <FAQs />
    <Footer />
    </>
  );
}
