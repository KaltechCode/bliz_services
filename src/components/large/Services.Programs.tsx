import React from "react";
import Conatainer from "../layout/Conatainer";
import ServicesProgramSlider from "../medium/slider/Services.Program.Slider";
import { programServicesSectionI } from "@/constant/types";

function ServicesPrograms({ title1, title2, data }: programServicesSectionI) {
  // const [country, setCountry] = useState("USA");
  return (
    <section className="h-auto py-20 md:min-h-[100vh]  lg:py-0 lg:min-h-[100vh]  xl:py-16 3k:max-h-[800px] flex items-center bg-white casesSection-landscape">
      <Conatainer full={false}>
        <div className="">
          <div className="md:grid grid-cols-10 gap-1 items-end">
            <div className="mt-5 w-[90%] md:col-span-6">
              <h2 className="py-1 text-black">
                {title1} <br />
                <strong className="text-blue border-b-2 border-blue">
                  {title2}
                </strong>
              </h2>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-16">
          <ServicesProgramSlider data={data} />
        </div>

        {/* <div className="mt-16">
          <MetricsContainer />
        </div> */}
      </Conatainer>
    </section>
  );
}

export default ServicesPrograms;
