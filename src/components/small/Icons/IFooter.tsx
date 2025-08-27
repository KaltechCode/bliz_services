import React from "react";
import { IconType } from "react-icons";
import Link from "next/link";

function IFooter({ Icon, url }: { Icon: IconType; url: string }) {
  return (
    <div className="cursor-pointer h-[35px] w-[35px] rounded-full flex items-center justify-center border border-white hover:bg-[#BCCEFB] hover:border-none transition-all duration-500 group:">
      <Link href={url} target="_blank">
        <Icon size={20} className="group-hover:text-darkblue text-white" />
      </Link>
    </div>
  );
}

export default IFooter;
