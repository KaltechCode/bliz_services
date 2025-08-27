import { Minus, Plus } from "@/constant/icons";
import { AnimatePresence, motion } from "framer-motion";

const FAQAccordium = ({
  key,
  title,
  content,
  isOpen,
  index,
  onClick,
}: {
  key: number;
  title: string;
  content: string;
  isOpen: boolean;
  index: number;
  onClick: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 5, delay: index * 0.1 }}
      className={`rounded-full my-5 py-5   ${
        isOpen ? "" : "border-b border-gray-100"
      }`}
      key={key}
    >
      <button
        className={`w-full py-3 grid grid-cols-10 lg:gap-10 items-center transition-colors bg-white rounded-3xl  px-2 ${
          isOpen ? "rounded-br-none rounded-bl-none" : "rounded-3xl"
        }`}
        onClick={onClick}
      >
        <div className="col-span-2 lg:col-span-3 justify-items-start">
          {isOpen && (
            <AnimatePresence>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                className={` text-textColor/30 transition-all duration-700 medium-title`}
              >
                0{index + 1}.
              </motion.p>
            </AnimatePresence>
          )}
        </div>

        <p
          className={`col-span-6 lg:col-span-6 text-left font-optima medium-title !font-normal text-black`}
        >
          {title}
        </p>
        <div className="col-span-2 lg:col-span-1 justify-items-end">
          <button
            className={` flex-shrink-0 rounded-full w-[40px] h-[40px] lg:w-[40px] lg:h-[40px]  flex justify-center items-center ${
              isOpen ? "bg-white" : "bg-darkblue"
            }`}
          >
            {!isOpen ? (
              <Plus className="text-2xl lg:text-3xl transition-all duration-500 text-white" />
            ) : (
              <Minus className="text-2xl lg:text-3xl transition-all duration-500 text-darkblue" />
            )}
          </button>
        </div>
      </button>
      <div className="grid grid-cols-1 mobile-landscape:grid-cols-3 md:grid-cols-3 lg:grid-cols-2 ">
        <div className="mobile-landscape:col-start-2 mobile-landscape:col-span-2 md:col-start-2 md:col-span-2">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="overflow-hidden"
              >
                <div className="py-6 bg-white space-y-4">
                  <p className={`pTextStyle text-black`}>{content}</p>
                </div>
                {/* <Image
                  src={image}
                  alt="hello"
                  height={1500}
                  width={200}
                  className="w-full object-cover aspect-video rounded-xl"
                /> */}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default FAQAccordium;
