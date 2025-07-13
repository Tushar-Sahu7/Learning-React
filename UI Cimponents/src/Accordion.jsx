import React, { useState } from "react";

const AccordionItem = ({ index, isOpen, title, content, onClick }) => {
  return (
    <div className="border-b border-gray-300">
      <button
        onClick={() => onClick(index)}
        className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 transition"
      >
        <span className="text-lg font-medium">{title}</span>
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="p-4 bg-white text-gray-700 transition-all duration-300">
          {content}
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const data = [
    {
      title: "⚛️ What is React?",
      content: "React is a JavaScript library for building user interfaces.",
    },
    {
      title: "🎨 What is Tailwind CSS?",
      content: "Tailwind is a utility-first CSS framework for styling fast.",
    },
    {
      title: "🚀 Why use Accordion?",
      content: "Accordion improves user experience by organizing content.",
    },
  ];

  const handleAccordionClick = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="max-w-md mx-auto mt-10 shadow-xl rounded-xl overflow-hidden border">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={handleAccordionClick}
        />
      ))}
    </div>
  );
};

export default Accordion;
