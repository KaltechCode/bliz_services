"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";
import { testimonials } from "@/constant/data";
import TestimonialContent from "@/components/small/TestimonialContent";
import { useEffect, useState } from "react";

// Function to generate background color based on first letter
const getBackgroundColor = (firstLetter: string): string => {
  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-teal-500",
    "bg-orange-500",
    "bg-cyan-500",
    "bg-emerald-500",
    "bg-violet-500",
    "bg-rose-500",
    "bg-amber-500",
    "bg-lime-500",
    "bg-sky-500",
    "bg-fuchsia-500",
    "bg-slate-500",
    "bg-gray-500",
    "bg-zinc-500",
    "bg-neutral-500",
  ];

  // Use charCodeAt to get a consistent color for each letter
  const charCode = firstLetter.charCodeAt(0);
  const colorIndex = charCode % colors.length;
  return colors[colorIndex];
};

export default function Testimonials() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
  }, []);
  return (
    <>
      <Swiper
        speed={1500}
        modules={[Autoplay]}
        autoplay={true}
        breakpoints={{
          400: {
            slidesPerView: "auto",
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1400: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          2024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {open &&
          testimonials.map((item, i) => {
            return (
              <SwiperSlide key={i} className="slides-width">
                <div className="w-full h-[250px] lg:h-auto testmonial-box">
                  <div
                    className={`w-full h-full rounded-2xl overflow-hidden  `}
                  >
                    <div className="absolute top-0 left-0 w-[100%] bg-white rounded-2xl overflow-hidden">
                      <TestimonialContent
                        text={item.text}
                        name={item.name || ""}
                        // image={item.image}
                        // rating={item.rating || 0}
                        // role={item.role || ""}
                      />
                    </div>

                    <div
                      className={`absolute top-0 right-0  h-[80px] w-[90px] rounded-bl-[25px] flex justify-end ${"bg-gray-200"}`}
                    >
                      <div
                        className={`h-[50px] w-[50px] rounded-full ${getBackgroundColor(
                          item.name.slice(0, 1)
                        )} flex justify-center items-center`}
                      >
                        <p className="Emphasis-text !text-white">
                          {item.name.slice(0, 1)}
                        </p>
                        {/* <img
                          src={item.image}
                          alt={item.name ? item.name : "Client picture"}
                          className="rounded-full h-[100%] w-[100%] object-cover"
                        /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
