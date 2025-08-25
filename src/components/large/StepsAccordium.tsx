import { stepsI } from "@/constant/types";
import { useState } from "react";
import StepsAccordionItem from "../small/StepsAccordion";
import Conatainer from "../layout/Conatainer";
import { MdArrowForward } from "react-icons/md";
import Link from "next/link";

function StepsAccordium({
  data,
  className,
  link,
}: {
  data: stepsI[];
  className: string;
  link: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="h-auto py-20 md:min-h-[100vh] lg:py-12 lg:min-h-[100vh]  xl:py-24 3k:max-h-[800px] flex items-center bg-white">
      <Conatainer full={false}>
        <h2 className="session-title-text !text-black font-optima">
          Easy Steps to Apply.
        </h2>

        <div
          className={`w-full flex-col gap-5 mx-auto rounded-lg overflow-hidden mt-5 lg:mt-10 ${className} px-2`}
        >
          {data.map((item, index) => (
            <StepsAccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isOpen={openIndex === index}
              index={index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <div className="mt-10 xl:mt-16 w-full flex justify-center">
          <Link
            href={link}
            className="w-max px-[16px] py-[8px] bg-darkblue border border-pink text-white border-solid rounded-full flex gap-2 items-center group hover:bg-transparent hover:text-darkblue transition-all duration-500 h-max group 
    "
          >
            Apply Now
            <MdArrowForward
              className="-rotate-45 text-white group-hover:text-darkblue font-semibold"
              size={20}
            />
          </Link>
        </div>
      </Conatainer>
    </section>
  );
}

export default StepsAccordium;
