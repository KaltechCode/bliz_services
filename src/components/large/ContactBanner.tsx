import React from "react";

function ContactBanner() {
  return (
    <section className="Services__banner-bg h-[calc(100vh-50vh)] lg:h-[calc(100vh-55vh)] servicesContainer">
      <div className="w-full h-full flex flex-col gap-2 justify-center items-center md:justify-center  md:pt-0">
        <h2 className="font-bold text-white text-[30px] md:text-[60px] lg:text-[80px] leading-[1]">
          Contact Us
        </h2>
        <p className="text-white Emphasis-text">
          Build Yourself, Build Your Career
        </p>
      </div>
    </section>
  );
}

export default ContactBanner;
