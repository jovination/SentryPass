import Image from "next/image";
import Navbar from  "@/components/Navbar"
import Hero from  "@/components/Hero"


export default function Home() {
  return (
    <div className="min-h-screen py-2">
      <Navbar />
      <Hero />
    </div>
  );
}
