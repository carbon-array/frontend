import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

// Import Google Font in index.html or globally in Tailwind
import "@fontsource/inter"; // Optional if using a package manager

const faqs = [
  {
    question: "What is a carbon credit?",
    answer: " A carbon credit is a permit that allows the holder to emit one metric tonne of carbon dioxide or its equivalent in other greenhouse gases.",
  },
  {
    question: "How does your carbon credit exchange work?",
    answer: "Our platform facilitates the buying and selling of carbon credits, providing a marketplace for users to trade verified emissions reductions.",
  },
  {
    question: "What are the benefits of using your platform to trade carbon credits?",
    answer: "We offer transparency, security, and ease of use for trading carbon credits, with tools to track and verify each credit's history.",
  },
  {
    question: "How do you ensure the quality and validity of carbon credits traded on your platform?",
    answer: "All credits are verified by accredited third parties, and our platform conducts additional checks to ensure high environmental integrity.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto p-8 flex gap-12 font-inter">
      {/* Left Side - FAQ Heading */}
      <div className="w-1/4">
        <h2 className="text-4xl font-bold">FAQs</h2>
      </div>

      {/* Right Side - Questions */}
      <div className="w-3/4 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-3">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left text-lg font-medium py-3"
            >
              <span>{faq.question}</span>
              {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={openIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="text-gray-600 pt-2">{faq.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
