import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="z-10 w-full items-center justify-center font-mono text-sm lg:flex lg:justify-end fixed bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:w-auto lg:bg-none text-center">
      <div className="relative p-6">
        <div className="absolute inset-0 bg-opacity-90 backdrop-blur-md rounded-t-xl" />
        <div className="relative px-4 py-3">
          A blog by&nbsp;
          <Link
            className="hover:scale-105 hover:font-medium transition duration-150 hover:underline"
            target="_blank"
            href="https://www.instagram.com/coderecipies/"
          >
            @coderecipies
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
