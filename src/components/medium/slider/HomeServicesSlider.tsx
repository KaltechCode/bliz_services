// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

import "swiper/css";

import { Autoplay } from "swiper/modules";
import { homeServices } from "@/constant/data";
import InvertedBorder from "../InvertedBorder";

export default function HomeServicesSwiper() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
  }, []);
  return (
    <div className="w-[100%] h-max md:h-[400px] xl:h-[500px] 2xl:h-[600px] 3k:h-[800px] overflow-hidden">
      <Swiper
        autoplay={true}
        speed={500}
        modules={[Autoplay]}
        loop={true}
        observer={true}
        observeParents={true}
        breakpoints={{
          400: {
            slidesPerView: "auto",
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 60,
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 60,
          },
        }}
      >
        {open &&
          homeServices.map((item, i) => {
            return (
              <SwiperSlide key={i} className="slides-width">
                <InvertedBorder {...item} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
