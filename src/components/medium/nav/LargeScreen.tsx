import Image from "next/image";
import React from "react";
import HeaderLinkBtnContainer from "../HeaderLinkBtnContainer";
import HeaderAddressContainer from "../HeaderAddressContainer";

function LargeScreen() {
  return (
    <>
      {/* start of large screen header  */}
      <div className=" h-[200px] hidden md:grid w-full">
        {/* */}
        <div className="grid h-[100%] md:grid-cols-10">
          <div className="col-start-1 col-end-4 h-full grid grid-rows-10 grid-cols-3 logo-bg">
            <div className="flex items-center md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-8">
              <Image
                src="/logo.png"
                alt="Bliz"
                width={960}
                height={540}
                className="w-[200px]"
              />
            </div>

            <div className="col-start-1 col-end-4 md:row-start-8 md:row-end-11 bg-darkblue"></div>
          </div>
          {/* nav links and address container */}
          <div className="flex-1 h-[100%] md:col-start-4 md:col-end-11 3k:col-start-4 3k:col-end-10 md:grid grid-cols-7 grid-rows-10">
            {/* Address wrapper */}

            <HeaderAddressContainer />

            {/* nav links and button container */}
            <HeaderLinkBtnContainer />
          </div>
        </div>
      </div>
      {/* end of large screen header  */}
    </>
  );
}

export default LargeScreen;
