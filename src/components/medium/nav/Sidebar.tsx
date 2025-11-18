import { Close } from "@/constant/icons";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import Logo from "../../../assets/images/image.png";
import useMobile from "../../../hooks/useMobile";

type Props = {
  dropdown: boolean;
  handleDropdown: () => void;
  handleOpen: () => void;
};

const Sidebar = ({ handleOpen }: Props) => {
  const navigation = useRouter();

  const handleNavigation = (url: string) => {
    navigation.push(url);
    handleOpen();
  };

  const clSideBarContainer = `fixed top-0 left-0 w-[80vw] h-[100vh] bg-white z-10 p-7 px-5`;
  const clSiderBarInnerContainer = `bg-white h-[100%]`;
  const clSideBarLogoWrapper = `flex justify-between items-center`;
  const clSideBarLogoInnerWrapper = `mt-16`;
  const clSmNav = `mt-10`;
  const clSmUl = `md:hidden flex flex-col gap-5 h-[100%]`;
  const clSmLi = `link !text-darkblue`;

  // dropdown style
  // const clSmDropDownLi = `relative top-0 left-0 flex gap-3 items-center`;
  // const clSDropDownLiText = `link !text-darkblue`;

  // const clDropDownLi = `link !text-white`;

  const isMobile = useMobile();

  return (
    <div className={clSideBarContainer}>
      <div className={clSiderBarInnerContainer}>
        <div className={clSideBarLogoWrapper}>
          <div className={clSideBarLogoInnerWrapper}>
            <Image
              src={Logo}
              alt="Bliss Services Logo"
              width={isMobile ? 100 : 150}
              height={isMobile ? 100 : 150}
            />
          </div>
        </div>
        {/* ul */}
        <nav className={clSmNav}>
          <ul className={clSmUl}>
            <li onClick={() => handleNavigation("/")}>
              <span className={clSmLi}>HOME</span>
            </li>
            <li onClick={() => handleNavigation("/education")}>
              <span className={clSmLi}>STUDY ABROAD</span>
            </li>
            <li onClick={() => handleNavigation("/employment")}>
              <span className={clSmLi}>WORK ABROAD</span>
            </li>
            {/* <li onClick={() => handleNavigation("/service")}>
              <span className={clSmLi}>Services</span>
            </li> */}

            {/* igital litracy Dropdown */}
            {/* <li className={clSmDropDownLi} onClick={() => handleDropdown()}>
              <p className={clSDropDownLiText}>DIGITAL LITERACY</p>

              <ArrowDown
                className={`cursor-pointer text-darkblue ${
                  dropdown && "rotate-180"
                }`}
              />
              <div
                className={`absolute left-0 top-[40px] z-10 w-[200px] bg-darkblue rounded-md  px-4 py-5 ${
                  dropdown
                    ? "h-[150px] flex transition-all duration-500"
                    : "hidden h-[0]"
                }`}
              >
                <ul className=" xl:hidden flex flex-col gap-3 h-[100%]">
                  <li onClick={() => handleNavigation("/microsoft")}>
                    <span className={clDropDownLi}>Microsoft Suites</span>
                  </li>
                  <li onClick={() => handleNavigation("/ai")}>
                    <span className={clDropDownLi}>AI and Automation</span>
                  </li>
                  <li onClick={() => handleNavigation("/programming")}>
                    <span className={clDropDownLi}>Programming</span>
                  </li>
                </ul>
              </div>
            </li> */}
          </ul>
        </nav>

        {/* close */}
        <div
          className="cursor-pointer h-[35px] w-[35px] bg-gray-200 rounded-full flex justify-center items-center absolute top-7 right-7"
          onClick={() => handleOpen()}
        >
          <Close color="black" size={20} className="font-bold" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
