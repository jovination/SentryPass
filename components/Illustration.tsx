"use client"
import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';

function Illustration(){
    return(
        <motion.div 
            className="w-full flex justify-center p-2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 15, 
                delay: 0.2 
            }}
        >
            <Image
                src="/illustration.svg"
                alt="illustration"
                width={500}
                height={350}
                className="w-full max-w-[500px] h-auto"
            />
        </motion.div>
    )
}

export default Illustration;