import React from "react";
import Conatainer from "../layout/Conatainer";
import Accordion from "../medium/Accordion";
import { accordionData } from "@/constant/data";
import FAQOvalayImage from "../small/FAQOvalayImage";
import bgImg from "../../../public/Image/why-work-with-us.jpg";

const HomeFAQ = () => {
  return (
    <section
      className="h-max py-16 md:min-h-[100vh] lg:min-h-[100vh] lg:py-24 3k:max-h-[100vh] flex items-center bg-cover bg-right md:bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      <Conatainer full={false}>
        <div className="flex flex-col  items-center">
          <div className="w-full lg:grid grid-cols-2 gap-4 grid-rows-1">
            {/* Section content */}
            <div className="mt-5 w-full lg:col-span-1 lg:px-3 row-span-1">
              <div className="flex flex-col">
                {/* section tag */}
                <div className="bg-gradient-to-r from-gray-300 to-gray-50 px-7 rounded-full py-2 w-max">
                  <p className="!text-[#1717B0] session-title-text">
                    OUR SERVICES BENEFITS{" "}
                  </p>
                </div>

                {/* Section title */}
                <div className="mt-5 w-[90%] md:w-full">
                  <p className="text-black text-base font-normal">
                    At Bliz Services, we understand that pursuing education or
                    work opportunities abroad is a life-changing decision. Our
                    mission is to simplify the process, guide you every step of
                    the way, and open doors to opportunities that align with
                    your dreams. Here’s why thousands trust us:
                  </p>
                </div>
              </div>

              {/* Accordion */}
              <Accordion items={accordionData} />
            </div>

            {/* Image Contanier */}
            <div className="hidden md:block sm:landscape:hidden md:landscape:block  md:w-[100%] md:mx-auto lg:col-span-1 row-span-1">
              <FAQOvalayImage />
            </div>
          </div>
        </div>
      </Conatainer>
    </section>
  );
};

export default HomeFAQ;
