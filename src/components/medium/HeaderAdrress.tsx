import Link from "next/link";
import React from "react";

function HeaderAdrress({
  text,
  label,
  link,
}: {
  text: string;
  label: string;
  link: string;
}) {
  return (
    <div className={`justify-center items-center flex gap-2`}>
      <div className="">
        <p className="font-light text-gray-400 font-optima smallText">
          {label}
        </p>
        <Link
          href={link}
          target="_blank"
          className="font-semibold text-gray-600 font-optima smallText mt-2"
        >
          {text}
        </Link>
      </div>
    </div>
  );
}

export default HeaderAdrress;
