import React from "react";
import { IconType } from "react-icons";
import Link from "next/link";

function IHeader({ Icon, url }: { Icon: IconType; url: string }) {
  return (
    <div className="">
      <Link href={url} target="_blank">
        <Icon className="text-darkblue" size={16} />
      </Link>
    </div>
  );
}

export default IHeader;
