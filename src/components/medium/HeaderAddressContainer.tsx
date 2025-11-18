import React from "react";
import HeaderAdrress from "./HeaderAdrress";
import HeaderSocialMedia from "./HeaderSocialMedia";
import { headerAddress } from "@/constant/data";

export default function HeaderAddressContainer() {
  return (
    <div className="md:col-span-6 md:row-span-7 3k:col-span-7 bg-white flex gap-10 justify-end  md:px-0 md:pr-10 relative left-0 right-0 clipy py-3">
      <HeaderSocialMedia />
      {headerAddress.map((item) => (
        <HeaderAdrress
          key={item.label}
          text={item.text}
          label={item.label}
          link={item.link}
        />
      ))}
    </div>
  );
}
