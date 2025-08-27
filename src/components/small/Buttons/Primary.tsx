"use client";
import { MdArrowForward } from "react-icons/md";
import Link from "next/link";

function Primary({ url, text }: { url: string; text: string }) {
  return (
    <Link
      href={url}
      className="px-[16px] py-[8px] bg-pink border border-pink !text-darkblue border-solid rounded-full flex gap-2 items-center group/link is-primary hover:!bg-transparent hover:!text-white transition-all duration-500 h-max primaryLink 
    "
    >
      {text}
      <MdArrowForward
        className="-rotate-45 font-normal text-darkblue group-hover/link:text-white"
        size={18}
      />
    </Link>
  );
}

export default Primary;
