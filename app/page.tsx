import Image from "next/image";
import Navbar from  "@/components/Navbar"
import Hero from  "@/components/Hero"
import FeaturesSection from "@/components/FeaturesSection"


export default function Home() {
  return (
    <div className="w-full min-h-screen   py-2">
      <Navbar />
      <Hero />
      <FeaturesSection />
    </div>
  );
}
