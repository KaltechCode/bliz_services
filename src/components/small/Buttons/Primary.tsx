"use client";
import { MdArrowForward } from "react-icons/md";
import Link from "next/link";

function Primary({ url, text }: { url: string; text: string }) {
  return (
    <Link
      href={url}
      className="px-[16px] py-[8px] bg-pink border border-pink !text-darkblue border-solid rounded-full flex gap-2 items-center group hover:!bg-transparent hover:!text-white transition-all duration-500 h-max group 
    "
    >
      {text}
      <MdArrowForward
        className="-rotate-45 !text-darkblue group-hover:!text-white font-normal"
        size={18}
      />
    </Link>
  );
}

export default Primary;
