import Image from "next/image";
import Navbar from  "@/components/Navbar"
import Hero from  "@/components/Hero"
import FeaturesSection from "@/components/FeaturesSection"
import FaqsSection from "@/components/FaqsSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="w-full min-h-screen ">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <FaqsSection />
      <Footer />
    </div>
  );
}
