// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper/modules";
import CasesBox from "../CasesBox";
import { programsServicesI } from "@/constant/types";
import { type Swiper as SwiperRef } from "swiper";

export default function ServicesProgramSlider({
  data,
  swiperRef,
}: {
  data: programsServicesI[];
  swiperRef: React.RefObject<SwiperRef | null>;
}) {
  return (
    <div className="w-[100%] h-[100%] overflow-hidden">
      <Swiper
        // className="smooth-swiper"
        autoplay={{
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
        loop={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          400: {
            slidesPerView: "auto",
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {data.map((item: programsServicesI, i: number) => {
          return (
            <SwiperSlide key={i} className="slides-width">
              <CasesBox {...item} key={i} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
