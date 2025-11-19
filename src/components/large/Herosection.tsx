import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HerosectionEducation from "../medium/slider/HerosectionEducation";
import HerosectionEmployment from "../medium/slider/HerosectionEmployment";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

function Herosection() {
  return (
    <section className="h-[calc(100vh_-_160px)] lg:h-[calc(100vh_-_200px)] 3k:h-[920px]  relative left-0 right-0 bg-white herosection-landscape">
      <div className="w-full h-full grid grid-cols-1 grid-rows-10 lg:grid-rows-1 lg:grid-cols-10">
        <div className="row-span-10 col-span-1 lg:col-span-9 lg:row-span-1  md:rounded-br-[50px]  overflow-hidden">
          <Swiper
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            modules={[Autoplay]}
            loop={true}
            speed={3000}
            className="h-full w-full overflow-hidden"
          >
            <SwiperSlide>
              <HerosectionEducation />
            </SwiperSlide>
            <SwiperSlide className="">
              <HerosectionEmployment />
            </SwiperSlide>
            {/* <SwiperSlide className="">
              <HerosectionDigital />
            </SwiperSlide> */}
          </Swiper>
        </div>
        <div className="lg:col-span-1 row-span-1 hidden lg:flex lg:row-span-10 justify-center">
          <Image
            src="/bliz-services.png"
            height={50}
            width={60}
            alt="Bliz Services"
            className="-rotate-270"
          />
        </div>
      </div>
      <div className="absolute -bottom-10 -right-5 hidden md:block">
        <Image
          src={"/Circular-Mess.png"}
          alt="overlay image circle"
          height={500}
          width={500}
        />
      </div>
    </section>
  );
}

export default Herosection;
