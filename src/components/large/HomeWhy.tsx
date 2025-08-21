import React from "react";
import Conatainer from "../layout/Conatainer";
import bgImg from "../../../public/Image/Circular_bg.png";
import TransparentBlue from "../small/Buttons/TransparentBlue";
import HomeProgressContainer from "../medium/HomeProgressContainer";
import Image from "next/image";

const HomeWhy = () => {
  return (
    <section
      className="py-20 lg:py-24 w-full bg-white h-auto bg-cover bg-no-repeat md:min-h-[100vh] flex items-center bg-left-bottom md:bg-center"
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      <Conatainer full={true}>
        <div className="md:grid grid-cols-2 gap-5 md:gap-10 lg:min-h-full items-center">
          {/* Description container */}
          <div className="md:order-last">
            {/* tag  */}
            <div className="bg-gradient-to-r from-gray-200 to-gray-100 px-7 rounded-full py-2 w-max">
              <p className="!text-blue session-title-text">
                WHY WE ARE THE BEST{" "}
              </p>
            </div>
            {/* title */}
            <div className="mt-5 w-[90%] md:w-full xl:w-[80%] md:t-3">
              <h2 className="py-1 !text-black session-title-text">
                Proven Success,{" "}
                <strong className="!text-blue border-b-2 border-blue ml-1">
                  Unmatched Expertise{" "}
                </strong>
                Your Global Dreams!
              </h2>
            </div>
            {/*  text content*/}
            <div className="mt-7 xl:w-[90%]">
              <p className="text-black text-base font-normal">
                We make relocating abroad stress-free with expert guidance at
                every step. From visas to settling in, we handle it all
                seamlessly. Start your journey with confidence today!
              </p>
            </div>
            <div className="">
              <HomeProgressContainer />
            </div>
            <div className="mt-10">
              <TransparentBlue url="/contact-us" text="Apply Now" />
            </div>
          </div>

          {/* Image container */}
          <div className="relative left-0 right-0 hidden md:grid grid-cols-1 grid-rows-9 h-auto w-full mt-10 gap-3">
            <div className="row-span-5  relative left-0 right-0 overflow-hidden rounded-lg aspect-video">
              <Image
                src="/new/relocation-passport-box.jpg"
                alt=""
                height={960}
                width={540}
                className="aspect-video w-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            <div className="row-span-4 col-span-1  grid grid-cols-2 gap-x-5">
              <div className="relative left-0 right-0 col-span-1 w-full overflow-hidden rounded-lg aspect-square">
                <Image
                  src="/new/digital-skill.jpg"
                  alt=""
                  height={200}
                  width={200}
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="col-span-1 relative left-0 right-0 overflow-hidden rounded-lg">
                <Image
                  src="/new/male-employee-his-new-office-job.jpg"
                  alt=""
                  height={200}
                  width={200}
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="absolute top-[55%] left-[50%] translate-x-[-50%] translate-y-[-55%] h-[100px] w-[100px] overflow-hidden rounded-full aspect-square">
              <Image
                src="/Image/bliz services-05.png"
                alt="image"
                height={100}
                width={100}
                className="aspect-square"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Conatainer>
    </section>
  );
};

export default HomeWhy;
