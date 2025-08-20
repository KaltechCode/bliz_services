import React from "react";
import IInverted from "../small/Icons/IInvited";
import ServicesContent from "../small/ServicesContent";

type Props = {
  image: string;
  text: string;
  url?: string;
  title: string;
};

const InvertedBorder = ({ image, text, url, title }: Props) => {
  return (
    <div
      className={`h-[300px] md:aspect-square md:h-auto relative top-0 left-0 overflow-hidden rounded-[25px]`}
    >
      <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-white">
        <ServicesContent text={text} title={title} image={image} />
      </div>

      <div
        className={`absolute top-0 right-0  h-[80px] w-[90px] rounded-bl-[25px] flex justify-end ${"bg-white"} overflow-hidden`}
      >
        <IInverted
          url={url ? url : ""}
          style="text-darkblue -rotate-45 group-hover:text-white"
        />
      </div>
    </div>
  );
};

export default InvertedBorder;
