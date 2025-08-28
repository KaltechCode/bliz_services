"use client";
import { Waving } from "@/constant/icons";
import { heroServiceSectionI } from "@/constant/types";
import Image from "next/image";
import Primary from "../small/Buttons/Primary";
import useMobile from "@/hooks/useMobile";

function ServicesBanner({
  tag,
  list,
  bannerImage,
  title1,
  title2,
  url,
}: heroServiceSectionI) {
  const isDesktop = useMobile("(min-width: 761px)");
  return (
    <section className="h-[calc(100vh_-_160px)] lg:h-[calc(100vh_-_200px)]  relative left-0 right-0 bg-white herosection-landscape">
      <div className="w-full h-full grid grid-cols-1 grid-rows-10 lg:grid-rows-1 lg:grid-cols-10">
        <div className="row-span-10 col-span-1 lg:col-span-9 lg:row-span-1 rounded-br-[50px]  overflow-hidden">
          <div
            className="HeroEducation__banner-bg w-full h-full grid md:grid-cols-10 lg:grid-cols-9 items-center lg:items-end bg-bottom"
            style={{
              backgroundImage: `url(${
                isDesktop ? bannerImage : "/new/Work_abroad_Mobile.webp"
              })`,
            }}
          >
            {/* tagged */}
            <div className="w-[90%] h-max mx-auto md:w-[100%] md:col-start-2 md:col-end-10 lg:col-start-2 lg:col-end-9  3k:col-start-3 bg-[#0a193a] bg-opacity-60 px-4 rounded-2xl flex flex-col gap-7 lg:gap-5 3k:gap-10 3k:py-10 py-5 mb-3 3k:mb-10">
              <h3 className="flex items-center gap-4 text-base">
                <span>
                  <span className="flex gap-4 items-center">
                    <Waving color="#fff" size={25} />

                    <span className="text-white text-base md:text-xl lg:text-base">
                      {tag}{" "}
                    </span>
                  </span>
                </span>
              </h3>

              <div className="">
                <h1 className="text-white text-[30px] md:text-[60px] lg:text-[80px] leading-[1]">
                  <span className="">
                    <span>{title1} </span>
                    <span className="text-pink font-bold drop-shadow-lg">
                      {title2}
                    </span>
                  </span>
                </h1>
              </div>

              {/* Conatent */}
              <div className="overflow-hidden">
                <div className="md:w-[70%]">
                  <div className="">
                    {list.map((item: string, i: number) => (
                      <div className=" py-1 flex items-center gap-2" key={i}>
                        <span className="text-white">*</span>{" "}
                        <h2 className="Emphasis-text text-white">{item}</h2>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Button container  */}
              <div className="w-max">
                <Primary text="Apply Now" url={url} />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 row-span-1 hidden lg:flex lg:row-span-10 justify-center">
          <Image
            src="/bliz-services.png"
            height={50}
            width={60}
            alt="Blis Services"
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

export default ServicesBanner;
