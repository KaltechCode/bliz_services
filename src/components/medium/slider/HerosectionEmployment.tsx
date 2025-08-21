import { Waving } from "@/constant/icons";
import React from "react";
import { motion } from "framer-motion";
import HerosectionTopClipy from "@/components/small/HerosectionTopClipy";
import HerosectionBottomClipy from "@/components/small/HerosectionBottomClipy";
import Primary from "@/components/small/Buttons/Primary";

function HerosectionEmployment() {
  return (
    <div className="HeroWork__banner-bg w-full h-full grid md:grid-cols-10 lg:grid-cols-9 items-center lg:items-end  relative left-0 right-0 z-40 overflow-hidden">
      <HerosectionTopClipy />
      <div className="w-[90%] mx-auto md:w-[100%] md:col-start-2 md:col-end-10 lg:col-start-2 lg:col-end-9 3k:col-start-3 bg-[#0a193a] bg-opacity-60 px-4 rounded-2xl flex flex-col 3k:gap-10 3k:py-10 gap-7 py-5 lg:mb-9">
        {/* tagged */}
        <motion.div
          className="overflow-hidden"
          initial="initial"
          whileInView="view"
        >
          <motion.h3
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
            className="flex py-2 items-center gap-4 text-base"
          >
            <span>
              <Waving color="#fff" size={25} />
            </span>
            <span className="text-white text-base md:text-xl lg:text-base">
              WORK ABROAD
            </span>
          </motion.h3>
        </motion.div>

        <motion.div
          className="overflow-hidden"
          initial="initial"
          whileInView="view"
        >
          <motion.h2
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
                  duration: 1,
                },
              },
            }}
            className="text-white text-[30px] md:text-[60px] lg:text-[80px] leading-[1]"
          >
            <span>Make A </span>
            <span className="text-pink font-bold drop-shadow-lg">
              Different{" "}
            </span>
            <span>through </span>
            <span className="text-pink font-bold drop-shadow-lg">
              Leadership
            </span>
          </motion.h2>
        </motion.div>

        {/* content */}
        <motion.div
          className=" overflow-hidden"
          initial="initial"
          whileInView="view"
        >
          <motion.div
            variants={{
              initial: {
                y: "100%",
                opacity: 0,
              },
              view: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 1.5,
                  duration: 1,
                },
              },
            }}
            className="flex flex-col lg:flex-row lg:gap-x-3 w-full lg:w-[80%] xl:w-[60%] flex-wrap 3k:flex-col"
          >
            <h2>
              <span className={`text-[#F9FAFB] py-1 Emphasis-text`}>
                Do you desire to work Overseas?
              </span>
              <br />
              <span className={`text-[#F9FAFB] py-1 Emphasis-text`}>
                Do you want to relocate to Overseas?
              </span>
              <br />
              <span className={`text-[#F9FAFB] py-1 Emphasis-text`}>
                Do you understand the application process?
              </span>
            </h2>
          </motion.div>
        </motion.div>

        {/* button container */}
        <motion.div
          className="overflow-hidden"
          initial="initial"
          whileInView="view"
        >
          <motion.div
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
            className="flex gap-4"
          >
            <Primary text="Apply Now" url="/contact-us" />
            {/* <Transparent text="More Details" url="/employment" /> */}
          </motion.div>
        </motion.div>
      </div>
      <HerosectionBottomClipy />
    </div>
  );
}

export default HerosectionEmployment;
