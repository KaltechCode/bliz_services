import React from "react";
import { IconType } from "react-icons";
import Link from "next/link";

function IFooter({ Icon, url }: { Icon: IconType; url: string }) {
  return (
    <div className="cursor-pointer h-[35px] w-[35px] rounded-full flex items-center justify-center border border-white hover:bg-blue hover:border-none transition-all duration-500">
      <Link href={url} target="_blank">
        <Icon color="#fff" size={20} />
      </Link>
    </div>
  );
}

export default IFooter;
