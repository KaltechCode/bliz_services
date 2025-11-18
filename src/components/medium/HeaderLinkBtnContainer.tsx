"use client";
import React, { useRef, useState } from "react";

import NavbarBtnGroup from "./nav/NavbarBtnGroup";
import NavbarLinks from "./nav/NavbarLinks";
import { Menu } from "@/constant/icons";
import useClickOutside from "@/hooks/ClickOutside";
import Handburger from "./nav/Handburger";

function HeaderLinkBtnContainer() {
  const [handBur, setHandBur] = useState<boolean>(false);
  const ref = useRef(null);

  useClickOutside(ref, function () {
    setHandBur(false);
  });

  const containerStyle = `w-full bg-white md:col-span-7 md:row-span-3 px-5 md:px-0 md:grid grid-cols-7`;
  const innerContainer = `md:col-span-6 3k:col-span-7 flex justify-between items-center h-full bg-darkblue md:pr-5 lg:pr-10 md:landscape:pr-10`;

  return (
    <div className={containerStyle}>
      <div className={innerContainer}>
        {/* handburger for only (lg screen)  */}
        <div className="md:hidden" ref={ref}>
          <Menu
            size={35}
            color="#fff"
            className="cursor-pointer "
            onClick={() => {
              setHandBur(true);
            }}
          />
          <Handburger ref={ref} handBurger={handBur} />
        </div>

        {/* Navbar links (xl screen)*/}
        <NavbarLinks />

        {/* Navbar buttons */}
        <NavbarBtnGroup />
      </div>
    </div>
  );
}

export default HeaderLinkBtnContainer;
