import Image from "next/image";
import React from "react";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  return (
    <div className="flex-shrink-0 w-full h-[200px] outline-4 border-red-600 bg-white outline-dotted">
      <div className="flex items-center justify-end flex-shrink-0 w-full px-4 bg-orange h-[38px] gap-2">
        <div className="flex items-center">
          <div className="inline-flex ">
            <div className="flex-shrink-0 w-4 h-4 overflow-hidden bg-white rounded-full">
              <Image
                src="/images/mail.svg"
                alt="Example SVG"
                width={10}
                height={10}
                layout="fixed"
              />
            </div>
            <span className="text-sm text-white font-inter">
              saigramam@gmail.com
            </span>
          </div>
          <div className="inline-flex">
            <div className="flex-shrink-0 w-4 h-4 overflow-hidden bg-white rounded-full">
              <Image
                src="/images/telephone-call.svg"
                alt="Example SVG"
                width={10}
                height={10}
                layout="fixed"
              />
            </div>
            <span className="text-sm text-white font-inter">0471-2721422</span>
          </div>
        </div>
      </div>
      <div>
        <NavbarMenu />
      </div>
    </div>
  );
};

export default Navbar;
