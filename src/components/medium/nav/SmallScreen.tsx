"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "@/constant/icons";
import Transparent from "@/components/small/Buttons/Transparent";
import Sidebar from "./Sidebar";
import Logo from "../../../assets/images/logo.png";
import Link from "next/link";
function SmallScreen() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const clSmallHeaderContainer = `mx-auto h-auto bg-transparent header__logo-bg relative left-0 top-0 lg:hidden `;
  const clLogoWrapper = `w-[95vw] lg:w-[95vw]  h-[100px] mx-auto flex justify-center items-center border-b border-white`;
  const clLogoInnerWrapper = `grid place-items-center`;
  const clSmContentContianer = `w-full h-[70px] bg-darkBlue`;
  const clSmContentInnerContainer = `w-[90vw] md:w-[90vw] mx-auto flex items-center h-[100%] justify-between`;

  return (
    <>
      {/* start of small screen header  */}
      <div className={clSmallHeaderContainer}>
        {/* Logo wrapper */}
        <div className={clLogoWrapper}>
          {/* small screen modal logo wrapper */}
          <div className={clLogoInnerWrapper}>
            <Link href={"/"}>
              <Image src={Logo} alt="Bliaz" width={250} height={250} />
            </Link>
          </div>
        </div>

        {/* siderNav control button */}
        <div className={clSmContentContianer}>
          <div className={clSmContentInnerContainer}>
            <Menu
              color="white"
              size={35}
              className="font-bold"
              onClick={() => handleOpen()}
            />
            <div className="flex gap-5">
              <Transparent text="Contact Us" url="/contact-us" />
            </div>
          </div>
        </div>

        {/* small screen siderNav */}
        {isOpen && (
          <Sidebar
            handleDropdown={handleDropdown}
            handleOpen={handleOpen}
            dropdown={dropdown}
          />
        )}
      </div>
    </>
  );
}

export default SmallScreen;
