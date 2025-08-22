import React from "react";
import ServicesIcons from "../small/Icons/ServicesIcons";
import { IconType } from "react-icons";

function ProgramsBox({
  image,
  title,
  text,
}: {
  image: IconType;
  title: string;
  text: string;
}) {
  return (
    <div className="flex justify-between items-center bg-[#F7F9FF] px-4 py-2 3k:py-3 rounded-lg">
      <div className="h-[50px] w-[50px] bg-[#F7F9FF] rounded-md flex justify-center items-center">
        <ServicesIcons Icon={image} />
      </div>
      <div className="flex flex-col gap-3 w-[80%]">
        <h3 className="Second-Emphasis-Text  !text-black">{title}</h3>
        <p className="text-base font-normal !text-black">{text}</p>
      </div>
    </div>
  );
}

export default ProgramsBox;
