import { Waving } from "@/constant/icons";
import React from "react";
import { motion } from "framer-motion";
import Primary from "@/components/small/Buttons/Primary";

function HerosectionEducation() {
  return (
    <div
      className="HeroEducation__banner-bg w-full h-full grid md:grid-cols-10 lg:grid-cols-9 items-center lg:items-end"
      style={{
        backgroundImage: `url(/new/bliz-study-abroad-banner.jpg)`,
      }}
    >
      {/* tagged */}
      <div className="w-[90%] h-max mx-auto md:w-[100%] md:col-start-2 md:col-end-10 lg:col-start-2 lg:col-end-9  3k:col-start-3 bg-[#0A193A99] bg-opacity-60 px-4 rounded-2xl flex flex-col gap-7 3k:gap-10 py-7 3k:py-10 lg:mb-9">
        <motion.h3
          className="flex items-center gap-4 text-base"
          initial="initial"
          whileInView="view"
        >
          <motion.span
            variants={{
              initial: {
                y: "100%",
                opacity: 0,
              },
              view: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.5,
                  duration: 1,
                },
              },
            }}
          >
            <span className="flex gap-4 items-center">
              <Waving color="#fff" size={25} />

              <span className="text-white text-base md:text-xl lg:text-base">
                CHANGING THE WAY{" "}
              </span>
            </span>
          </motion.span>
        </motion.h3>

        <div className="">
          <motion.h2
            initial="initial"
            whileInView="view"
            className="text-white text-[30px] md:text-[60px] lg:text-[80px]"
          >
            <motion.div
              className=""
              variants={{
                initial: {
                  y: "100%",
                  opacity: 0,
                },
                view: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 1,
                    duration: 1.5,
                  },
                },
              }}
            >
              <span>Unlock Your </span>
              <span className="text-pink font-bold drop-shadow-lg">
                Future{" "}
              </span>
              <span> Abroad </span>
            </motion.div>
          </motion.h2>
        </div>

        {/* Conatent */}
        <div className="overflow-hidden">
          <motion.div
            initial="initial"
            whileInView="view"
            className="md:w-[70%]"
          >
            <motion.div
              className=""
              variants={{
                initial: {
                  y: "100%",
                  opacity: 0,
                },
                view: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 2,
                    duration: 1,
                  },
                },
              }}
            >
              <h2 className={`text-[#F9FAFB] py-1 Emphasis-text `}>
                Relocate, study, or work overseas with ease. We simplify your
                journey, ensuring a smooth transition to your dream destination.
              </h2>
            </motion.div>
          </motion.div>
        </div>

        {/* Button container  */}
        <motion.div
          className="lg:h-[50px] overflow-hidden"
          initial="initial"
          whileInView="view"
        >
          <motion.div
            className="flex gap-4"
            variants={{
              initial: {
                y: "100%",
                opacity: 0,
              },
              view: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 2.5,
                  duration: 1,
                },
              },
            }}
          >
            <Primary text="Apply Now" url="/contact-us" />
            {/* <Transparent text="More Details" url="/education" /> */}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default HerosectionEducation;
