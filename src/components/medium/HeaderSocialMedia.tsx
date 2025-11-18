import SocialLinks from "@/constant/data";
import React from "react";
import IHeader from "../small/Icons/IHeader";

function HeaderSocialMedia() {
  return (
    <div className="hidden justify-center items-center gap-3 md:flex">
      <div className="">
        <p className="font-light text-gray-400 font-optima smallText">
          Follow Us
        </p>
        <div className="flex gap-3 mt-2">
          {SocialLinks.map((item, index) => {
            return <IHeader {...item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default HeaderSocialMedia;
