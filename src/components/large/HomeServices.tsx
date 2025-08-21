"use client";
import React, { useRef } from "react";
import Conatainer from "../layout/Conatainer";
import HomeServicesSwiper from "../medium/slider/HomeServicesSlider";
import Image from "next/image";
import { type Swiper as SwiperRef } from "swiper";

const HomeServices = () => {
  const ref = useRef<SwiperRef>(null);
  // const handlePrev = () => {
  //   ref.current?.slidePrev();
  // };
  // const handleNext = () => {
  //   ref.current?.slideNext();
  // };

  return (
    <section className="h-auto py-24 lg:py-24  md:min-h-[100vh] lg:min-h-[100vh] flex items-center relative top-0 left-0 bg-gray-100 md:bg-white">
      <Conatainer full={false}>
        <div className="w-full flex flex-col justify-center items-center">
          {/* section title container */}
          <div className="mt-3">
            <h2 className="py-1 text-black session-title-text">
              Our Special{" "}
              <span className="text-blue border-b-2 border-blue ml-[2px] session-title-text">
                Services
              </span>
            </h2>
          </div>

          {/* services slides container */}
          <div className="w-[100%] lg:w-[100%] 2k:w-[90%] flex mt-10 lg:mt-12">
            <HomeServicesSwiper swiperRef={ref} />
          </div>
        </div>
      </Conatainer>
      <div className="hidden md:block absolute left-0 top-[60%] translate-y-[-60%]">
        <Image src={"/services-bg.png"} alt="" height={100} width={100} />
      </div>
    </section>
  );
};

export default HomeServices;
