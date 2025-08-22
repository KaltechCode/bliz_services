import React, { useState } from "react";
import AccordionItem from "../small/AccordionItem";

interface AccordionItemData {
  id: number;
  title: string;
  content: {
    description: string;
  };
}

interface AccordionProps {
  items: AccordionItemData[];
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ items, className }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div
      className={`w-full flex-col gap-5 mx-auto rounded-lg overflow-hidden mt-5 lg:mt-10 ${className}`}
    >
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          index={index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
