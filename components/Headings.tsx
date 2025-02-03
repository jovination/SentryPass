"use client"

import { motion } from "framer-motion"

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

function Headings() {
  return (
    <div className="flex flex-col items-center gap-4">
      <motion.h1
        className="text-4xl lg:text-5xl text-center font-[900]"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.1 }} 

      >
        Random Password Generator
      </motion.h1>
      <motion.p
        className="text-center"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }} 
      >
        Create strong and secure passwords to keep your account safe online.
      </motion.p>
    </div>
  )
}

export default Headings

