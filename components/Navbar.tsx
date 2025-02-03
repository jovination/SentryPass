"use client"
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

function Navbar(){
    return (
        <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
                delay: 0.2, 
                duration: 0.4,
                type: "spring",
                stiffness: 120 
            }}
        >
         <nav 
         className="w-full px-4 md:px-8 flex flex-row items-center justify-between h-[90px] border-b border-[#C5D6E0]"
         >
            <Link
            className="flex items-center gap-2"
             href="/">
             <Image
              src="/sentrypass.svg"
              alt="SentryPass Logo"
              width={45}
              height={45}
             />
             <span className="text-2xl font-black">SentryPasskey</span>
            </Link>
            <Button className="rounded-[48px] text-lg font-medium w-[108px] h-[50px]" size="lg" >Get App</Button>
         </nav>
        </motion.div>
    )
}
export default Navbar;