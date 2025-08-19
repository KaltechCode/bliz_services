import React from "react";

import { Minus, Plus } from "@/constant/icons";
import { AnimatePresence, motion } from "framer-motion";

const StepsAccordionItem = ({
  title,
  content,
  isOpen,
  onClick,
  index,
}: {
  title: string;
  content: string[];
  isOpen: boolean;
  index: number;
  onClick: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-full my-5"
    >
      <div className="grid grid-cols-10 w-full items-center">
        <div className="col-span-2">
          <p className="medium-title text-darkblue">0{index + 1}</p>
        </div>

        <button
          className={`col-span-8 w-full py-3 flex gap-5 xl:gap-7 items-center transition-colors  rounded-3xl  px-2 ${
            isOpen ? "rounded-br-none rounded-bl-none" : "rounded-3xl"
          }`}
          onClick={onClick}
        >
          <div className="h-[35px] w-[35px] rounded-full bg-black flex justify-center items-center">
            {isOpen ? (
              <Minus color="#fff" size={25} className="font-bold" />
            ) : (
              <Plus color="#fff" size={25} className="font-bold" />
            )}
          </div>
          <span className="text-gray-600 medium-title font-medium">
            {title}
          </span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          ></motion.span>
        </button>
      </div>
      <div className="xl:grid grid-cols-10 w-full items-center">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden col-start-4 col-end-10 3k:col-end-8"
            >
              <div className="p-6 bg-white space-y-4">
                {content.length > 1 ? (
                  <ul>
                    {content.map((item: string, i: number) => {
                      return (
                        <li className="text-gray-600 py-2" key={i}>
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p className="text-gray-600">{content[0]}</p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default StepsAccordionItem;
