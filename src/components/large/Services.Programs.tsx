import React, { useRef } from "react";
import Conatainer from "../layout/Conatainer";
import ServicesProgramSlider from "../medium/slider/Services.Program.Slider";
import { programServicesSectionI } from "@/constant/types";
import { type Swiper as SwiperRef } from "swiper";
import { UpwardArrow } from "@/constant/icons";

function ServicesPrograms({ title1, title2, data }: programServicesSectionI) {
  const ref = useRef<SwiperRef>(null);
  // const [country, setCountry] = useState("USA");
  const handlePrev = () => {
    ref.current?.slidePrev();
  };
  const handleNext = () => {
    ref.current?.slideNext();
  };
  return (
    <section className="h-auto py-20 md:min-h-[100vh]  lg:py-0 lg:min-h-[100vh]  xl:py-16 3k:max-h-[800px] flex items-center bg-white casesSection-landscape">
      <Conatainer full={false}>
        <div className="">
          <div className="md:grid grid-cols-10 gap-1 items-end">
            <div className="mt-5 w-[90%] md:col-span-6">
              <h2 className="py-1 session-title-text !text-black ">
                {title1} <br />
                <strong className="session-title-text !text-blue border-b-2 border-blue">
                  {title2}
                </strong>
              </h2>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-16">
          <ServicesProgramSlider data={data} swiperRef={ref} />
        </div>

        {/* <div className="mt-16">
          <MetricsContainer />
        </div> */}

        {/* slider navigation arrow */}
        <div className="w-full flex justify-between mt-10">
          <button
            className="h-10 w-10 rounded-full flex justify-center items-center bg-darkblue"
            onClick={handlePrev}
          >
            <UpwardArrow size={25} className="text-white rotate-180" />
          </button>
          <button
            className=" h-10 w-10 rounded-full flex justify-center items-center bg-darkblue"
            onClick={handleNext}
          >
            <UpwardArrow size={25} className="text-white" />
          </button>
        </div>
      </Conatainer>
    </section>
  );
}

export default ServicesPrograms;
