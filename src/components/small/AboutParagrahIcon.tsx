import { Check } from "@/constant/icons";
import React from "react";

type Props = {
  text: string;
};

export default function AboutParagrahIcon({ text }: Props) {
  return (
    <div className="flex gap-3 lg:ga-2 items-center lg:w-[48%]">
      <Check size={20} className="text-pink" />
      <p className="Emphasis-text !font-normal !text-black ">{text}</p>
    </div>
  );
}
