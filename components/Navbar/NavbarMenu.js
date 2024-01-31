import Image from "next/image";
import React from "react";

const NavbarMenu = () => {
  return (
    <nav className="flex items-center justify-between p-4 text-black bg-white">
      {/* Left side: Icon or Company Logo */}
      <div className="flex items-center">
        <Image
          src="/images/logo.png"
          alt="Company Logo"
          width={209} // Set the desired width
          height={63} // Set the desired height
          quality={100} // Set the image quality (0 to 100)
        />
        {/* <span className="ml-2 text-lg font-bold">Your Company</span> */}
      </div>

      {/* Right side: Navigation Menu and Login Button */}
      <div className="flex items-center space-x-4">
        {/* Navigation Menu */}
        <ul className="flex space-x-4 font-inter">
          <li className="hover:text-gray-300">Home</li>
          <li className="hover:text-gray-300">Projects</li>
          <li className="hover:text-gray-300">About</li>
          <li className="hover:text-gray-300">Services</li>
          <li className="hover:text-gray-300">Contact</li>
          <li className="hover:text-gray-300">Blog</li>
          <li className="hover:text-gray-300">FAQ</li>
        </ul>

        {/* Login Button */}
        <button className="px-4 py-2 font-medium uppercase text-black bg-greenColor rounded hover:bg-blue-600  w-[160.595px] h-[47px] flex-shrink">
          donate now
        </button>
      </div>
    </nav>
  );
};

export default NavbarMenu;
