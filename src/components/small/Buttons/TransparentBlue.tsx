"use client";
import React from "react";
import { MdArrowForward } from "react-icons/md";
import Link from "next/link";

function TransparentBlue({ url, text }: { url: string; text: string }) {
  return (
    <Link
      href={url}
      className="px-[16px] py-[8px] bg-transparent text-blue border border-blue border-solid rounded-full flex gap-2 items-center group hover:bg-blue hover:text-white hover:border-blue transition-all duration-500 h-max
    "
    >
      {text}
      <MdArrowForward className="-rotate-45 " size={20} />
    </Link>
  );
}

export default TransparentBlue;
