"use client"

import { useState } from "react"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "Is the SentryPass Password Generator safe to use?",
    answer: "Yes, our password generator creates secure random passwords locally in your browser.",
  },
  {
    question: "Why should I use a password generator?",
    answer: "Password generators create strong, unique passwords that are harder to crack than human-created ones.",
  },
  {
    question: "Do I need a unique password for every account?",
    answer:
      "Yes, using unique passwords prevents attackers from accessing multiple accounts if one password is compromised.",
  },
  {
    question: "What are the top 10 worst passwords?",
    answer: "Common weak passwords include '123456', 'password', 'qwerty', and similar easily guessable combinations.",
  },
  {
    question: "What is the best password generator?",
    answer: "The best password generator is one that creates random, strong passwords using a mix of characters.",
  },
  {
    question: "What are the requirements for a strong password?",
    answer: "A strong password should include uppercase and lowercase letters, numbers, and special characters.",
  },
  {
    question: "How do I get a random password?",
    answer: "You can use our password generator tool or a trusted password manager to create random passwords.",
  },
  {
    question: "Can password generators be hacked?",
    answer: "Quality password generators use secure random number generation and can't be predicted or hacked.",
  },
  {
    question: "Is there a secure way to store passwords?",
    answer: "Yes, use a reputable password manager to securely store and encrypt your passwords.",
  },
  {
    question: "What makes a password safe?",
    answer: "A safe password is long, complex, unique, and doesn't contain personal information.",
  },
]

function FaqsList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
    <h1 className="text-4xl lg:text-5xl text-center font-[900] mb-4 ">Password generator Faqs.</h1>
      <p className="text-center mb-8 text-gray-600">Questions about this random password generator? Answers below!</p>

      <div className="bg-white mt-12 ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border-x border-gray-300 ${index === 0 ? "rounded-t-[36px] border-t" : ""} ${
              index === faqs.length - 1 ? "rounded-b-[36px] border-b" : "border-b"
            }`}
          >
            <button
              className="w-full px-6 py-5 text-left flex justify-between items-center  transition-colors duration-200"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              <motion.div
                className="w-6 h-6 flex items-center justify-center rounded-full bg-orange-100 flex-shrink-0 ml-4"
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {openIndex === index ? (
                  <AiOutlineMinus className="w-4 h-4 text-black" />
                ) : (
                  <AiOutlinePlus className="w-4 h-4 text-black" />
                )}
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FaqsList

