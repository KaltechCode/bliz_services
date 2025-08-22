import React from "react";
import Conatainer from "../layout/Conatainer";
import ProgramsBox from "../medium/Programs.Box";
import { IconType } from "react-icons";

interface Services {
  title: string;
  text: string;
  image: IconType;
}

function OurServices({
  title,
  spanTitle,
  data,
}: {
  title: string;
  spanTitle: string;
  data: Services[];
}) {
  return (
    <section className="h-auto py-20 md:min-h-[100vh]  lg:py-12 lg:min-h-[100vh]  xl:py-16 3k:max-h-[800px] flex items-center bg-white casesSection-landscape">
      <Conatainer full={false}>
        <h2 className="session-title-text text-center !text-black">
          {title} <span className="!text-blue">{spanTitle}</span>
        </h2>

        <div className="grid grid-cols-1 grid-rows-1 sm:landscape:grid-cols-2 sm:landscape:grid-rows-2 md:landscape:grid-cols-2 md:landscape:grid-rows-2 md:grid-cols-2 md:grid-rows-2 sm:landscape:gap-10 gap-5 md:landscape:gap-5 2xl:landscape:gap-[2vw] w-full mt-16 md:landscape:w-[100%] lg:w-[100%] xl:w-[80%] 2xl:w-[70%] 3k:w-[75%] 4k:w-[70%]  mx-auto ">
          {data.map(
            (
              item: { title: string; text: string; image: IconType },
              i: number
            ) => {
              return (
                <ProgramsBox
                  title={item.title}
                  text={item.text}
                  image={item.image}
                  key={i}
                />
              );
            }
          )}
        </div>
      </Conatainer>
    </section>
  );
}

export default OurServices;
