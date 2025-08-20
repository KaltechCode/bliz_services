import React from "react";
import HomeAboutImage from "../small/HomeAboutImage";
import TransparentBlue from "../small/Buttons/TransparentBlue";
import AboutParagrah from "../medium/AboutParagrah";
import bgImg from "../../../public/Image/about-us-bg.jpg";

const HomeAbout = () => {
  return (
    <section
      className="h-max py-16  md:min-h-[100vh] 3k:max-h-[800px] flex items-center relative top-0 left-0  bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      <div className="flex flex-col md:grid grid-cols-2 gap-4 w-[90%] md:w-[90%] lg:w-[90%] 3k:w-[80%] mx-auto md:ml-0 3k:items-center">
        {/* curve image */}
        <HomeAboutImage />

        {/* content container */}
        <div className="md:mt-5 px-3 flex flex-col md:col-start-2 md:col-end-3">
          <div className="bg-gradient-to-r from-[#fff] to-gray-100 px-7 rounded-full py-2 w-max">
            <p className="text-blue">ABOUT US </p>
          </div>

          <div className="mt-5 w-[90%] md:w-full xl:w-[80%]">
            <h2 className="py-1 text-black">
              We specialize in seamless <br />
              <strong className="text-blue border-b-2 border-blue ml-1">
                International Relocations
              </strong>
            </h2>
          </div>

          <div className="mt-7 xl:w-[90%]">
            <p className="text-black">
              We make relocating abroad stress-free with expert guidance at
              every step. From visas to settling in, we handle it all
              seamlessly. Start your journey with confidence today!
            </p>
          </div>

          {/* paragrah list */}
          <AboutParagrah />

          {/**/}

          <div className="bg-white py-1 mt-5 rounded-full md:flex-row w-max lg:px-2 self-start">
            <div className="rounded-xl px-4 py-3 flex">
              <TransparentBlue text="Contact Us" url="/contact-us" />
            </div>

            {/* Rating */}
            {/* <div className="flex items-center gap-5 px-3">
              <p className="text-2xl font-bold">4.5</p>
              <div className="">
                <p>Review On</p>
                <Rating rating={4} />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
