import React from 'react';
import Link from 'next/link';
import { Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 md:py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-18">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Subscribe to our newsletter for <br className="hidden md:block" /> security tips.
          </h2>
          <div className="space-y-6">
            <label className="block text-sm">Email address</label>
            <div className="flex flex-col md:flex-row gap-5 md:gap-6 max-w-md">
              <input
                type="email"
                placeholder="name@example.com"
                className="flex-1 px-4 py-4 rounded-full bg-white/10 text-white border border-white/20 focus:outline-none focus:border-[#FFBA29]"
              />
              <button className="px-7 py-4 rounded-full bg-[#FFBA29] text-black hover:bg-[#FFBA29]/90 transition-colors">
                Send
              </button>
            </div>
            <div className="flex items-center gap-2 ml-2">
              <input type="checkbox" className="rounded border-white/20" />
              <label className="text-sm text-white/60">
                I agree to the privacy statement
              </label>
            </div>
          </div>
        </div>

        <hr className="border-white/10 mb-12" />

        {/* Navigation Grid */}
        <div className="flex flex-col gap-10  md:flex-row md:justify-between ">
          {/* Left Navigation */}
          <div className="md:col-span-3 space-y-6">
            <div className="space-y-2">
              <Link href="/" className="block text-white/60 hover:text-[#FFBA29]">Security Tools</Link>
              <Link href="/" className="block text-white/60 hover:text-[#FFBA29]">Cases</Link>
              <Link href="/" className="block text-white/60 hover:text-[#FFBA29]">Solutions ↓</Link>
            </div>

            <div className="space-y-2">
              <Link href="/" className="block text-white/60 hover:text-[#FFBA29]">Faqs</Link>
              <Link href="/" className="block text-white/60 hover:text-[#FFBA29]">Updates</Link>
              <Link href="/" className="block text-white/60 hover:text-[#FFBA29]">Work ↓</Link>
            </div>
          </div>

          <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-medium mb-2">For Business</h3>
              <div className="text-sm text-white/60 mb-4 space-y-2">
                <Link href="/" className="block hover:text-[#FFBA29]">Teams</Link>
                <Link href="/" className="block hover:text-[#FFBA29]">Business</Link>
                <Link href="/" className="block hover:text-[#FFBA29]">Enterprise</Link>
                <Link href="/" className="block hover:text-[#FFBA29]">Partners</Link>
              </div>
              
            </div>

            <div>
              <h3 className="font-medium mb-2">Resources</h3>
              <div className="text-sm text-white/60 mb-4 space-y-2">
                <Link href="/" className="block hover:text-[#FFBA29]">Resource Center</Link>
                <Link href="/" className="block hover:text-[#FFBA29]">Blog</Link>
                <Link href="/" className="block hover:text-[#FFBA29]">Community</Link>
                <Link href="/" className="block hover:text-[#FFBA29]">Support Center</Link>
              </div>
              
            </div>

            <div>
              <h3 className="font-medium mb-2">Trust</h3>
              <div className="text-sm text-white/60 mb-4 space-y-2">
                <Link href="/" className="block hover:text-[#FFBA29]">Trust Center</Link>
                <Link href="/" className="block hover:text-[#FFBA29]">Security</Link>
                <Link href="/" className="block hover:text-[#FFBA29]">Privacy</Link>
                <Link href="/" className="block hover:text-[#FFBA29]">Compliance</Link>
              </div>
    
            </div>
          </div>
        </div>

        <hr className="border-white/10 my-12" />

        {/* Bottom Footer - Improved Mobile Layout */}
        <div className="flex md:flex-row md:justify-between  space-y-6 space-y-reverse md:space-y-0">
          {/* Email */}
          <a 
            href="mailto:info@sentrypasskey.com" 
            className="text-white/60 hover:text-[#FFBA29] text-center md:text-left w-full md:w-auto"
          >
            info@sentrypasskey.com
          </a>

            
            
            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start gap-6 w-full md:w-auto">
              <a 
                href="https://linkedin.com" 
                className="text-white/60 hover:text-[#FFBA29] transition-colors" 
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                className="text-white/60 hover:text-[#FFBA29] transition-colors" 
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                className="text-white/60 hover:text-[#FFBA29] transition-colors" 
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;