import React from "react";
import Conatainer from "../layout/Conatainer";
import Testimonials from "../medium/slider/Testimonials";
import bgImg from "../../../public/Image/testimonial-bg.png";
import Link from "next/link";
import { linkToMoreTestimonial } from "@/constant/data";

const HomeTestimonials = () => {
  return (
    <section
      className="h-auto py-20 lg:py-24 bg-gray-200 md:min-h-[100vh] flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      <Conatainer full={false}>
        <div className="w-full h-full flex flex-col items-center">
          <div className="w-full md:w-full md:flex justify-between items-center">
            <div className="">
              <div className="bg-gradient-to-r from-gray-300 to-gray-50 px-5 rounded-full py-2 w-max">
                <p className="!text-blue session-title-text ">
                  Our Testimonials
                </p>
              </div>

              <div className="mt-5 w-[80%] md:w-full">
                <h2 className="py-1 !text-black Emphasis-text">
                  What people say about{" "}
                  <span className="!text-blue border-b-2 border-blue Emphasis-text">
                    Bliz Services
                  </span>
                </h2>
              </div>
            </div>

            <div className="mt-5 md:mt-2">
              <Link
                href={linkToMoreTestimonial}
                target="_blank"
                className="w-max px-[16px] py-[8px] bg-gradient-to-r from-gray-300 to-gray-50 text-[#1717B0] font-normal text-base border border-[#1717B0] border-solid rounded-full flex gap-2 items-center group hover:bg-[#1717B0] hover:text-darkblue hover:border-darkblue transition-all duration-500 h-max
    "
              >
                View More
              </Link>
            </div>
          </div>
          <div className="w-[100%] mt-10 md:mt-16">
            <Testimonials />
          </div>
        </div>
      </Conatainer>
    </section>
  );
};

export default HomeTestimonials;
