import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How can I ensure my data is secure?",
    answer: "We use industry-standard encryption and security protocols to protect your data.",
  },
  {
    question: "Do you train models on my data?",
    answer: "No, we do not use your data to train models. Your privacy is our priority.",
  },
  {
    question: "How do connectors work?",
    answer: "Connectors allow seamless data integration between different platforms and services.",
  },
  {
    question: "How do automations work?",
    answer: "Automations streamline workflows by executing tasks based on predefined triggers.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto p-8 flex gap-12">
      {/* Left Side - FAQ Heading */}
      <div className="w-1/4">
        <h2 className="text-4xl font-bold">FAQ</h2>
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
